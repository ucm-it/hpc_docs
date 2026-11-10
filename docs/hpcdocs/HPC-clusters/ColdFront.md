---
title: ColdFront - General Information
sidebar_position: 6
---

# Introduction to ColdFront


## Description

[ColdFront](https://docs.coldfront.dev/en/stable-1.1.x/) is an open-source resource and allocation management system designed to provide a central portal for administration, reporting, and measuring the scientific impact of cyberinfrastructure resources. ColdFront was created to help high-performance computing (HPC) centers manage access to a diverse set of resources across large groups of users and provide a rich set of extensible metadata for comprehensive reporting.

## Logging into ColdFront

1. ColdFront, similar to all UC Merced campus login systems, uses your institutional credentials. You need your UC Merced User ID as well as your password.
2. Additionally, you must be connected to the UC Merced VPN whether you are on or off campus. Instructions to download and log in to the VPN are found [here](https://github.com/ucm-it/hpc_docs/blob/main/docs/hpcdocs/HPC-clusters/campus-clusters.md) or [here](https://ucm-it.github.io/hpc_docs/docs/hpcdocs/HPC-clusters/campus-clusters#uc-merced-vpn-installation-and-connection-instructions) underneath "UC Merced VPN Installation and Connection Instructions".
3. After connecting your device to the UC Merced VPN, you may start logging into ColdFront at this address: "https://coldfront.rc.ucmerced.edu"
4. Sign in with your UC Merced login. It will direct you to "CILogin".
5. When directed to CILogin, you will need to select University of California - Merced to continue.
6. After completing these steps, you will have successfully logged into ColdFront.

## Steps to Add a New User to Your Project

1. Log in to https://coldfront.rc.ucmerced.edu/.
* On first login, you will be prompted to complete a new digital export control form and re-agree to the acceptable data usage policy.
2. Under Common Actions, click Manage Projects.
3. Select your project from the available projects list (e.g. project_ucm_nish). This takes you to a page like https://coldfront.rc.ucmerced.edu/project/90/.
4. Click the Add members button. This takes you to a page like https://coldfront.rc.ucmerced.edu/project/90/add-users-search/.
5. Enter the person's UCM NetID and click Search.
6. Select the account; leave the project role as-is.
7. Click Add Selected members.

The account will be processed, and both the PI and the new member will receive an email when it's ready. The member will automatically get access to the project's resources/allocations.

## For PI's with No Existing Account on the HPC Cluster.

For PI's who don't yet have an existing project (i.e. no existing cluster account), onboarding starts with a new project request instead of adding members directly.

We're currently onboarding faculty to ColdFront, our new self-service Research Computing management platform, which I've been developing. It is replacing this request form and will let you manage your research project and add or remove lab members.

Since you don't have an existing project, please start by submitting a new project request:

1. Sign In
* Connect to the UC Merced VPN, then visit https://coldfront.rc.ucmerced.edu/.
* Click Sign in with your UC Merced login (CILogon) and sign in using your campus credentials. You do not need an existing cluster account.
* Complete the HPC Export-Control Attestation when prompted. You will also need to accept the Project Data-Use Agreement when it appears during onboarding. Please read both carefully.
2. Create Your Project
* Under Common Actions, click Create project.
* Your first project will be for the Pinnacles cluster, and its name will be generated automatically from your UCM NetID.
* Enter a description of your research and select the field of science that best matches your work, then submit the request.
* Research Computing will review your request. Once approved, setup of your cluster account and standard compute and storage access will begin. Please wait for the readiness email before attempting to use the cluster. This is a one-time project approval.
* If you don't see Create project, please let us know so we can check your PI access.
3. Add Your Lab Members
* Once your project is approved and setup is complete:
* Under Common Actions, click Manage projects and select your project.
* Click Add members.
* Enter the person's UCM NetID and click Search.
* Select the correct account and leave the project role at its default.
* Click Add selected members.

Their access will be processed, and you and the member will receive an email when it is ready. Members will automatically receive the applicable access associated with your project.
## What You May Have Access To

Upon logging into ColdFront (instructions detailed in a previous section), you may be able to see the following:

1. **Projects**
   * What projects you and other researchers have access to.
2. **Your Available Compute and Storage**
   * This shows all of the available compute (such as the Pinnacles Cluster) and storage (such as BorgStore) you have available for your projects and other assignments. ([Link found here](https://github.com/ThoughtsAboutForks/hpc_docs/blob/main/docs/hpcdocs/HPC-clusters/borgstore.md)).
   * Clicking on them shows who has access, along with descriptions of their purpose.
   * ColdFront is primarily a platform designed to monitor compute and storage usage for projects.
3. **Common Actions**
   * If you ever have trouble finding your projects or your available compute and storage, you can click the options under "Common Actions"—such as the "Manage Projects" option to see your active and inactive projects more easily, or the "Your Access" option to view your active compute access and storage. You can always click "Home" to return to the home screen.

![Instructions](https://drive.google.com/thumbnail?id=1Lxu3Y2vfEZGZ9y7d4No-Wh7wpZRwCl4E&sz=s4000)

## More Options

At the upper-left part of the screen, if you click "Project", it will show a dropdown menu consisting of the following:

1. **Projects**, which was mentioned earlier.
2. **Allocations**, which displays your available compute and storage.
3. **Usage**
   * This option provides an overview of all the compute and storage you have used for your projects. It shows your core-hours recorded over the month as well as average physical storage usage.
4. **Resources**
   * The resources option provides a view of what compute and shared storage nodes are actively used versus inactive. 
   * You can select which cluster context to view, check what nodes the Pinnacles Cluster has or is using, and view specific resource details under the dropdown menu.

![Instructions](https://drive.google.com/thumbnail?id=1CcDwdGFxWfREMjdOmI-Zm94tOg5YcWGJ&sz=s4000)

## Requesting Principal Investigator (PI) Status

If you are only a member and not a Principal Investigator, you can request PI status through your profile menu:

1. On the upper right of your screen, click on your account name to open the dropdown menu.
2. Select the option named "User profile."
3. Once on your user profile page, your account details will be shown, and you will have the option to request PI status.
