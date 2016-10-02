---
layout: post
title: "SharePoint 2013 Search Center – Windows 8"
date: 2012-11-06 12:18:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server", "Sharepoint"]
redirect_from: ["/post/SharePoint-2013-Search-Center-Windows-8", "/post/sharepoint-2013-search-center-windows-8"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>SharePoint 2013 Enterprise Search Center provides powerful indexing and search, not only for the local SharePoint instance but for file shares and other SharePoint farms as well.</p>
<p>More info: <a href="http://technet.microsoft.com/en-us/library/ee667266(v=office.15)">What's new in search in SharePoint Server 2013</a></p>
<h2>Federated Search</h2>
<p>Windows 7 and later support the connection of external sources through OpenSearch, which essentially is a Web Service that receives search queries by the client and returns results in either RSS or Atom XML format. This allows users to search remote data and view search results within Windows Explorer.</p>
<p>More info: <a href="http://msdn.microsoft.com/en-us/library/dd742958(v=VS.85).aspx">Federated Search in Windows</a></p>
<h2>Create OSDX File</h2>
<p>Now to get SharePoint search into Windows Explorer you need to create an OSDX (OpenSearch Description) file and deploy it to your clients.</p>
<p>Here is an example file that works for my SharePoint 2013 and Windows 8:</p>
<p style="background: white;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;?xml version="1.0" encoding="UTF-8"?&gt; </span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"&gt; </span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;ShortName&gt;SharePoint Search&lt;/ShortName&gt; </span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;Description&gt;Search the SharePoint Search Center&lt;/Description&gt; </span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;Url type="application/rss+xml" template="http://intranet.ntsystems.local/sites/searchcenter/_layouts/srchrss.aspx?k={searchTerms}&amp;amp;web.count=50"/&gt; </span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;Url type="text/html" template="http://intranet.ntsystems.local/sites/searchcenter/Pages/results.aspx?k={searchTerms}"/&gt; </span></p>
<p style="background: white;"><span style="color: blueviolet; font-family: Lucida Console; font-size: 9pt;">&lt;/OpenSearchDescription&gt; </span></p>
<p>&nbsp;</p>
<p>Simply create a new file using notepad, adjust the URLs to point to your SharePoint Enterprise Search Center and save it with the .osdx extension.<br />There are many possibilities for customization within the OSDX specification, check out MSDN to learn more about <a href="http://msdn.microsoft.com/en-us/library/dd742951(v=VS.85).aspx">Creating an OpenSearch Description File.</a></p>
<p>To test the OSDX files, double-click it and click "Add" to add the search connector to Windows Explorer.</p>
<p><img src="/assets/110612_1126_SharePoint21.png" alt="" /></p>
<p>This adds a link to "Favorites" so you can easily search SharePoint from there.</p>
<h2>Deploy OSDX</h2>
<p>Now, to deploy this to more than one client, you could publish a link to the OSDX file and have your users click on that link to add the search provider.</p>
<p>Alternatively Group Policy Preferences can be used to deploy the search connector:</p>
<ol>
<li>Copy the .searchConnector-ms file from your Client (%UserProfile%\Searches\) to a share that is available to the clients</li>
<li>
<div>Create a GPO and use the 'Files' GPP to copy the searchConnector-ms file from the share to %UserProfile%\Searches</div>
<p>&nbsp;</p>
<p><img src="/assets/110612_1126_SharePoint22.png" alt="" /></p>
<p>&nbsp;</p>
</li>
<li>
<div>Use the 'Shortcuts' GPP to create a Shortcut in the "User Profile, Links" folder, remember to select a nice Icon&hellip; ;)</div>
<p>&nbsp;</p>
<p><img src="/assets/110612_1126_SharePoint23.png" alt="" /></p>
<p>&nbsp;</p>
</li>
</ol>
<p>So that's how to get results from SharePoint into Windows Explorer.</p>
<p>&nbsp;</p>
<p>So long, <br />tom</p>
