
---
title: Best Practices - GPUs on Pinnacles
hide_title: false
sidebar_class_name: tutorialSidebar
sidebar_position: 2
sidebar_hide: true
unlisted: true
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 10/2/2025
  author: Alex Villa

---

# GPUs on Pinnacles

## Overview

This guide provides essential information about GPU resources available on the Pinnacles cluster at UC Merced. GPUs have the potential to enable accelerated performance for machine learning, scientific computing, and data-intensive jobs.

## Accessing and Running GPU Jobs

### GPU Allocation

**Users must request GPU resources explicitly in their job submissions using appropriate SLURM directives.** 
- Example directives.

### Submission Guidelines

Jobs requiring GPU resources should specify:

- Number of GPUs needed
- GPU type requirements
- Memory requirements
- Time allocation considerations

For detailed SLURM GPU directives and submission scripts, please see here <>

## GPU Types

### Available GPU Architecture

Pinnacles provides access to various GPU models optimized for different computational needs. The cluster includes GPUs suitable for:

- Deep learning and AI workloads
- Scientific simulations
- Data analytics and visualization
- General-purpose GPU computing (GPGPU)


#### GPU Comparison Table

| GPU  | Technical Notes         | Best Use Cases                                                                 |
| ---- | ----------------------- | ------------------------------------------------------------------------------ |
| A100 | High Precision (FP64)   | Data/Computational Intensive workloads that require higher numerical precision |
| L40s | Lower Precision (FP32), | Machine learning/deep learning training, AI Workloads                          |


## Harnessing GPUs for Machine Learning

### Key Considerations

- **Framework Selection**: Choose GPU-optimized frameworks that leverage CUDA
- **Data Pipeline**: Optimize data loading to maximize data processing
- **Batch Sizing**: Balance between GPU memory limits and training efficiency
~~- **Mixed Precision Training**: Utilize tensor cores when available for faster training~~

### Resource Planning

- Estimate GPU memory requirements based on model architecture
- Consider multi-GPU strategies for large-scale training
- Plan for checkpointing and fault tolerance
- Monitor GPU utilization to optimize resource usage

## Harnessing GPUs for Scientific Computing

### Application Domains

GPUs excel in scientific computing applications including:

- Computational fluid dynamics
- Molecular dynamics simulations
- Climate and weather modeling
- Bioinformatics and genomics
- Physics simulations
- Image and signal processing

### Optimization Strategies

- Identify parallelizable components of algorithms
- Minimize CPU-GPU data transfers
- Utilize GPU-accelerated libraries when available
- Consider domain-specific GPU implementations

## Common and Supported Frameworks

### Machine Learning Frameworks

The following frameworks are commonly used on Pinnacles GPUs:

- **PyTorch**: Dynamic computational graphs, research-friendly
- **TensorFlow**: Production-ready, extensive ecosystem

### Scientific Computing Libraries

- **CUDA Toolkit**: NVIDIA GPU programming platform
- **cuDNN**: Deep learning primitives library
- **cuBLAS**: GPU-accelerated BLAS operations


## Best Practices and Performance Tips

##  Best Practices for Pinnacles

- Share GPUs when possible through efficient job scheduling
- **Right-sizing**: Request only the GPU resources you need
	- GPU use on Pinnacles is **highly** impacted as of recently. To best accommodate and allow for maximum GPU utilization, please only request what you will be using.

### Job Optimization

- **Profiling**: Use profiling tools to identify bottlenecks
- **Queue Selection**: Select `gpu` queue for use of A100 GPUs, select `cenvalarc.gpu`
- **Scheduling**: Consider job dependencies and workflow optimization
 
## Additional Resources

### Zero GPU Utilization
Below are three common reasons why a user may encounter 0% GPU utilization:

1. Is your code GPU-enabled? Only codes that have **explicit** GPU support will run successfully on a GPU. Please consult the documentation for your software to find out whether it is suitable for GPU utilization. If your code is not GPU-enabled then please remove the --gres [Slurm directive](https://researchcomputing.princeton.edu/support/knowledge-base/slurm) when submitting jobs.
2. Ensure software environment is properly configured. In some cases certain libraries must be available for your code to run on GPUs. Ensure that the proper software toolkit/libraries have been `module loaded` if available on the cluster, else ensure you have installed and sourced in your environment. 
3. Please do not create [salloc](https://researchcomputing.princeton.edu/support/knowledge-base/slurm#salloc) sessions for long periods of time. For example, allocating a GPU for 24 hours is wasteful unless you plan to work intensively during the entire period. For interactive work, please consider using the [MIG GPUs](https://researchcomputing.princeton.edu/systems/della#mig).

### Low GPU Utilization: Potential Solutions

If you encounter low GPU utilization (e.g., less than 15%) then please investigate the reasons for the low utilization. Common reasons include:

1. Misconfigured application scripts. Be sure to read the documentation of the software to make sure that you are using it properly. This includes creating the appropriate software environment.
2. Using an A100 GPU when a [MIG GPU](https://researchcomputing.princeton.edu/systems/della#gpus) would be sufficient. Some codes do not have enough work to keep an A100 GPU busy. If you encounter this on the Della cluster then consider using a [MIG GPU](https://researchcomputing.princeton.edu/systems/della#gpus).
3. Training deep learning models while only using a single CPU-core. Codes such as [PyTorch](https://researchcomputing.princeton.edu/support/knowledge-base/pytorch) and [TensorFlow](https://researchcomputing.princeton.edu/support/knowledge-base/tensorflow) show performance benefits when multiple CPU-cores are used for the data loading.
4. Using too many GPUs for a job. You can find the optimal number of GPUs and CPU-cores by performing a [scaling analysis](https://researchcomputing.princeton.edu/support/knowledge-base/scaling-analysis).
5. Writing job output to the /projects storage system. Actively running jobs should be writing output files to /scratch/gpfs which is a much faster filesystem. See [Data Storage](https://researchcomputing.princeton.edu/support/knowledge-base/data-storage) for more.

### Common Mistakes

The most common mistake is running a CPU-only code on a GPU node. **Only codes that have been explicitly written to run on a GPU can take advantage of a GPU.** Read the documentation for the code that you are using to see if it can use a GPU.

Another common mistake is to run a code that is written to work for a single GPU on multiple GPUs. [TensorFlow](https://researchcomputing.princeton.edu/support/knowledge-base/tensorflow), for example, will only take advantage of more than one GPU if your script is explicitly written to do so. Note that in all cases, whether your code actually used the GPU or not, your **fairshare** value will be reduced in proportion to the resources you requested in your Slurm script. This means that the [priority](https://researchcomputing.princeton.edu/support/knowledge-base/job-priority) of your next job will be decreased accordingly. Because of this, and to not waste resources, **it is very important to make sure that you only request GPUs when you can efficiently utilize them.**

### Documentation and Tutorials

- [NVIDIA Developer Documentation](https://docs.nvidia.com/)
- [SLURM GPU Documentation](https://slurm.schedmd.com/gres.html)
- [CUDA with Python](https://developer.nvidia.com/cuda-python)
- [A100 Tech Report](https://www.nvidia.com/en-us/data-center/a100/)
- [L40s Tech Report](https://www.nvidia.com/en-us/data-center/a100/)
### Support Channels

- HPC Support Ticket System
- [UCM HPC Slack Workspace](https://ucmhpcclusters.slack.com/)

