## MERCED cluster <!-- {docsify-ignore} -->

MERCED (Multi-Environment Research Computer for Exploration and
Discovery) Cluster is a 1,872 core Linux based high performance computing cluster. The MERCED cluster runs with the [Rocky8.10](https://rockylinux.org/) operating system, and employs the [Slurm](https://slurm.schedmd.com/) job scheduler and queueing system to manage job runs.


## MERCED recharge service <!-- {docsify-ignore} -->
Beggining in Febuary 2023, MERCED has transitioned to a recharge service model. 

In order to minimize disruptions to computational research on MERCED cluster, the Provost’s office has provided bridge funding for all MERCED cluster PIs for core-hour usage on MERCED through June 30, 2024

?>__OIT-CIRT will begin to charge the PIs the core-hours used beginning July 1st, 2024. More information can be found [here](commun.md#4524)__



__Faculty PIs__: Please ensure that the user accounts are active and provide the COA# [here](https://merced-my.sharepoint.com/personal/yyu49_ucmerced_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyyu49%5Fucmerced%5Fedu%2FDocuments%2FMERCED%5Frecharge&ct=1639436999554&or=OWA%2DNT&cid=61ce730a%2D0df2%2Dd438%2D7bdf%2Dbe138cf58c23). Email cirt@ucmerced.edu for more assistance.

What is the unit of cost service? MERCED cluster cycles will be charged by **core-hours<sup>(1)</sup>**.

(1)  A core-hour is a single compute core<sup>(2)</sup> used for one hour (a core-hour) and 2G of RAM. The total cost in core-hours for a complete computation is:
```text
Total Cost ($) = # of core x Duration (wall clock hours) x (cost per core-hour)
```
!> **For UC users, the cost per core-hour is $0.01, and the cost for non-UC external users is $0.02.**

(2)  A core is an individual processor: the part of a computer that executes programs. (The MERCED cluster has about 3100 cores.)


## System overview
MERCED hosts 66 CPU compute nodes including 25 high memory nodes. Please be aware that
the nodes among MERCED cluster are multigenerational, meaning that the CPU
processors from different nodes are having different features, the table shows below
listed detailed node information. Users may experience relative big
performance variations when running the same jobs on different nodes.

The table below listed all MERCED cluster CPU compute nodes features, and their
processors generations.

| Nodes        | feature                                                    | RAM   | Total cores per nodes | InfiniBand (IB) |
|--------------|------------------------------------------------------------|-------|-----------------------|----------------|
| 33-43        | Broadwell,avx2,E5-2650_v4,local scratch 932GB              | 128GB | 24                    | yes            |
| 44           | Broadwell,avx2,E5-2650_v4,local scratch 932GB              | 112GB | 24                    | yes            |
| 45-60        | Broadwell,avx2,E5-2650_v4,local scratch 932GB              | 257GB | 24                    | yes            |
| 61-72        | Broadwell,avx2,E5-2650_v4,local scratch 447GB              | 257GB | 24                    | yes            |
| 73-76, 79-88 | Broadwell,avx2,E5-2650_v4,local scratch 932GB              | 128GB | 24                    | yes            |
| 77           | Broadwell,avx2,E5-2650_v4,no local scratch                 | 128GB | 24                    | yes            |
| 89-104       | Skylake,sse4.2,avx,avx2,avx512,Gold_6130, no local scratch | 191GB | 32                    | yes            |
| 105-114       | cascadelake,sse4.2,avx,avx2,avx512,Gold_6230, no local scratch | 191GB | 40                    | yes            |

?> **MERCED is no longer supporting Jupyterhub.**



## Merced Queue Information:
| Public Queues(Available to all users)| Max Wall Time | Default Time | Max Nodes per Job | Max # of jobs that can be submitted | 
| -------------------------------------|---------------|--------------|-------------------|-------------------------------------|
| bigmem | 5 days | 1 hr | 2 nodes | 6 | 
| test^ | 1 hour | 5 min. | 2 nodes | 1 |
| *compute | 5 days | 1 hr | 2 nodes | 6 | 

* <span style="color: red;"> `#SBATCH -M merced ` must always be used to submit a job to MERCED cluster</span>
* <span style="color: red;"> ^ `test` queue has access to all node types use constraints to test on specific types.</span>
* <span style="color: red;"> \* `compute` queue is the default queue for all jobs submitted  </span>


## Requesting an account  

The following detail consists of how to request Merced cluster access. If you have questions or concerns, do not hesitate to:
* Schedule a MERCED consultation [here](https://arrangr.com/sarvani/facultyconsult). 

!> Who can request access for MERCED cluster?
* An active PI or student __with a PI advisor__ with associated COA information.


?> Before applying for an account, please read the following information
carefully. Note that MERCED is a recharge model, which means PI must provide __COA__ information in the ticket before they can use MERCED. 

Each PI account has at least one user group and one queue project
associate with it, which may be used by all group members. PI’s must notify the system administration staff when students, postdoctorals, and other group members depart the University and should no longer have access to MERCED. All data stored in a user accounts will be accessible at all times by the associated PI.

!> How to request for MERCED cluster access?

__Requesting access to MERCED is a 4-step process.__
1. UC Merced Principal Investigators (PIs) or other researchers request MERCED account [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=643ea9ff1b67a0543a003112cd4bcba3&form_id=280d8bb04f72f6006137d0af0310c7b0).
2. For new account group project applications, PIs please also make sure to complete the export control [form](https://ucmerced.app.box.com/s/zvptfc8adbdzt4xs8kcj73lyretyn692), if the PI has not done one before.
3. Once the form is completed, please attach the form to the request ticket from step 1. 
4. For PIs requesting access to MERCED cluster, please provide Chart of Account(COA) number associated with this project. Other group members, please reach out to your respective PI to obtain the COA number. Attach the COA number in the request ticket. Requests without COA numbers will be denied.   

>What is included? 

OIT will verify the eligibility and create the appropriate account for
either a PI Group or a user.
* Users can install any licensed software packages in their __home__
  directories, and where appropriate for other systems. If
  you need assistance, submit a [Research Software Installation Request](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=b83ee9ff1b67a0543a003112cd4bcbde&form_id=0cb3dca04f7d4300b52ba1618110c7ff)(Servers and Clusters), including on which system to install the software.
* The MERCED cluster uses a queuing system for job submission.
  Priorities of jobs are assigned on a dynamic basis. Not all jobs
  submitted will begin immediately.

## Questions? <!-- {docsify-ignore} -->
If you still have questions, we have put together a MERCED [FAQ page](merced_FAQ.md) that has the most common questions received and will be keeping it up to date.


## How to cite  
All MERCED users must agree to acknowledge the MERCED Cluster and the supporting UC,Merced Office of Information Technology central funded MERCED in talks, posters, manuscripts, and other forms of dissemination relying on results obtained from time on MERCED. An example acknowledgement section is:

```
This research was conducted using MERCED cluster, which is centrally funded 
by the University of California, Merced, and maintained by the 
Cyberinfrastructure and Research Technologies (CIRT) team at UC Merced.

```

From time to time the Committee on Research Computing (CoRC) may request a report of publications and presentations authored by MERCED users that have included results of calculations on MERCED. This information may be used by CoRC in advertising and report documents, future proposals, and/or other materials related to research computing at UC Merced. 


## Facility statement <!-- {docsify-ignore} -->

MERCED is a general-purpose computing cluster located in the server facility (see computing facilities [section](README.md)). The cluster consists of a login node, 65 compute nodes, and 15 high memory nodes. Total CPU counts is 1872.

