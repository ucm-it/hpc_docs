---
title: JupyterHub Cost Estimator
sidebar_position: 12
---

import JupyterCostCalculator from '@site/src/components/JupyterCostCalculator';

# 📊 JupyterHub Cost Estimator

JupyterHub is an open source service that creates on-demand Jupyter notebook servers, enabling users to interact remotely with a standardized computing environment through any web browser. It's widely used in educational settings, research labs, and data science teams to provide consistent computing environments.

## 🎯 Guide for Faculty, PIs, and Instructors

This guide helps faculty, PIs, and instructors understand:
- The different deployment options available for JupyterHub
- Estimated costs for cloud-based and on-premises solutions
- Pros and cons of each approach based on your technical expertise and resources
- How UC Merced's managed JupyterHub service compares to self-managed options

Whether you're planning to support a single course, a department, or institution-wide deployment, this calculator will help you make informed decisions about the most cost-effective approach for your specific needs.

> **Important Note:** This JupyterHub cost estimator is specifically designed for those who want to use/deploy JupyterHub for teaching and instruction purposes, not for research purposes. The resource calculations and cost estimates are optimized for classroom and educational scenarios.

## 🚀 JupyterHub Deployment Options

<div className="row">
<div className="col col--2">
</div>
<div className="col col--8">

| Deployment Type | Available Options |
|----------------|-------------------|
| **Kubernetes-based** | • UC Merced's JupyterHub<br/>• Faculty or Department Hosted JupyterHub |
| **Single VM** | • The Littlest JupyterHub |

</div>
<div className="col col--2">
</div>
</div>


## ☁️ Kubernetes-based JupyterHub ☁️

Integrating JupyterHub with Kubernetes creates a robust, highly scalable platform capable of serving hundreds or thousands of users. This approach uses Kubernetes (an open-source container orchestration system) to manage computational resources dynamically, scaling up or down based on demand. It's the preferred solution for institution-wide deployments.

### Key Benefits of Kubernetes-based JupyterHub:
- **Scalability**: Handles large numbers of concurrent users efficiently
- **Resource Efficiency**: Dynamically allocates computing resources as needed
- **Reliability**: Provides high availability through redundancy
- **Standardization**: Creates consistent environments across all users
- **Isolation**: Ensures security through containerization

However, this approach requires significant technical expertise in cloud infrastructure, containerization, and DevOps practices.

See the comparison table below for a side-by-side comparison of UC Merced JupyterHub and Faculty or Department Hosted JupyterHub:


### 📊 Comparison: UC Merced JupyterHub vs. Faculty or Department Hosted JupyterHub

| **Aspect**                 | **UC Merced JupyterHub**                                           | **Faculty or Department Hosted JupyterHub**                                                      |
|---------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 💸 **Cost**               | ❌ No Cost – Free for faculty and students                         | 💸 Cost borne by the user (compute, storage, network)                            |
| 👨‍🔧 **Management**       | ✅ Professionally managed by CIRT Team - OIT Dept, UC Merced        | 🧑‍💻 Requires individuals to manage their own infrastructure                     |
| 🛡️ **Maintenance**        | ✅ Updates and security handled by CIRT Team - OIT Dept, UC Merced  | 🔧 Individuals must handle all updates, patches, and backups                     |
| 🌐 **Cloud Provider Choice** | 🚫 Fixed (Managed by UC Merced infrastructure)                    | 🌐 Knowledge on AWS is mandatory
| 🧑‍🏫 **Ease of Use**       | ✅ Easy – No installation or setup required                         | ⚠️ Requires setup and environment configuration                                 |
| 📘 **Technical Expertise** | 🚫 Minimal – Ready-to-use environment                              | 📘 High – Knowledge of Kubernetes, DevOps needed                                 |
| 🧩 **Customization**       | 🧩 Some flexibility with package requests and extensions            | 🎨 Full customization of software and infrastructure                             |


> ⚠️ **IMPORTANT COST CONSIDERATION:** The Faculty or Department Hosted JupyterHub option requires dedicated IT specialists not reflected in this calculation. When comparing costs, you must factor in approximately 1-1.25 FTE of specialized expertise across cloud engineering, DevOps, and system administration. This team must continuously monitor and maintain the infrastructure. In contrast, the UC Merced JupyterHub is readily available and managed by the CIRT team.

---

## 📊 Cost Comparison Calculator

To compare between the **UC Merced JupyterHub service** and a **Faculty or Department Hosted JupyterHub**, please refer to the cost estimation section and the calculator below. This tool allows you to estimate and compare both options side by side based on your specific class size and usage needs.

### 🧮 Calculation Method

The calculator uses the following methodology to estimate resource needs:

- **Number of Active Pods** = Total Users ÷ 4  
  - The number of active pods used by classes typically falls between 1/3rd and 1/6th of total users  
  - Dividing by 4 produces a good estimate for this number  

- **Recommended Memory** = 1 GB × Number of Active Pods  
  - Each pod is allocated 1 GB of memory  
  - Total memory requirement is calculated by multiplying this by the number of active pods  

- **Node Requirements** are calculated based on the total memory needed and the memory available on each node type  

---

<JupyterCostCalculator />

## 📦 The Littlest JupyterHub: Simpler On-Premises Option

If you're a faculty member, PI, or researcher who wants to run JupyterHub on your own infrastructure without the complexity of Kubernetes, The Littlest JupyterHub (TLJH) provides an excellent alternative. TLJH is designed to run on a single machine (either a virtual machine or physical server) and is much simpler to set up and maintain than Kubernetes-based solutions.

### When to Choose TLJH:
- You have existing VM or physical server resources available
- You need a solution for a smaller user base (typically up to 100 users)
- Your team has basic system administration skills but limited cloud/DevOps expertise
- You prefer to keep your computational resources on-premises
- You want a simpler setup and maintenance process

### Getting Started with TLJH:
Complete installation instructions can be found in the [official documentation](https://tljh.jupyter.org/en/latest/). The installation process is straightforward and can typically be completed in under an hour with basic Linux administration skills.

In order to describe the costs of each option accurately, there are three dimensions of the set-up that must be considered: the allotment of memory/RAM, CPU usage, and disk space that each user would need. In that way, varying class sizes and needs differentiate the amount of resources given to each cost dimension. Four major options are outlined in the following chart to determine the allocation of resources across those three types: small classes (~30-50 students), average-sized classes (~80-100 students), and large classes (~100-400+). The following formulas for each of these three dimensions are widely applicable across different scenarios for The Littlest JupyterHub (TLJH):

- Recommended Memory = (Maximum Concurrent Users × Maximum Memory per User) + 128 MB  
- Recommended vCPUs = (Maximum Concurrent Users × Maximum CPU Usage per User) + 20%  
- Recommended Disk Size = (Total Users × Maximum Disk Usage per User) + 2 GB  
- Maximum amount of concurrent users should be approximately 40–60% of the total users at any given point  
- 1 GB typically serves as maximum memory per user, with 128 MB being overhead for TLJH and related services  
- Based on class sizes: 16 GB for 30 students, 64 GB for 100 students, and 256 GB for over 400 students  
- Most memory, vCPU, and disk installations come hand-in-hand, so memory calculation can be used to determine rest of setup  
  - 4 vCPUs and 32 GB disk space for small classes  
  - 16 vCPUs and 128 GB disk space for average-sized classes  
  - 64 vCPUs and 512 GB disk space for large classes  

| Class Size                      | Resources                                      | TLJH Pricing                           |
|--------------------------------|------------------------------------------------|----------------------------------------|
| Small Class (~30-50 students)  | Memory: 16 GB<br/>CPU: 4 vCPUs<br/>Disk: 32 GB | m5.xlarge: $0.192/hr = $140.16/month  |
| Average-Size Class (~80-100)   | Memory: 64 GB<br/>CPU: 16 vCPUs<br/>Disk: 128 GB | m5.4xlarge: $0.768/hr = $560.64/month |
| Large Class (~400+ students)   | Memory: 256 GB<br/>CPU: 64 vCPUs<br/>Disk: 512 GB | m5.16xlarge: $3.072/hr = $2,242.56/month |

