---
layout: post
title: "Skype for Business Hybrid Observations"
date: 2018-03-15
comments: true
category: Cloud
tags: Office365 Lync Skype4B Hybrid Exchange
author: thomas torggler
updated: false
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
$MsolSP.ServicePrincipalNames.Add("00000004-0000-0ff1-ce00-000000000000/lync.example.com")
$MsolSP | Set-MsolServicePrincipal
```

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

To be continued ;) 

Tom