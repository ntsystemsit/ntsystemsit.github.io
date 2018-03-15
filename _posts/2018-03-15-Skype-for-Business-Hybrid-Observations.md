---
layout: post
title: "Skype for Business Hybrid Observations"
date: 2018-03-15
comments: true
category: Cloud
tags: Office365, Lync, Skype4B, Hybrid, Exchange
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

> Note: Make sure the **Edge Servers** can lookup the _sipfederationtls_ records for **your** domains. The targets must be the Edge Servers external interface. 

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
# Test
Test-CsExStorageConnectivity -SipUri "sip:tom@uclab.eu" -Verbose
```

> Note: The Front End Servers must be able to communicate with Exchange Online, otherwise the "Add Skype meeting" button will not be visible in Exchange Online OWA. This is also required for Modern Hybrid Authentication.


To be continued ;) 

Tom