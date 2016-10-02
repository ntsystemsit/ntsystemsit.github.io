---
layout: post
title: "Lync 2013 backend on SQL Cluster with mixed authentication mode"
date: 2014-08-15 17:37:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Lync", "en"]
redirect_from: ["/post/Lync-2013-backend-on-SQL-Cluster-with-mixed-authentication-mode", "/post/lync-2013-backend-on-sql-cluster-with-mixed-authentication-mode"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>So I came across this issue at a customer’s site the other day. </p> <h1>Environment</h1> <p>The customer runs multiple Lync 2013 Front End Servers in an enterprise pool with the backend and monitoring databases being hosted on a SQL 2008R2 Cluster (default instance) that is also used for other applications and, thus, uses mixed authentication mode.</p> <p>A SQL admin was present during the initial installation of the Lync Pool, and his credentials were used to perform the DB installation.</p> <h1>Problem</h1> <p>So far so good, but when the SQL admin was gone and the Lync Admins (members of RTCUniversalServerAdmins) tried to access the databases with cmdlets like Test-CsDatabase, Update-CsAdderssbook or Install-CsDatabase, they got a nasty little error like:</p> <p><code>Command execution failed: Property DefaultSchema is not available for Database '[LcsCDR]'. This property may not exist for this object, or may not be retrievable due to insufficient access rights.</code></p> <p>We verified the Logins and permissions on the SQL cluster and everything looked OK, meaning the logins and permissions for all the RTCUniversal… groups were there, just as expected. Still, the error would not go away.  <p>The problem seems to be, that Active Directory groups cannot be used with mixed mode authentication?? <h1></h1> <h1>Solution?</h1> <p>The only solution we found, was to add the user account of the Lync Admin as a login on the SQL cluster and assign permissions directly to the user. Once the user was granted permissions directly (and not through an AD group membership), the error disappeared and the cmdlets worked just fine. This, by the way, explains why the initial setup worked just fine: The SQL admin, whose account was used during setup, had a login and permissions configured for his AD user.</p> <p>The solution is OK for a temporary workaround, but is not very feasible for an enterprise deployment. If anyone has a better solution, I’d love to hear from you :)</p> <p>&nbsp;</p> <p>Cheers,<br>Tom</p>
