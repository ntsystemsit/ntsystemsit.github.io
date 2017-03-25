---
layout: post
title: "Hyper-Convergence with Nano Server: Part 1"
date: 2016-02-19 20:13:00 +0100
comments: true
category: Archive
tags: ["en", "Server"]
redirect_from: ["/post/Hyper-Convergence-with-Nano-Server-Part-1", "/post/hyper-convergence-with-nano-server-part-1"]
author: thomas torggler
---

In this post I’m walking through the steps creating the images for my Nano Servers and then deploying them. Like in <a href="/post/Installing-Nano-Server-using-WDS-and-PxE.aspx">this post</a>, I’ll use WDS for the deployment, so some steps might already be familiar.

<!-- more -->

# Create Nano Server Images

I installed a Windows 2016 TP4 Server with full desktop experience that serves as DHCP, WDS and management machine. I’ll run all of the scripts from there, you might as well use Windows 10 for it. So the first step is to create a new image, which is really quite similar as described in the post mentioned above.

What’s different, is that I’m creating an image for each node and I’m using the DominBlobPath parameter, so before creating the images, I have to harvest the blobs using “djoin.exe”. My servers are going to be named n01 trough n04, so I’m using a little foreach loop to get all four blobs and build the four images:  

<script src="https://gist.github.com/tomtorggler/5bf93f8297d7bab17db9.js"></script>

As noted in the intro post to this series, I’m running the first version of this lab on virtual machines, as I’m using ESXi as hypervisor, I needed to add the OEMDrivers as well as drivers for vmxnet3 NICs to the image. Those vmxnet3 drivers are located at DriversPath. I do also add Compute, Storage and Clustering packages, as we need them to provide Hyper-V and Storage Spaces Direct.

Do note that the boot image needs to include drivers for vmxnet3 as well, they can be added using the WDS admin console quite easily.

Once the images are created, we need to import them into WDS.

# Import into WDS

Again, I’m going to use the foreach loop to import all VHD files as WDS install images:

<script src="https://gist.github.com/tomtorggler/2111c19a00e77eb125c8.js"></script>

Now we are ready to create the Nano Server VMs and deploy from WDS.

# VMs
I create four VMs with the following specs on my lab ESXi host:

```
NumCPU = 2;
MemoryGB = 16;
DiskGB = 20;
DiskStorageFormat = 'Thin';
GuestID = 'windows9Server64Guest'
```

Then I remove the default NIC and add two of the Type 'vmxnet3' and make sure they are connected at startup. Finally, I add two hard disks to the VMs:

```
StorageFormat = 'Thin';
CapacityGB = 100;
DiskType = 'Flat'
```

 Once again, please note that I had to use the SATA controller for these data disks, using default LSA or even the VMware paravirtual controllers, resulted in the following error in the Cluster Validation Wizard:

 > Disk partition style is GPT. Disk has a Microsoft Reserved Partition. Disk type is BASIC. The required inquiry data (SCSI page 83h VPD descriptor) was reported as not being supported.

Using a SATA controller, and attaching the hard disks to that controller, solved the problem.

To install the Nano Servers, all I need to do now, is to boot the VMs, press F12 and select the right image on the Windows Deployment Service. About a minute later my server is ready :)

Yes, I did also create the VMs with PowerShell, look for a post on that soon…ish.

# Verify VMs

Once the VMs are installed, I create a CIM session and test connectivity by getting the system uptime like this. As all commands above, these are issued on my management machine (tp4):

<script src="https://gist.github.com/tomtorggler/c4c2312fa1dbcef5b674.js"></script>
