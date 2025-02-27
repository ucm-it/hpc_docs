---
title: Borgstore
hide_title: false
sidebar_position: 6
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2/27/2025
  author: Yue Yu
---
## Borgstore (BeeGFS)

Borgstore is UC Merced's on campus data-storage center and is available for research PI to purchase. Borgstore is used for store active,research-related data and has the use capacity of 480 terrabytes.

Borgstore is also made up of a metadata server with a `1U dual Xeon Skylake SP`, `8x 2.5" Hotswap`, `24 DIMM Sockets`, `IPMI`, `dual 10GbE-T base system` and `8x 3.2TB Endurance Data Center PCIe NVMe 2.5`.Solid State Drive metadata storage

Borgstore is now accessible on all nodes (MERCED and Pinnacles) with Infiniband (IB), all of the partitions contain a mixture of nodes of InfiniBand and non-InfiniBand nodes. If users want to submit jobs while at the Borgstore folder, the slurm option of #SBATCH --constraint=ib should be added to the job script. Example job script can be found here. More information pertaining to Borgstore can be found here

:::warning
Borgstore does not do data backups. Users are responsible for ensuring they have backups of thier data and work.
:::
### Request Borgstore
Borgstore is a purchasable service that can be requested [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4). Cost for active data storage is shown below. More information can be found [here](https://it.ucmerced.edu/Research-Computing-Services).
| Startup funds           |Non-startup funds                                                                               |
|------------------|------------------|
| $0.05/GB/year       |   $0.06/GB/year   |

### Accessing Data from Borgstore for a job
To access data that is located in Borgstore the user must be in the Borgstore folder/directory and must the submit job to the scheduler from this location. If users want to submit jobs while at the Borgstore folder, the slurm option of `#SBATCH --constraint=ib` should be added to the job script. 

To run an interactive job, the job must also be ran from the borgstore directory.

### Common questions about Borgstore

<details>

<summary>How to check my current occupied space on Borgstore? </summary>

Users can not check a detailed-breakdown of a group's users and their respective useage of the Borgstore storage. However, users can check thier Groups storage usage/total using the command `beegfs-ctl --getquota --gid`. And users can check their ID number and Group ID via the command `id`

</details>

<details>

<summary>When should I use Borgstore? </summary>

Borgstore is a great for users who must readily access exceedingly large quantities of data that can not fit onto our given data quotes in the shared workspace of `Home`,`Data` and `Scratch`. Borgstore is also useful when the output(s) are huge and can quickly take up all the space in the `Data` folder

</details>
<details>

<summary>I am having trouble accessing the Borgstore and the direcotries in the Command-Line Interface is blanking red?</summary>

If the path displayed is flashing red and user is having issues directly accessing the Borgstore then the soft-links leading to the Borgstore are broken or outdated. It is best to open a ticket to get further assitance. Click [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) to open a ticket.

</details>
