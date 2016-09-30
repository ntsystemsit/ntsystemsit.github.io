---
layout: post
title: "Re-register Azure MFA Server"
date: 2016-02-22 18:00:46 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Azure"]
alias: ["/post/Re-register-Azure-MFA-Server.aspx", "/post/re-register-azure-mfa-server.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>If you also installed the Azure MFA Server with a MSDN Subscription and now want to switch to another subscription without re-installing the Server, you have to do the following. (Please keep in mind you loose all the settings you made within the MFA console)</p> <ol> <li>Export your users</li> <li>Make some screenshots of you configuration (Radius, Company settings ect..)</li> <li>Make a Backup of this folder: C:\Program Files\Multi-Factor Authentication Server\Data</li> <li>Stop the service “MultiFactorAuthSvc”</li> <li>Delete the folders content</li> <li>Start the service “MultiFactorAuthSvc”</li> <li>When you open the console the registration wizards starts and you can register the server with another subscription</li></ol> <p>Greetings</p>
