---
title: Borgstore
hide_title: false
sidebar_position: 3
showLastUpdateAuthor: true
showLastUpdateTime: true
description: "Borgstore: storage center and process for researchers."
last_update:
  date: 2/27/2025
  author: Yue Yu
---

:::info
This page presents information and the purchasing process for Borgstore, the on-campus data-storage center that is directly connected to the Pinnacles cluster and available for purchase.  
:::

## Borgstore (BeeGFS)

Borgstore is UC Merced's on-campus data-storage center and is available for research PIs to purchase. Borgstore is used to store active, research-related data and has a usable capacity of 480 TB.

:::warning
Borgstore does not do data backups! Users are responsible for ensuring they have backups of their data and work.
:::

Borgstore is also made up of a metadata server with the following configuration:

| Component          | Specification                                       |
|--------------------|------------------------------------------------------|
| Chassis            | 1U dual Xeon Skylake SP                               |
| Drive bays         | 8x 2.5" Hotswap                                       |
| Memory             | 24 DIMM Sockets                                       |
| Management         | IPMI                                                  |
| Network            | Dual 10GbE-T base system                              |
| Metadata storage   | 8x 3.2TB Endurance Data Center PCIe NVMe 2.5" Solid State Drives |

Borgstore is accessible from the Pinnacles cluster.

### Request Borgstore
Borgstore is a purchasable service that can be requested [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4). Cost for active data storage is shown below. More information can be found [here](https://it.ucmerced.edu/Research-Computing-Services).
| billing rate     |
|-------------------|
| $51.20/TB/year       |    

### Accessing Data from Borgstore for a job
Once a user's PI has purchased Borgstore, a `borgstore` folder will appear under the user's `HOME` directory. This folder is a soft link to the user's purchased Borgstore path, with the full path being `/mnt/borgstore/PI_name/user_folder`.

To run an interactive job, the job must also be run from the Borgstore directory.

### Borgstore Permissions and Access

Permission changes are not recommended, especially those related to write access. Any accidental writes to another user's Borgstore folder will affect that Borgstore quota and, because of the resulting quota change, will influence the PI's billing.

PIs are allowed to access their group members' folders and perform file management. All usage can be monitored using the command `beegfs-ctl --getquota --gid <gid>`. The `gid` can be obtained from the command `id`, where the Group ID is the `gid`.

Instructions on file transfers can be found [here](https://github.com/ucm-it/hpc_docs/blob/main/docs/hpcdocs/HPC-clusters/data_share_transfer.mdx).


### Common questions about Borgstore

<details>

<summary>How to check my current occupied space on Borgstore? </summary>

Users cannot check a detailed breakdown of a group's users and their respective usage of the Borgstore storage. However, users can check their group's storage usage/total using the command `beegfs-ctl --getquota --gid`, and can check their ID number and Group ID via the command `id`.

</details>

<details>

<summary>When should I use Borgstore? </summary>

Borgstore is great for users who must readily access exceedingly large quantities of data that cannot fit onto our given data quotas in the shared workspace of `Home`, `Data`, and `Scratch`. Borgstore is also useful when the output(s) are huge and can quickly take up all the space in the `Data` folder.

</details>
<details>

<summary>I am having trouble accessing Borgstore, and the directories in the Command-Line Interface are flashing red?</summary>

If the path displayed is flashing red and the user is having issues directly accessing Borgstore, then the soft-links leading to Borgstore are broken or outdated. You can either use the full path instead, `/mnt/borgstore/PI_name/user_folder`, or open a ticket to get further assistance. Click [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) to open a ticket.

</details>
