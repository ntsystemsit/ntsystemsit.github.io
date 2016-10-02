---
layout: post
title: "PowerShell Scripts"
date: 2010-12-07 11:18:51 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: []
redirect_from: ["/page/PowerShell-Scripts", "/page/powershell-scripts"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Achtung: Diese Scripts sind Beispiele, sie sind <strong>nicht</strong> f&uuml;r die Verwendung in Produktivsystemen gedacht! Die Autoren von ntSystems.it k&ouml;nnen keine Haftung f&uuml;r eventuelle Sch&auml;den durch diese Scripts &uuml;bernehmen.</p>
<p>&nbsp;</p>
<p><strong>Exchange: Set SimpleDisplayName on all Mailboxes where this Attribute is empty; change characters like &ouml; to oe; send E-Mail if script fails</strong></p>
<div id="codeSnippetWrapper" style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; width: 97.5%; font-family: 'Courier New', courier, monospace; direction: ltr; max-height: 200px; font-size: 8pt; overflow: auto; cursor: text; border: silver 1px solid; padding: 4px;">
<div id="codeSnippet" style="text-align: left; line-height: 12pt; background-color: #f4f4f4; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;">
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum1" style="color: #606060;">   1:</span> Import-Module 'C:\Users\daniel nitz\AppData\Roaming\Microsoft\Exchange\RemotePowerShell\ex2k10.domain.<span style="color: #0000ff;">local</span>\ex2k10.domain.<span style="color: #0000ff;">local</span>.psm1'</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum2" style="color: #606060;">   2:</span>&nbsp; </pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum3" style="color: #606060;">   3:</span> $Mailboxes = get-Mailbox | where {$_.SimpleDisplayName -eq <span style="color: #006080;">""</span>}</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum4" style="color: #606060;">   4:</span> <span style="color: #0000ff;">if</span>($Mailboxes -ne $null)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum5" style="color: #606060;">   5:</span> {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum6" style="color: #606060;">   6:</span>     try {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum7" style="color: #606060;">   7:</span>         ForEach ($Mailbox <span style="color: #0000ff;">in</span> $Mailboxes)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum8" style="color: #606060;">   8:</span>         {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum9" style="color: #606060;">   9:</span>             $NameString = $Mailbox.Name</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum10" style="color: #606060;">  10:</span>             <span style="color: #0000ff;">if</span>($NameString -match <span style="color: #006080;">"&uuml;"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum11" style="color: #606060;">  11:</span>                 {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum12" style="color: #606060;">  12:</span>                 $NameString = ($NameString -replace <span style="color: #006080;">"&uuml;"</span>,<span style="color: #006080;">"ue"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum13" style="color: #606060;">  13:</span>                 }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum14" style="color: #606060;">  14:</span>             <span style="color: #0000ff;">if</span>($NameString -match <span style="color: #006080;">"&auml;"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum15" style="color: #606060;">  15:</span>                 {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum16" style="color: #606060;">  16:</span>                 $NameString = ($NameString -replace <span style="color: #006080;">"&auml;"</span>,<span style="color: #006080;">"ae"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum17" style="color: #606060;">  17:</span>                 }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum18" style="color: #606060;">  18:</span>             <span style="color: #0000ff;">if</span>($NameString -match <span style="color: #006080;">"&ouml;"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum19" style="color: #606060;">  19:</span>                 {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum20" style="color: #606060;">  20:</span>                 $NameString = ($NameString -replace <span style="color: #006080;">"&ouml;"</span>,<span style="color: #006080;">"oe"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum21" style="color: #606060;">  21:</span>                 }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum22" style="color: #606060;">  22:</span>             Set-Mailbox -Identity $Mailbox.Name -SimpleDisplayName ($NameString + <span style="color: #006080;">" - COMPANY"</span>)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum23" style="color: #606060;">  23:</span>         }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum24" style="color: #606060;">  24:</span>     } Catch {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum25" style="color: #606060;">  25:</span>         Send-MailMessage -<span style="color: #0000ff;">to</span> daniel.nitz@domain.<span style="color: #0000ff;">local</span> -Subject <span style="color: #006080;">"Exchange Shell Script Error"</span> -from ex2k10@domain.<span style="color: #0000ff;">local</span> -SmtpServer ex2k10.domain.<span style="color: #0000ff;">local</span></pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum26" style="color: #606060;">  26:</span>     }               </pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum27" style="color: #606060;">  27:</span> }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum28" style="color: #606060;">  28:</span>     </pre>
<!--CRLF--></div>
</div>
<p>&nbsp;</p>
<p><strong>Exchange: Set Out of Office Assistent on Mailboxes where the &ldquo;Office&rdquo; property isn&acute;t empty</strong></p>
<div id="codeSnippetWrapper" style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; width: 97.5%; font-family: 'Courier New', courier, monospace; direction: ltr; max-height: 200px; font-size: 8pt; overflow: auto; cursor: text; border: silver 1px solid; padding: 4px;">
<div id="codeSnippet" style="text-align: left; line-height: 12pt; background-color: #f4f4f4; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;">
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum1" style="color: #606060;">   1:</span> Import-Module 'C:\Users\daniel nitz\AppData\Roaming\Microsoft\Exchange\RemotePowerShell\ex2k10.domain.<span style="color: #0000ff;">local</span>\ex2k10.domain.<span style="color: #0000ff;">local</span>.psm1'</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum2" style="color: #606060;">   2:</span>&nbsp; </pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum3" style="color: #606060;">   3:</span> $Mailboxes = get-Mailbox | where {$_.Office -ne <span style="color: #006080;">""</span>}</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum4" style="color: #606060;">   4:</span> try {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum5" style="color: #606060;">   5:</span>     $OOFTextExternal = ${E:\OOF-Text\External-Text.txt}</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum6" style="color: #606060;">   6:</span>     $OOFTextInternal = ${E:\OOF-Text\Internal-Text.txt}</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum7" style="color: #606060;">   7:</span>     </pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum8" style="color: #606060;">   8:</span>     ForEach ($Mailbox <span style="color: #0000ff;">in</span> $Mailboxes)</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum9" style="color: #606060;">   9:</span>     {</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum10" style="color: #606060;">  10:</span>         Set-MailboxAutoReplyConfiguration -Identity $Mailbox.Name -AutoReplyState scheduled -StartTime <span style="color: #006080;">"2011.01.21T07:00"</span> -EndTime <span style="color: #006080;">"2011.01.21T19:00"</span> -ExternalAudience All -ExternalMessage $OOFTextExternal -InternalMessage $OOFTextInternal   </pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum11" style="color: #606060;">  11:</span>     }</pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: #f4f4f4; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum12" style="color: #606060;">  12:</span> } Catch { Send-MailMessage -<span style="color: #0000ff;">to</span> daniel.nitz@domain.<span style="color: #0000ff;">local</span> -Subject <span style="color: #006080;">"Exchange Shell Script Error"</span> -from ex2k10@domain.<span style="color: #0000ff;">local</span> -SmtpServer ex2k10.domain.<span style="color: #0000ff;">local</span></pre>
<!--CRLF-->
<pre style="text-align: left; line-height: 12pt; background-color: white; margin: 0em; width: 100%; font-family: 'Courier New', courier, monospace; direction: ltr; color: black; font-size: 8pt; overflow: visible; border-style: none; padding: 0px;"><span id="lnum13" style="color: #606060;">  13:</span> }</pre>
<!--CRLF--></div>
</div>
