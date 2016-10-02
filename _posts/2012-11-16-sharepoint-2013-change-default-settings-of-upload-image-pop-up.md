---
layout: post
title: "Sharepoint 2013 change default settings of “Upload Image” Pop-Up"
date: 2012-11-16 18:22:40 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Sharepoint"]
redirect_from: ["/post/Sharepoint-2013-change-default-settings-of-Upload-Image-Pop-Up", "/post/sharepoint-2013-change-default-settings-of-upload-image-pop-up"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>When you upload files or images in Sharepoint you have get a pop-up that asks you about the file, destination library and an option to overwrite extsting files.</p>  <p><a href="/assets/image_466.png"><img title="image" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="image" src="/assets/image_thumb_464.png" width="244" height="114" /></a></p>  <p>When the pop-up appears the checkbox “Overwrite existing files” is checked. To change the default setting we have to change 2 aspx files:</p>  <ul>   <li>Navigate to C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\TEMPLATE\Layouts</li>    <li>Make a backup of the following files: <strong>upload.aspx </strong>and <strong>uploadex.aspx</strong></li>    <li>Edit the upload.aspx file</li>    <li>Locate the line which contains: &lt;asp:CheckBox id=”OverwriteSingle” Checked=”true” Text=&lt;%$Resources:wss,upload_document_Overwrite_file%&gt;” runat=”server” /&gt;</li>    <li>Change the Checked=”true” to Checked=”false“</li>    <li>Edit the uploadex.aspx file and make the same changes on the same lines</li>    <li>Save the files</li>    <li>Perform an IISRESET</li> </ul>  <p>The checkbox is now not selected default anymore.</p>  <p>Greetings   <br />nd</p>
