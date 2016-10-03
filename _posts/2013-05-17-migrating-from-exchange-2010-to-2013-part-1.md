---
layout: post
title: "Migrating from Exchange 2010 to 2013 – part 1"
date: 2013-05-17 22:10:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["en", "Exchange", "Server"]
redirect_from: ["/post/Migrating-from-Exchange-2010-to-2013-part-1", "/post/migrating-from-exchange-2010-to-2013-part-1"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This is my first post about migrating from an existing Exchange 2010 environment to Exchange 2013. I&rsquo;ll try do cover everything that seems important to me, if I miss something that you think should be covered&hellip; well, that&rsquo;s what comments are for :)</p>
<h1>Preparing for Exchange 2013</h1>
<p>All servers in the Exchange 2010 organization must be running service pack 3, if you haven&rsquo;t already installed SP3, as always it&rsquo;s a very good idea to start with reading the <a href="http://technet.microsoft.com/en-us/library/jj965774(v=exchg.141).aspx">release notes</a>. On the Exchange 2013 side of things, we need Cumulative Update 1, there is a <a href="http://blogs.technet.com/b/exchange/archive/2013/04/02/released-exchange-server-2013-rtm-cumulative-update-1.aspx">very good post</a> at the Exchange Team Blog about that.</p>
<p>Ok, so assuming we are running Exchange 2010 SP3 and have downloaded CU1, let&rsquo;s get started with preparing the first Exchange 2013 server. All the required Windows Features can be installed with the InstallWindowsComponent.ps1 script located in the Setup\ServerRoles\Common directory of the CU1 install files. The script takes several parameters, in this case I&rsquo;ll be installing a multirole server, I want the AdminTools to be installed as well as the Remote Server Admin Tools for Active Directory.</p>
<p><code>.\InstallWindowsComponent.ps1 AdminTools, MailBox, ClientAccess -ADToolsNeeded:$True</code></p>
<p>Note that the script has no parameter for source files, the server needs internet access to download the required files. That&rsquo;s not always practical, so I edited the script and simply added &ldquo;&ndash;Source wim:d:\sources\install.wim:4&rdquo; to the Add-WindowsFeature cmdlet within the script.</p>
<p>After the required reboot, we need to install <a href="http://www.microsoft.com/en-us/download/details.aspx?id=34992">Unified Communications Managed API 4.0 Runtime</a>the Office Filter Pack is not mandatory and can be installed later on, it still produces a warning during setup, though.</p>
<p>Now that we have the new, designated Exchange 2013 server ready, we need to prepare Active Directory. Obviously, if you don&rsquo;t know what all this is about, don&rsquo;t do it! So, that said, from an elevated command prompt change to the directory containing the Exchange 2013 installation files. You&rsquo;ll need Schema, Enterprise and Domain Admin rights to run the following tasks.</p>
<p>In the first step, setup will extend the schema, this is done using:</p>
<p><code>.\setup.exe /IAcceptExchangeServerLicenseTerms /PrepareSchema</code></p>
<p>The next step is to prepare the Active Directory Forest, this creates the Microsoft Exchange container (if it doesn&rsquo;t already exist) and universal groups used by Exchange.</p>
<p><code>.\setup.exe /IAcceptExchangeServerLicenseTerms /PrepareAD /OrganizationName tomt</code></p>
<p>And the last step is to prepare the Domain, this needs to be done for every Domain that will contain Exchange servers or Mail-Enabled users, alternatively use /PrepareAllDomains:</p>
<p><code>.\setup.exe /IAcceptExchangeServerLicenseTerms /PrepareDomain</code></p>
<p>Each step relies on Active Directory to replicate changes throughout the topology, you should absolutely wait for the changes of each step to be replicated before continuing with the next step. In a distributed environment such a change needs to be properly planned and would typically take place during a maintenance window.</p>
<h1>&nbsp;</h1>
<h1>Installing Exchange 2013</h1>
<p>With all prerequisites checked, we can now continue with the installation of our first Exchange 2013 server. Easy as it is, I&rsquo;m not going to walk through graphical setup screens, you basically just select the server roles to be installed and click next. There is a command line version of the setup, too. Try setup.exe /help:Install for a list of parameters that can be used to customize the installation. The Exchange setup is pretty smart, meaning that it keeps track of the installation and if errors occur, you will be able to continue right from where the error happened, no need to click through all the windows again. It also provides a lot of information in the ExchangeSetupsLogs folder, located at the root of the drive on which Exchange is installed.</p>
<p>Something new with setup is that you cannot remove server roles anymore, the only way to do that would be to completely uninstall Exchange and re-install the role of choice.</p>
<p>So, installing Exchange 2013 was pretty easy, let&rsquo;s move on the the more interesting stuff.</p>
<h1>Managing Exchange 2013</h1>
<p>The first thing I wanted to see after the setup completed, was the shiny new Exchange Admin Center, so I went straight to IE and typed <a href="https://localhost/ecp">https://localhost/ecp</a>, I entered my credentials on the neat, new login screen only to see the good, old Exchange Control Panel from 2010. It took some time, but then I realized that that was exactly correct behavior. The Exchange 2013 Client Access Role is a stateless proxy and no longer responsible for rendering OWA (or anything for that matter) and my mailbox was still on Exchange 2010, so my request got proxied to 2010. There are two solutions for this, move your admin mailbox to 2013, or less troublesome, simply add ?ExchClientVer=15 to the URL. <a href="https://localhost/ecp?ExchClientVer=15">https://localhost/ecp?ExchClientVer=15</a> takes you right to the Admin Center. This is also the only way (I found) to access the Admin Center with a user that has no mailbox.</p>
<p>From an Exchange Management Shell point of view, everything is very similar to the way we are used from Exchange 2010, a new remoting session can simply be created using:</p>
<p><code>$Session = New-PsSession &ndash;ConnectionURI &lsquo;http://ex15.tomt.local/PowerShell&rsquo; &ndash;ConfigurationName 'Microsoft.Exchange&rsquo; <br />Import-PsSession $Session</code></p>
<p>That&rsquo;s it for the first part, in the second part I&rsquo;ll try to cover the basics of namespace planning, mail routing and maybe move some mailboxes.</p>
<p>I see some real world projects coming closer and I know Daniel is working hard on the topic, I&rsquo;m sure there is more content coming&hellip; :)</p>
<p><br />so long, enjoy your weekend!</p>
<p>tom</p>
