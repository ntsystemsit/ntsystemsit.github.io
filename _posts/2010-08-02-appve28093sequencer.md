---
layout: post
title: "AppV–Sequencer"
date: 2010-08-02 20:36:00 +0200
comments: true
category: Archive
tags: ["Client"]
redirect_from: ["/post/AppVe28093Sequencer", "/post/appve28093sequencer"]
author: thomas torggler
---
<!-- more -->
<p>Der Microsoft Application Virtualization Sequencer ist ein Client oder Server der verwendet wird um virtuelle Applikationen zu erstellen.</p>  <p>Der Sequencer ist im Idealfall eine virtuelle Maschine, vor jedem „Sequencing“ sollte der Ausgangszustand des Sequencers der Selbe sein.</p>  <p>Man erstellt also eine neue virtuelle Maschine und installiert ein Betriebssystem seiner Wahl. Es müssen zwei Partitionen vorhanden sein, eine für das System und eine für das sogenannte Q-Drive.</p>  <p>Zu diesem Zeitpunkt sollte man so wenig Software wie möglich installieren, alles was auf dem Sequencer installiert wird muss auch auf den Clients installiert werden damit die virtuellen Applikationen laufen.</p>  <p>Es wird also der AppV Sequencer installiert und die zweite Partition mit NTFS Formatiert, dieser Partition weist man den Laufwerksbuchstaben Q: zu. Der Client soll in der Domain hängen und folgende Dienste sollten gestoppt und deaktiviert werden:</p>  <p>· Windows Update</p>  <p>· Windows Search</p>  <p>Jetzt wird die virtuelle Maschine heruntergefahren und das Feature <a href="/post/Windows-Virtual-PC-e28093-UnDo-und-Differencing-Disks.aspx" target="_blank">UnDo Disk</a> (VMWare: Nonpersistent Disk) wird aktiviert. Ab jetzt ist die Maschine bei jedem Start auf dem gleichen Stand und bereit ein Paket zu erstellen.</p>  <p>Wie ein Paket erstellt wird erkläre ich in <a href="/post/AppVe28093Adobe-Reader-Sequencing-Receipe.aspx" target="_blank">diesem Post</a>.</p>  <p>tom</p>
{% include imported_disclaimer.html %}
