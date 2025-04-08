---
title: JupyterHub Cost Estimator
sidebar_position: 12
---

import JupyterCostCalculator from '@site/src/components/JupyterCostCalculator';

# 📊 JupyterHub Cost Estimator

## Overview
JupyterHub is an open source service that creates on-demand cloud-based Jupyter notebook servers, enabling users to interact remotely with a standardized computing environment through any web browser. This page helps you understand deployment options and estimate costs for different implementation scenarios.

## 🚀 JupyterHub Deployment Options

There are different approaches to deploying JupyterHub:

### JupyterHub using Kubernetes
- UC Merced's JupyterHub Service  
- Self-Hosted JupyterHub  

### The Littlest JupyterHub

## ☁️ UC Merced JupyterHub Service

UC Merced's existing JupyterHub runs on cloud infrastructure, providing a robust Kubernetes-based setup with scalability and stability for classroom use.

---

### ✅ Benefits of the UC Merced JupyterHub

- ❌ **No Cost | 💸 Completely Free** – No cost for UC Merced faculty and students. No cloud billing or hidden charges.  
- 🛠️ **Professional Management** – Maintained by experts in JupyterHub deployment  
- 📦 **Kubernetes-based** – Provides container isolation and efficient resource usage  
- 📈 **Scalable** – Automatically adjusts resources based on demand  
- 🧩 **Customizable** – Supports custom environments and extensions  
- 💰 **Cost-effective** – Optimized for efficient resource use  

### 💸 Cloud-Based JupyterHub Costs

When deploying JupyterHub on external cloud providers, costs typically include:

1. ⚙️ **Compute Resources** – Virtual machines for hosting JupyterHub and user sessions  
2. 🌐 **Data Transfer** – Usually minimal unless handling large datasets  
3. 🔁 **Load Balancer** – Required for scalable, production-ready deployments  

> **Note:** The self-hosted option requires additional IT staff costs not reflected above. For a true comparison, factor in approximately 0.25-0.5 FTE of cloud engineering expertise.

---

## 📊 Cost Comparison Calculator

To compare between the **UC Merced JupyterHub service** and a **self-deployed cloud-based JupyterHub**, please refer to the cost estimation section and the calculator below. This tool allows you to estimate and compare both options side by side based on your specific class size and usage needs.

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

## 📦 The Littlest JupyterHub

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

