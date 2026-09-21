---
title: HPC Questions and Answers
sidebar_position: 6

---

## General HPC Questions

> __How do I make a General Request/Consultation?🤔__

OIT provides general request services or for assessments for individuals and research groups who wish to deploy research computing and advanced cyberinfrastructure techniques (e.g. high-performance computing, visualization, advanced networking and data collaboration, and advanced technology-enhanced workflow development).
You can make a General Request/Consultation [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).


> __How to include CIRT managed charged services into budget statement?__

The faculties plan to include the budget for CIRT-managed charged services in the budget statement. Please list it under the category of 'Other Direct Costs.' For example, purchased HPC storage services can be allocated to the 'Materials/Supplies: HPC storage and maintenance' category within the 'Other Direct Costs' section. Here is the sample <a href="./files/Budget_Justification_NIH Data_Management_And_Sharing_Justification.pdf" download="Budget_Justification_NIH Data_Management_And_Sharing_Justification.pdf">NIH data management documentations</a> and <a href="./files/Budget Justification Detailed.pdf" download="Budget Justification Detailed.pdf">budget justification</a>.

> __When/where are the HPC Walk-in Clinic hours?__

Bring your laptop, your code and your questions to the clinic and get expert help, right on the spot. Experienced graduate students are encouraged to come help your peers by mentoring them in HPC tips and tricks. Faculty are also welcome to join. Among others, Yue Yu (Sr. Research Computing Facilitator) will be available to meet with and help members of the campus research computing community at these sessions.

**Click [Here](../hpc-tutorials/OH.md#hpc-office-hour-qa) for Office Hour Location and Time**



> __How do I change password on research cluster?__
* You can request for changing your password on any CIRT managed research cluster by submitting a general research request [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).
* Please provide the name (and/or IP address) of the cluster on which you need your password updated.

>__Error Logging into research cluster/ error sshing into cluster__

* When accessing the research clusters from an off-campus location, please ensure you are logged into UC Merced VPN to access your research cluster. VPN allows faculty, students and staff to connect to research computing resources from home or other off campus networks.

* If you still run into errors logging into the cluster, please submit a general research request [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).

>__I am receiving a "Host key change" or "Host key verification failed" error when logging in after the February 2026 maintenance.__

This is expected following the OS upgrade performed during the February 2026 maintenance. The login node host keys changed, so your local SSH client flags the mismatch.

* **Standard login (password-based):** Simply type `yes` (or click "Accept") when prompted to verify and save the new host key.
* **SSH key users:** You need to remove the old entry from your local `known_hosts` file. Delete or clear the `~/.ssh/known_hosts` file on your local machine and then retry logging in.

> __I am a student in a PI group. How can I request Pinnacles cluster access?__

You can start the [step-1](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) access process, but in order to receive an account, you need approval from a UC Merced PI. Every account on Pinnacles is associated with that of a faculty PI.

> __I am a student who changed PIs do I need to update my PI information?__

Yes, submit a [ticket](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) to update your PI and to change user groups. 

> __My access request for Pinnacles was denied – what are my next steps?__

CIRT can schedule a consultation with the faculty to specifically address the comments from Committee on Research Computing (CoRC).

> __I have several users doing different projects, can I use different COA# for them?__

Yes, please make sure keep the COA# information updated. Each user can also have different COA#, if the user is doing multiple projects. If you have any questions, feel free to open a ticket [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).


> __How do I move Big Data?__

Visit our [Data Transfer](../HPC-clusters/data_share_transfer.mdx) to get more information on transferring Big Data.


>__I want access to free resources. How can I get access to them?__

Remember, if you stay below or at your baseline allocation, you will not incur any fees. However, you can obtain access to other free compute resources such as our new NSF-MRI Pinnacles cluster, and ACCESS resources – and my team can provide consultation for how to access these resources. Schedule a consultation [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=aa2d2ee3c34a6e106c5c8dd9d00131c1&form_id=06da3f8edbfc08103c4d56f3ce9619f4).



## Pinnacles - Questions


> __I am in the process of purchasing a condo-model nodes for Pinnacles, do I have to go through the access process?__

No

>__I am a UC Merced PI, but my collaborators are not from UC Merced, how do I request Pinnacles access to my collaborator ?__

All accounts on Pinnacles cluster need to be associated with that of a UC Merced faculty PI. If your collaborator is a non-UC Merced collaborator, then, they would need a UC Merced NetID to access VPN and login to Pinnacles cluster. Usually, department MSOs provide UC Merced NetIDs for collaborators.


>__I am entering the correct password but cannot login to Pinnacles.__

If you have confirmed that your password is correct but are still unable to login, try opening multiple SSH sessions simultaneously. This will cause the system to route your connection to different login nodes. The issue may be caused by one of the login nodes having trouble connecting to the LDAP server — connecting to a different login node will resolve the problem temporarily.

## Job/Software - Questions

> __How do I install software on a CIRT Managed cluster?__

* If the software package or version you need is not available in the list of provided software, you may compile and install it yourself. The recommended location for user-installed software is the $HOME path.
* If the software installation requires root (sudo) access and/or if you need further assistance installing the software, you can request service [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=b83ee9ff1b67a0543a003112cd4bcbde&form_id=0cb3dca04f7d4300b52ba1618110c7ff).

> __My Jobs are running unusually slow, failing with errors, I need to cancel a currently running job__

Jobs can run unusually slowly for many reasons, often due to a mismatch between the workload and requested resources (tasks, nodes, and memory). The right allocation depends on what you’re running (e.g., parallel Python vs. simple Unix commands). Understanding the expected workload helps you request resources more efficiently.
To get information about troubleshooting a job failing with errors visit our [Job Management Page](../HPC-clusters/running-jobs/job_manage.md)
