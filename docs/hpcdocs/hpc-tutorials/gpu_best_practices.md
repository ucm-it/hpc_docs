---
title: Best Practices - GPUs on Pinnacles
hide_title: false
sidebar_class_name: tutorialSidebar
sidebar_position: 2
sidebar_hide: true
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 10/2/2025
  author: Alex Villa

---

:::info
This guide provides an overview of the GPU resources available on the Pinnacles cluster at UC Merced. GPUs offer accelerated performance for machine learning, scientific computing, and data-intensive workloads.
:::


## Accessing and Running GPU Jobs

:::warning
GPU usage on Pinnacles has been extremely **high** recently. To ensure fair access and maximize resource efficiency, please only request the amount of GPU resources you actually need.

Please be aware that CIRT may terminate GPU jobs that are significantly underutilizing or not actively using the GPUs, in order to free resources for other users.

:::

### GPU Allocation

> Users must request GPU resources explicitly in their job submissions using the appropriate Slurm directives.

### Submission Guidelines


> Below are some example directives that may be used when preparing Slurm Job Scripts or Interactive Sessions. 

| Directive | Purpose |
| ------------- | ------------ |
| --gres=gpu:N | Specify to Slurm you will require use of GPU and how many (1 or 2). | 
| **Optional Directives Below** | May be used as another layer of control/optimization | 
| `--constraint=<feature>` | Specify which GPU type (A100, L40s, etc), useful when running on `test` partition | 
| `--cpus-per-gpu=<N>` | Reserve N CPU Threads per GPU |
| `--gpus-per-node=<N>` | When performing multinode jobs, specify how many GPUs per node | 
| `--mem-per-gpu=N` | N (GB\MB) RAM to be proportioned per GPU |


For overall Slurm directives and submission scripts, please see [here](../HPC-clusters/running-jobs/jobs.md) 

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
| [A100](https://www.nvidia.com/en-us/data-center/a100/?utm_source=chatgpt.com) | High Precision (FP64)   | Data/Computational Intensive workloads that require higher numerical precision |
| [L40s](https://www.nvidia.com/en-us/data-center/l40s/?utm_source=chatgpt.com) | Lower Precision (FP32), | Machine learning/deep learning training, AI Workloads                          |


## Harnessing GPUs for Machine Learning

### Key Considerations

- **Framework Selection**: Choose GPU-optimized frameworks that leverage CUDA
- **Batch Sizing**: Balance between GPU memory limits and training efficiency

### Resource Planning
- Estimate GPU memory requirements based on model architecture.
- Consider multi-GPU strategies for large-scale training.
- Plan for checkpointing for fault tolerance.
- Monitor GPU utilization to ensure efficient resource usage. After logging into a GPU node, run the following command: 
 ```
 nvidia-smi
 ```

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

- Identify components to parallelize of algorithms or program.
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

- Share GPUs when possible through efficient job scheduling. Do not reserve/allocate more than the **job** will be anticipated to use.
- **Right-sizing**: Request only the GPU resources you need


### Job Optimization

- **Profiling**: Use profiling tools to identify bottlenecks
- **Queue Selection**: Select `gpu` queue for use of A100 GPUs, select `cenvalarc.gpu` for L40s GPUs.
 
## Additional Resources

### Zero GPU Utilization
Below are three common reasons why a user may encounter `0% GPU utilization`:

>  Is your code GPU-enabled?

Only codes that have **explicit** GPU support will run successfully on a GPU. Please consult the documentation for your software to find out whether it is suitable for GPU utilization. If your code is not GPU-enabled then please remove the `--gres` and other GPU-related directives before resubmitting the job. 

> Ensure software environment is properly configured. 

In some cases, specific libraries are required for your code to run on GPUs. Make sure the necessary software toolkits or libraries are loaded from the cluster’s available modules. If not available, ensure you have installed and properly sourced them in your own environment.

### Low GPU Utilization: Potential Solutions

If you encounter low GPU utilization (e.g., less than 50%) then please investigate the reasons for the low utilization. Some common reasons are outlined below:

> Misconfigured application scripts. 

Be sure to read the documentation of the software to make sure that you are using it properly. This includes creating the appropriate software environment.

> Training deep learning models while only using a single CPU-cor for dataloading. 

Codes such as [PyTorch](https://researchcomputing.princeton.edu/support/knowledge-base/pytorch) and [TensorFlow](https://researchcomputing.princeton.edu/support/knowledge-base/tensorflow) show performance benefits when multiple CPU-cores are used for the **data loading**.

> Using too many GPUs for a job. Performing a scaling analysis is useful to identify an ideal middle ground.


### Common Mistakes

> The most common mistake is running a CPU-only code on a GPU node. **Only codes that have been explicitly written to run on a GPU can take advantage of a GPU.** Read the documentation for the code that you are using to see if it can use a GPU.

>Another common mistake is to run a code that is written to work for a single GPU on multiple GPUs.

### Documentation and Tutorials

- [NVIDIA Developer Documentation](https://docs.nvidia.com/)
- [SLURM GPU Documentation](https://slurm.schedmd.com/gres.html)
- [CUDA with Python](https://developer.nvidia.com/cuda-python)
- [A100 Tech Report](https://www.nvidia.com/en-us/data-center/a100/)
- [L40s Tech Report](https://www.nvidia.com/en-us/data-center/a100/)
### Support Channels

- [HPC Support Ticket System](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4)
- [UCM HPC Slack Workspace](https://ucmhpcclusters.slack.com/)

