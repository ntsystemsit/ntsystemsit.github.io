---
layout: post
title: "Skype for Business Hybrid Observations"
date: 2018-03-15
comments: true
category: Cloud
tags: Office365 Lync Skype4B Hybrid Exchange
author: thomas torggler
updated: 2018-12-02
---

A collection of information about Skype for Business in hybrid environments.

<!-- more -->

# Hosting Provider

Exchange Online Hosted VoiceMail 

```powershell
New-CsHostingProvider -Identity 'ExchangeOnline' -Enabled:1 -EnabledSharedAddressSpace:1 -HostsOCSUsers:0 -ProxyFqdn "exap.um.outlook.com" -IsLocal:0 -VerificationLevel UseSourceVerification
```

Skype for Business Online

```powershell
New-CsHostingProvider -Identity "SkypeforBusinessOnline" –Enabled:1 -ProxyFQDN "sipfed.online.lync.com" – EnabledSharedAddressSpace:1 -VerificationLevel UseSourceVerification – HostsOCSUsers:1 -AutodiscoverUrl 'https://webdir.online.lync.com/Autodiscover/AutodiscoverService.svc/root'
```

> Note: Make sure the **Edge Servers** can lookup the \_sipfederationtls records for **your** domains. The targets must be the Edge Server's external interface. 

# Push Notification

For the push notification service to work, make sure the Skype for Business Online hosting provider has been configured and add _push.lync.com_ to the allowed domains. Then enable the Push Notification Configuration: 

```powershell
New-CsAllowedDomain -Identity "push.lync.com"
Set-CsPushNotificationConfiguration -EnableMicrosoftPushNotificationService $True – EnableApplePushNotificationService $True
```

# Exchange Online Integration

```powershell
# SFB Online PowerShell: Get Tenant Guid
(Get-CsTenant).TenantId.Guid

# SFB On-Premises PowerShell: OAuth Configuration
New-CsOAuthServer microsoft.sts -MetadataUrl "https://accounts.accesscontrol.windows.net/<GUID from above>/metadata/json/1"
New-CsPartnerApplication -Identity microsoft.exchange -ApplicationIdentifier 00000002-0000-0ff1-ce00-000000000000 -ApplicationTrustLevel Full -UseOAuthServer
Set-CsOAuthConfiguration -ServiceName 00000004-0000-0ff1-ce00-000000000000
# SFB On-Premises PowerShell: Export SfB OAuth Certificate (on Front End Server)
$thumbprint = (Get-CsCertificate -Type OAuthTokenIssuer).Thumbprint
Export-Certificate -Cert Cert:\localMachine\my\$Thumbprint -FilePath C:\oAuth.cer
# SFB On-Premises PowerShell: Point Autodiscover to EXO
Set-CsOAuthConfiguration -ExchangeAutodiscoverUrl "https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc"

# MSOnline PowerShell: Publish OAuth Cert and Add Service Principal Name
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate
$certificate.Import("C:\oAuth.cer")
$binaryValue = $certificate.GetRawCertData()
$credentialsValue = [System.Convert]::ToBase64String($binaryValue)
New-MsolServicePrincipalCredential -AppPrincipalId 00000004-0000-0ff1-ce00-000000000000 -Type Asymmetric -Usage Verify -Value $credentialsValue
# Add Service Principal Name (sfb pool web services)
$MsolSP = Get-MsolServicePrincipal -AppPrincipalId 00000004-0000-0ff1-ce00-000000000000
$MsolSP.ServicePrincipalNames.Add("00000004-0000-0ff1-ce00-000000000000/sfbwebext.uclab.eu")
$MsolSP | Set-MsolServicePrincipal
```

The Service Principal Names can alternatively be set using the `*-AzureRmADServicePrincipal` cmdlets from the `AzureRM` module.

Once the configuration is complete, we can test Exchange Storage connectivity with the following command: 

```
Test-CsExStorageConnectivity -SipUri "sip:tom@uclab.eu" -Verbose
```

> Note: The **Front End Servers** must be able to communicate with Exchange Online (directly or via proxy), otherwise the "Add Skype meeting" button will not be visible in Exchange Online OWA. This is also required for Modern Hybrid Authentication.

To troubleshoot the Exchange Online Integration, run an UCWA (Web Infrastructure) trace on the Front End Servers. You should see incoming requests from Exchange Online and the corresponding responses from the Front End.

```
# Request: 
Start-Line: POST /ucwa/oauth/v1/applications
Start-Line: GET /ucwa/oauth/v1/applications/103925742291/onlineMeetings/defaultValues
Start-Line: GET /ucwa/oauth/v1/applications/103925742291/onlineMeetings/customInvitation
Start-Line: GET /ucwa/oauth/v1/applications/103925742291/onlineMeetings/phoneDialInInformation
...
User-Agent: Exchange/15.20.588.14/OnlineMeeting
Content-Type: application/vnd.microsoft.com.ucwa+json
Accept: application/vnd.microsoft.com.ucwa+json
X-ExCompId: OnlineMeeting

# Response:
Start-Line: 200 OK
Content-Type: application/vnd.microsoft.com.ucwa+json; charset=utf-8
{"accessLevel": "Everyone","entryExitAnnouncement":"Enabled","attendees":[],"automaticLeaderAssignment":"SameEnterprise","description":"","leaders":[],"onlineMeetingId":"RMANN9FF","onlineMeetingUri":"sip:tom@uclab.eu;gruu;opaque=app:conf:focus:id:RMANN9FF","onlineMeetingRel":"myOnlineMeetings","organizerUri":"sip:tom@uclab.eu","conferenceId":"257150","phoneUserAdmission":"Enabled","lobbyBypassForPhoneUsers":"Disabled","subject":"","joinUrl":"https://meet.uclab.eu/tom/RMANN9FF","2c04865e-a621-4a4d-81e0-8047131f87d8":"please pass this in a PUT request","_links":{"self":{"href":"/ucwa/oauth/v1/applications/103925742291/onlineMeetings/myOnlineMeetings/RMANN9FF"},"onlineMeetingExtensions":{"href":"/ucwa/oauth/v1/applications/103925742291/onlineMeetings/myOnlineMeetings/RMANN9FF/extensions"}},"rel":"myOnlineMeeting","etag":"3055269905"}
...
```

# Modern Authentication

To use modern authentication with Skype for Business, the ADFS Server has to be prepared using the [sfbadalscripts](https://aka.ms/sfbadalscripts). More information about how to use the scripts can be found [here](https://technet.microsoft.com/en-us/library/mt710548.aspx?f=255&MSPPError=-2147217396). The script has to be run on the ADFS server, be sure to include all internal and external URLs of the Skype deployment in the _PoolIds_ parameter.

```powershell
.\Setup-Adfs2016OAuthTrustForSfB.ps1 -PoolIds 'https://sfbwebext.uclab.eu/','https://sfbwebint.uclab.eu/'
```

When the ADFS Server has been prepared, the following commands can be used to enable modern authentication.

> Note: This can only be configured globally, double-check the prerequisites and, even though existing sessions will not be re-authenticated, schedule a maintenance window.

```powershell
# Create new OAuth Server
New-CsOAuthServer -Identity uclabFS -Type ADFS -MetadataURL "https://fs.uclab.eu/FederationMetadata/2007-06/FederationMetadata.xml"
# Require Authorization using ADFS
Set-CsOAuthConfiguration -ClientAuthorizationOAuthServerIdentity uclabFS
```

After that just wait for the management store replication to publish the change and test it with a client or the _Test-CsRegistration_ cmdlet.

> To roll back the change simply set the ClientAuthorizationOAuthServerIdentity parameter to $null.


# Hybrid Modern Authentication

For hybrid authentication to work, we need to add more SPNs to the MSOL Service Principal. Add all internal and external Web Services URLs of the Skype deployment to the list:

```powershell
# MSOnline PowerShell
$MsolSP = Get-MsolServicePrincipal -AppPrincipalId 00000004-0000-0ff1-ce00-000000000000
$MsolSP.ServicePrincipalNames.Add("https://sfbwebext.uclab.eu")
$MsolSP.ServicePrincipalNames.Add("https://sfbwebint.uclab.eu")
$MsolSP | Set-MsolServicePrincipal
```

Then, add the evoSTS (Azure AD Federation Service) to the Skype for Business OAuth configuration and enable it using:

```powershell
# Create new OAuth Server
New-CsOAuthServer -Name evoSTS -IssuerIdentifier sts.windows.net -MetadataUrl "https://login.windows.net/common/FederationMetadata/2007-06/FederationMetadata.xml" -Type AzureAd -AcceptSecurityIdentifierInformation $True
# Require Authorization using Azure AD
Set-CsOAuthConfiguration -ClientAuthorizationOAuthServerIdentity evoSTS
```

On the client, make sure to set [AllowAdalForNonLyncIndependentOfLync](https://support.microsoft.com/en-us/help/3082803/info-about-the-allowadalfornonlyncindependentoflync-setting-in-skype-f) and [Enable Modern Authentication](https://support.office.com/en-us/article/enable-modern-authentication-for-office-2013-on-windows-devices-7dc1c01a-090f-4971-9677-f1b192d6c910) if required.

```powershell
$a = New-CsClientPolicyEntry -name AllowAdalForNonLyncIndependentOfLync -value "True"
Set-CsClientPolicy -Identity Global -PolicyEntry @{Add=$a} 
```

```
HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\1x.0\Lync
"AllowAdalForNonLyncIndependentOfLync"=dword:00000001
```


# Hybrid Voice

If we move enterprise voice users to the cloud they can still use our on-perm PSTN connectivity to make and receive calls. For that to happen, we need Skype for Business Edge Servers and the edge's next-hop pool must also be running Skype. Then we configure a PSTN Usage for the online users as well as an Online Voice Routing policy. In it's most basic form we need the following:

```powershell
# SFB Online PowerShell: Create the PSTN Usage
Set-CsOnlinePstnUsage  -Identity Global -Usage @{Add="Unrestricted"}

# Create and assign the Voice Routing policy
New-CsOnlineVoiceRoutingPolicy OnlineVRP -OnlinePstnUsages Unrestricted
Grant-CsOnlineVoiceRoutingPolicy -Identity tom@uclab.eu -PolicyName OnlineVRP
```

To move a user from on-premises **to** Skype for Business Online, use the following:

```powershell
Move-CsUser -Identity tom@uclab.eu -Target sipfed.online.lync.com -Credential (Get-Credential)
```

To move a user **from** Skype for Business Online to on-premises, use the following:

```powershell
Move-CsUser -Identity tom@uclab.eu -Target sfb01.uclab.eu -Credential (Get-Credential) -HostedMigrationOverrideUrl https://admin1e.online.lync.com/HostedMigration/hostedmigrationService.svc
```

The host part of the _HostedMigrationOverrideUrl_ parameter can change based on where your tenant is hosted. To determine the host part, open the **legacy** Skype for Business admin center and copy the URL. It should look something like this: `https://webdir1e.online.lync.com/LSCP`

Then replace _webdir_ with _admin_ and _LSCP_ with _HostedMigration/hostedmigrationService.svc_. You think I am making this up, right? Read more [here](https://docs.microsoft.com/en-us/skypeforbusiness/skype-for-business-hybrid-solutions/deploy-hybrid-connectivity/move-users-from-skype-for-business-online-to-on-premises#move-online-users-who-were-originally-on-premises-to-on-premises).


Skype for Business Online users must be assigned an E5 license or have PSTN calling added to their E1/E3 plans to be able to make and receive calls.


To be continued ;) 

Tom