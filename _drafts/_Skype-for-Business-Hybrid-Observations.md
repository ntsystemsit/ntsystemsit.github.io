---
layout: post
title: "Skype for Business Hybrid Observations"
date: 2017-12-27
comments: true
category: Cloud
tags: Office365, Lync, Skype4B, Hybrid
author: thomas torggler
updated: false
---

A collection of information about Skype for Business hybrid environments.


# CS Hosting Provider

Exchange Online Hosted VoiceMail 
Skype for Business Online

> Note: Make sure the Edge Servers can lookup the _sipfederationtls_ records for your domains. The targets must be the Edge Servers external interface.


# Exchange Integration

```powershell
#(Get-CsTenant -Filter {DisplayName -eq "iCOMcept Gmbh"}).TenantId
# use guid from above
New-CsOAuthServer microsoft.sts -MetadataUrl "https://accounts.accesscontrol.windows.net/6c0df916-8012-4746-b574-ce47ffb6bffa/metadata/json/1"
New-CsPartnerApplication -Identity microsoft.exchange -ApplicationIdentifier 00000002-0000-0ff1-ce00-000000000000 -ApplicationTrustLevel Full -UseOAuthServer
Set-CsOAuthConfiguration -ServiceName 00000004-0000-0ff1-ce00-000000000000

# Export the Lync OAuth Certificate and publish to O365 

$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate
$binaryValue = $certificate.GetRawCertData()
$credentialsValue = [System.Convert]::ToBase64String($binaryValue)
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate$certificate.Import("C:\Users\thomas.torggler\Desktop\sfboauth.cer")

New-MsolServicePrincipalCredential -AppPrincipalId 00000004-0000-0ff1-ce00-000000000000 -Type Asymmetric -Usage Verify -Value $credentialsValue
```

# Exchange 

```powershell
Set-CsOAuthConfiguration -ExchangeAutodiscoverUrl "http://autodiscover.icomcept.de/autodiscover/autodiscover.svc"
Test-CsExStorageConnectivity -SipUri "sip:tom@uclab.eu" -Verbose
```