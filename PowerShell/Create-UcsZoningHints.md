---
layout: post
title:  "Create-UcsZoningHints"
date:   2016-08-08 21:26:14 +0200
comments: true
excerpt_separator: <!--more-->
tags: Cisco PowerShell
author: "ttorggler"
---

This script uses the CiscoUcs PowerTool to get information about one or more service profiles and creates SIST zoning configuration for NX-OS. The Target's device-alias as well as the name for the ZoneSet and the VSAN can be specified with parameters. Zone names will be automatically created.
<!--more-->

# Syntax
```
.\Create-UcsZoningHints.ps1 -Name <String> [-UcsCentral] [-TargetAlias <String[]>] [-TargetPwwn <String[]>] [-vsan <Int32>] [-ZoneSet <String>] [-Fabric <String>] [-OutFile <FileInfo>] [<CommonParameters>]

.\Create-UcsZoningHints.ps1 -InputObject <Object> [-UcsCentral] [-TargetAlias <String[]>] [-TargetPwwn <String[]>] [-vsan <Int32>] [-ZoneSet <String>] [-Fabric <String>] [-OutFile <FileInfo>] [<CommonParameters>]

.\Create-UcsZoningHints.ps1 [-UcsCentral] -TemplateName <String> [-TargetAlias <String[]>] [-TargetPwwn <String[]>] [-vsan <Int32>] [-ZoneSet <String>] [-Fabric <String>] [-OutFile <FileInfo>] [<CommonParameters>]
```

# Inputs
- Cisco.Ucsm.LsServer
- Cisco.UcsCentral.LsServer

You can pipe objects of the above types to this script.

# Outputs
- System.Management.Automation.PSObject
- System.String

Depending on the parameters used, this script writes a custom PSObject or a System.String to the pipeline. The default behavior is to output a custom PSObject. If the ```–OutFile``` parameter is used, a string will be output instead.

# Example 1
```
PS Scripts:\> Connect-Ucs 192.168.1.100
PS Scripts:\> Get-UcsServiceProfile -Name HVSV02 | .\Create-UcsZoningHints.ps1 -TargetAlias vnx-a

Id CommandLine
-- -----------
0 ! Fabric A
1 device-alias database
2  device-alias name HVSV02-vHba-A pwwn 20:01:00:25:B5:00:0A:41
3 device-alias commit
4 ! Zones
5 zone name HVSV02-vHba-A_vnx-a vsan 1
6  member device-alias vnx-a
7  member device-alias HVSV02-vHba-A
8 ! Zoneset
9 zoneset name myZoneSet vsan 1
10  member HVSV02-vHba-A_vnx-a
11 ! zoneset activate name myZoneSet vsan 1
````

In this example, we use Connect-Ucs to connect to an instance of UCS Manager. Using Get-UcsServiceProfile we get the Service Profile with a name of "HVSV02", piping the Service Profile object to this script, creates the output shown above. The –TargetAlias parameter specifies the device-alias to use as zone target.
Lines 1-3 create a device-alias for the vHBA of Fabric A in the NX-OS configuration.
Lines 5-7 create a zone create a SIST zone and adds the vHBA's and the target's device-aliases as members.
Lines 9 and 10 add the newly created zone to an existing zoneset configuration.
Line 11 can be uncommented to activate the updated zoneset.

# Example 2
```
PS Scripts:\> Connect-UcsCentral 192.168.1.102
PS Scripts:\> Get-UcsCentralServiceProfile -Name HVSV02 | .\Create-UcsZoningHints.ps1 -TargetAlias vnx-a -UcsCentral

Id CommandLine
-- -----------
0 ! Fabric A
1 device-alias database
2  device-alias name HVSV02-vHba-A pwwn 20:01:00:25:B5:00:0A:41
3 device-alias commit
4 ! Zones
5 zone name HVSV02-vHba-A_vnx-a vsan 1
6  member device-alias vnx-a
7  member device-alias HVSV02-vHba-A
8 ! Zoneset
9 zoneset name myZoneSet vsan 1
10  member HVSV02-vHba-A_vnx-a
11 ! zoneset activate name myZoneSet vsan 1
```
In this example, we use Connect-UcsCentral to connect to an instance of UCS Central. Using Get-UcsCentralServiceProfile we get the Service Profile with a name of "HVSV02", piping the Service Profile object to this script, using the Parameter –UcsCentral creates the output shown above.


# Example 3
```
PS Scripts:\> Get-UcsServiceProfile -AssignState assigned | .\Create-UcsZoningHints.ps1 –TargetAlias vnx-b -Fabric B -ZoneSet cfg-prod

Id CommandLine
-- -----------
0 ! Fabric B
1 device-alias database
2  device-alias name ESX01-vHba-B pwwn 20:01:00:25:B5:00:0B:01
3  device-alias name ESX02-vHba-B pwwn 20:01:00:25:B5:00:0B:02
4  device-alias name HVSV02-vHba-B pwwn 20:01:00:25:B5:00:0B:41
5 device-alias commit
6 ! Zones
7 zone name ESX01-vHba-B_vnx-b vsan 1
8  member device-alias vnx-b
9  member device-alias ESX01-vHba-B
10 zone name ESX02-vHba-B_vnx-b vsan 1
11  member device-alias vnx-b
12  member device-alias ESX02-vHba-B
13 zone name HVSV02-vHba-B_vnx-b vsan 1
14  member device-alias vnx-b
15  member device-alias HVSV02-vHba-B
16 ! Zoneset
17 zoneset name cfg-prod vsan 1
18  member ESX01-vHba-B_vnx-b
19  member ESX02-vHba-B_vnx-b
20  member HVSV02-vHba-B_vnx-b
21 ! zoneset activate name cfg-prod vsan 1
```
This example uses the -AssignState parameter when getting Service Profiles from UCS Manager. This will retrieve all Service Profiles that are assigned to a physical server. Piping the retrieved Service Profile objects to this script, creates zones from each individual vHBA of each server to the device-alias specified using the –TargetAlias parameter.
The -Fabric parameter specifies which Cisco UCS SwitchId is used to query vHBA information.
The -ZoneSet parameter specifies the name of the zoneset to use in the configuration snippet.

# Example 4
```
PS Scripts:\> Get-UcsServiceProfile | .\Create-UcsZoningHints.ps1 -Fabric B -Vsan 200 -OutFile c:\temp\zoneset.txt
! Fabric A
device-alias database
device-alias name HVSV02-vHba-A pwwn 20:01:00:25:B5:00:0A:41
...
```
This example creates zoning configuration for all configured Service Profiles. The -OutFile parameter specifies a filename where the output is written to. The output is also written to the pipeline.
Note: Using the -OutFile parameter does not output an object but a simple string of commands to make copy/pasting easier. 
(alternatively use "| Select-Object -ExpandProperty CommandLine")
The -Vsan parameter specifies the Id of the vsan to use in the NX-OS configuration.

# Example 5
````
PS Scripts:\> Get-UcsServiceProfile | .\Create-UcsZoningHints.ps1 -TargetAlias vnx-1-a,vnx-2-a
````
This example creates zoning configuration for all configured Service Profiles to all specified Targets.

# Download
I uploaded the Script to the PowerShell Gallery, so you can easily download it using:

```
Save-Script -Name Create-UcsZoningHints -Path <path>
```

# Source 
Find the source over at my GitHub [Repository](https://github.com/tomtorggler/CiscoUCS) 