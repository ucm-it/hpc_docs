# CaRCC AI Facilitation Handbook
### [CaRCC AI Facilitation Handbook link](https://carcc.github.io/CaRCC-AI-Facilitation-Handbook/)


## Overview

The CaRCC AI Facilitation handbook is a resource used by RCD (Research Computing and Data) professionals to better and improve the responsible usage of Artifical Intelligence, Machine Learning, and Large Language Model resources. Throughout this guide, you will find the various tools and processes CaRCC has developed, so that readers may use them one day for practical uses and applications with AI resources. The facilitation handbook does not cover any specific AI or Machine Learning mathematics, but instead covers the use of AI.

This covers both sides of academia in regards to using AI for research, that being the Researcher/Principal Investigator and the RCD Facilitator, so both sides may use this handbook well. And others, such as undergraduate and graduate students, other technology and computer-based professionals, and those curious in AI could use this handbook well to improve responsible AI use in regards to their work or research.

Note: Not all AI is typically a Large-Language-Model as seen in ChatGPT, Claude, Gemini, or others. AI can refer to machine learning algorithms, and other tools researchers can use and RCD facilitators can use to help researchers.

Throughout this document, the following resources and tools this document provides will be these below:

1. Problem Definition & Planning
- Defining and translating what question or assignment could/is to be solved into an AI project with clearly defined parameters and objectives.
2. Data Preparation
- Acquring and cleaning data so that it is ready to be submitted into AI/ML programs.
3. Model Selection & Development
- Identifying, creating, selecting, large-scale neural network architectures that serves as the basis for the project's various AI applications.
4. Model Training & Tuning
- Optimizing model parameters and hyperparameters through iterative learning to enable a model to generalize from data; includes configuring, executing and improving the training process.
5. Benchmarking, Quality Control, & Optimization
- Testing AI models and their capabilities by using certain testing tools, then managing the achievements and parameters of your AI models when it comes to its own work, and then fine-tuning the model itself to further improve accuracy rates, performance, efficiency
6. Model Application
- The training of AI/ML models and their parameters with data to further improve the execution of those parameters. An example of this is submitting data to an AI system, checking if the AI is correct manually, and fine-tune as needed.
7. Results & Reporting 
- Documenting workflows and computing environments for reproducibility, communicating results through visualizations and reports, and preparing materials for dissemination and long-term preservation.
8. Cross-Cutting Considerations
- These are the processes and information that don't necessarily fit into the other categories, or are a part of all categories, but are highly important nonetheless.

![Life Cycle Image](https://drive.google.com/thumbnail?id=19tMbkekutTwJbU_PdqXzEUUcucTVIBLg&sz=s4000)

Topics covered within these sections include, but are not limited to governance and compliance regulations, risk/cost management, resource brokerage in regards to hardware limitations, and more.

## Problem Definition & Planning

Citing on what directly was said in the Handbook:

> __Problem definition and RCD resource planning is a process of translating a research question or objective into an AI project with clearly defined requirements, legal constraints, resources, tools, and success criteria.__

Within this section, the role of the PI is to propose the question and the specific problems, and determine the parameters of completion. The RCD facilitator's role is to determine technical and project feasibility, adhere and determine university, local, state, and federal AI compliance, and assess infrastructure requirements and feasibility of the overall project.

It is most beneficial for researchers/PI's to get into contact with RCD staff before or in the very early stages of their projects to explore and ensure project feasibility, compliance, and long-term sustainability - especially if research computing/digital resources and AI is heavily used in their projects. It is especially important to contact RCD staff before grant proposals, AI/LLM/Data analysis tools when given access to sensitive information, selecting an AI approach that is suitable for research directives, and more. 

## Data Preparation
Citing on what directly was said in the Handbook:
> __Data preparation for an AI/ML-based workflow involves acquiring, cleaning, transforming, exploring, and curating raw data to make it suitable for further processing and analysis.__

Essentially, what must be done is to obtain and "clean" data so that it could be processed by AI/ML programs. The most pressing matter within the data preparation section is privacy and compliance. Some data may be "unclean" due to privacy matters. Therefore, the solution is the masking, removal, censoring, redaction, swapping of identifiers, and more to make it so that AI/ML programs do not have access to private information.

Other tasks to prepare data for AI/ML processing is data cleaning (removing duplicates, outliers, missing values, and formatting errors), quality assurance (removing bias, ensuring fullness in submitted work/data, and consistent data), and more.

If the data preparation stage is done incorrectly, some problems may arise, which includes but are not limited to:

- Program crashes due to memory limits and CPU limits.
- Processing bottlenecks and errors due to storage bottlenecks, GPU and CPU limits, RAM limits, etc.
- Data and privacy concerns and (potential) suits in regards to sensitive and private information.

## Model Selection & Development

Citing on what directly was said in the Handbook:
> __Foundation Model Selection and/or Development is the process of identifying, creating, training, and optimizing large-scale neural network architectures that serves as the basis for the project's various AI applications.__

What this stage details is the creation and identification of an AI model that would suit the projects, questions, and/or objectives needs. This includes choosing LLM's, the type of model (vision or multimodal, etc) and their license agreements whether open source or weight. This also includes the collation of large data sets to train those AI tools.

The role of RCD facilitators during this stage is to determine concerns with commercial cloud platforms, storage limitations, determining training across GPU/TPU clusters, adapting certain LLM's to academic use, continuous data refreshing in models, and more.

An excellent open-source resource would be [Hugging Face](https://huggingface.co), where you can pick out numerous open-source models to fit your needs. [This is the leaderboard which may help direct you to the best model which may fit your needs, but additional research is always helpful.](https://huggingface.co/collections/open-llm-leaderboard/open-llm-leaderboard-best-models)

And additional information can be found [here](https://carcc.github.io/CaRCC-AI-Facilitation-Handbook/model-selection/).

## Model Training & Tuning

Citing on what directly was said in the Handbook:

> __Optimizing model parameters and hyperparameters through iterative learning to enable a model to generalize from data; includes configuring, executing and improving the training process.__

What this stage details is the training of AI/ML models and their parameters with data to further improve the execution of those parameters. An example of this is submitting data to an AI system, checking if the AI is correct manually, and fine-tune as needed.

An example of this pulled from the Handbook would be:

* Fine-tuning a sentiment classifier: Use a pre-trained transformer (e.g., BERT) and fine-tune it on a sentiment-labelled review dataset such as IMDb. The IMDb dataset contains around 100 k movie reviews labeled positive or negative. Fine-tuning BERT on such a dataset adapts its language understanding to the sentiment classification task, but the model's computational requirements are high, so fine-tuning is often performed on GPU-enabled HPC resources

The role of RCD facilitators during this stage is to determine if these AI models or datasets are too large to be trained on local resources, and instead needing much more powerful computer systems and advising PI's on using those systems, preventing rapidly growing datasets and AI models so that it won't overwhelm a local system.

## Model Benchmarking, Quality Control, and Optimization

To directly cite what is written in the Handbook, the definition of these terms are:

> __Model Benchmarking (MB): evaluating AI models on well-defined tasks using specified datasets, metrics, protocols, and hardware, to assess a model's quality (e.g., accuracy), efficiency (e.g., latency, throughput, cost), scalability, and robustness (reliability, bias).__

> __Quality Control (QC): testing, auditing, and ongoing monitoring for errors, biases, and inefficiencies relative to acceptance criteria for performance, reliability, and/or ethical standards.__

> __Model Optimization (MO): iterative process to improve an AI model's performance, efficiency, and scalability for deployment while balancing accuracy and costs.__

To be more broad, this section details on testing your AI models and their capabilities by using certain testing tools, then managing the achievements and parameters of your AI models when it comes to its own work, and then fine-tuning the model itself to further improve accuracy rates, performance, efficiency, etc.

The role of RCD facilitators during this stage is to determine reproducibility across platforms to ensure that the AI benchmarked or tested can be replicated in other environments, reduce AI model bias and increase reliability, acquire computing resources to balance cost and performance, and more.

The role of the PI or the user is to define what it means to have a successful AI model and how to test that, selecting datasets to give to that AI model, determining which benchmarks would work best, validate results and determining accuracy, reduce AI bias, abide by AI compliance laws, optimizing the model and its performance, and optimizing the amount of compute it should use. 

[More resources on model benchmarking, quality control, and optimization can be found on the bottom of this page](https://carcc.github.io/CaRCC-AI-Facilitation-Handbook/benchmarking/)

## Model Application

Citing on what directly was said in the Handbook:

>__Model Application packages and deploys a trained model with its dependencies and integrates it into a production or research environment where it can serve end users or downstream systems by performing inference on new data. It includes managing infrastructure and computational resources for batch (B), interactive (I), or real-time (RT) execution modes, along with monitoring, versioning, and scaling to ensure reliability, performance, and compliance within research and operational workflows.__

What this stage details is the deployment of an AI model or tool to render a service or a task completed, while doing so accurately.

RCD staff's role to play in this is to ensure that all hardware concerns such as storage, networking and latency, compute access and processing power is feasible for the task that the researcher or the PI sets out for. Additionally, RCD staff may also be warranted to ensure security and privacy compliance such as HIPAA and GDPR compliance and to help keep AI modles reproducible, auditable, and versionable.

## Results Interpretation and Reporting

Citing on what directly was said in the Handbook:

>__Results interpretation and reporting encompasses evaluating model outputs in relation to research goals and domain context. This stage includes documenting workflows and computing environments for reproducibility, communicating results through visualizations and reports, and preparing materials for dissemination and long-term preservation.__

This section of the Handbook details the evaluation of what AI models have created/summed, determining overall performance when it comes to the completion of the PI's proposed parameters. Additionally, this details the reasons why to document workflows and environments, communicating results, and the preparation of materials for dissemination and long-term preservation. It is to ensure reproducibility and overall AI model sustainability.

The role of a researcher or a PI in this section might be to evaluate the outputs and data created by an AI in reference to the research and determine bias, limitations, accuracy, and more. Additionally, documentation, workflows, code parameters, and overall steps to reproduce results are expected.

The role of RCD staff in this section might be to assist researchers with running and reproducing model evaluations across computational environments, helping researchers with maintaining software environments, and selecting repositories to store data for long-term preservation.

## Cross-Cutting Considerations

Citing on what directly was said in the Handbook:

>__Some considerations are not tied to any single stage of the AI project lifecycle. The subsections below outline concerns that recur throughout a project and across research domains.__

There are five sections within this:

1. AI Ethics
2. Regulated Research, Risks, and Compliance
3. AI Platform Development as a Research Product
4. Datacenter and Sustainability Considerations & GPU capabilities
5. Anti-Patterns in AI Project Facilitation

### AI Ethics

AI Ethics is ingrained into every part of the AI Project Life Cycle. It is a multidisciplinary field concerned with fair, accountable, transparent, and safe use of AI tools. These concerns also tie into privacy and data protection, safety and security, human rights, lifecycle governance, and community governance.

AI Ethics are made up of these things:

* Fairness, Non-Discrimination, and Bias
>* Which mainly relates to the minimization of bias within AI models across groups and populations in certain use cases and contexts. Bias can enter into an AI at any time such as data collection and quality control.
* Accountability and Responsibility
>* Fairness and equitability when using AI systems only when accountability and responsibility is maintained within project team. Addressing problems, who made key decisions, among other things, will allow teams to come to a more non-biased, higher quality, and reproducible result.
* Transparency and Explainability
>* Essentially, transparency and explainability are whether or not if the data used is easily traceable or easily seen by members of the public or by the people who have stake in the project, such as your employers. Explainability expands upon that by determining if the model outputs are easily verifiable with data.
* Privacy, Data Protection, Safety, and Security
>* Data exposure and leakage should always be prevented, and data privacy laws both in the United States (such as HIPAA) and the European Union (General Data Protection Regulation). Even outside of these, the necessary measures must be made to not expose AI to information that the person, or group does not want to see.
* Long-term Stewardship
>* Stewardship addresses the remnants of your research and data after the proejct is completed. It is recommended that as much data can be saved as possible (without breaking laws or ethical/moral codes) so that experiments can be reproduced in the future. Additionally, information used or created by AI models may still have certain (negative or positive) implications after data processing is complete, such as intellectual property.
* Indigenous Data Sovereignty
>* Indigenous Data Sovereignty is a nation's inherent right to own, govern, collect, access, interpret, and apply data about its peoples lands, resources, and cultural knowledge. CARE (Collective Benefit, Authority to Control, Responsibility, Ethics) and OCAP® (Ownership, Control, Access, Possession), should be considered throughout the AI research lifecycle.

### AI Platform Development as a Research Product

Citing on what directly was said in the Handbook:

>__RCD facilitators increasingly encounter researchers whose projects depend on shared AI platforms that the institution operates, such as centrally hosted Large Language Model (LLM) services, Retrieval-Augmented Generation (RAG) infrastructure, vector databases, model registries, and agentic frameworks. These platforms behave as research products in their own right, with users, releases, service expectations, and evolution driven by the projects that consume them. Holding this cross-cutting view helps facilitators support researchers at several lifecycle stages.__

There are two sections to AI Platform Development as a Research Product:

* Where to run an AI platform
>* For UC Merced, you can run an Artificial Intelligence or an AI tool on the Pinnacles Cluster, which is our institutional shared platforms. But it must run on a compute node, with no sensitive data allowed. National resources are also allowed, such as NAIRR (National AI Research Resource) or other commercial platforms.
* Application as ongoing service
>* At model application, platforms are ongoing services rather than endpoints. Traditional Machine Learning (ML) platforms are typically refreshed by retraining on newer data, while foundation-model platforms additionally cycle through base-model upgrades, fine-tuning (often via Parameter-Efficient Fine-Tuning (PEFT) techniques such as Low-Rank Adaptation (LoRA)), continued pre-training, and re-embedding of indexed corpora. Researchers should be encouraged to record which platform versions they used, since results may not be reproducible once the platform evolves underneath them.

### Datacenter and Sustainability Considerations

For those looking to purchase or use grants to buy GPU's or equipment for research using AI models, most data centers cannot handle most current and future GPU systems due to power, cooling and space requirements. This also applies to labs as well in addition to the UC Merced Pinnacles Cluster.

If you have more questions about this, please contact OIT through [ServiceNow](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) or come to High-Power Computing Office hours, linked [here](https://github.com/ucm-it/hpc_docs/blob/main/docs/hpcdocs/hpc-tutorials/OH.md).

#### GPU Capabilities

At times, the GPU's and compute available to an institution, such as a laboratory or a university, could depend on their data center infrastructure. For data centers focusses on air-cooling, then only GPU's that support air cooling can be bought, and vice versa with water-cooled GPU's.

### Anti-Patterns

Anti-Patterns are typically things that should not be done, unlike the rest of the document that detail tips and tricks on things that should be done. Anti-Patterns are behaviors, common exhibited by people, that often create significant technical debt in the long term that is generally counterproductive to the overall mission or project.

Listed Anti-Patterns taken from the [CaRCC document](https://carcc.github.io/CaRCC-AI-Facilitation-Handbook/cross-cutting/#datacenter-and-sustainability-considerations) are below:

Anti-Patterns for researchers:
>* Treat RCD as a help desk rather than a strategic partner in project planning, proposal preparation, and execution.
>* Engage RCD only after local resources, commercial cloud credits, or ad hoc solutions have been exhausted.
>* Purchase cloud resources before understanding data transfer, storage, security, licensing, and long-term operational costs.
>* Assume that successful execution on a laptop and workstation implies * scalability, reproducibility, or production readiness.
>* Move sensitive or restricted data before assessing risks and confirming compliance with data governance, privacy, and institutional policies and requirements.
>* Build workflows around a single individual's account, system, or undocumented environment.
>* Focus only on model accuracy while overlooking reproducibility, interpretability, fairness, operational costs, sustainability, and regulatory requirements.
>* Underestimate the effort and time required for data management, risk assessment, software engineering, documentation, monitoring, and maintenance.
>* Select technologies based on popularity or novelty rather than project requirements, available resources, and sustainability considerations.

Anti-Patterns for RCD facilitators:
>* Consider themselves solely as infrastructure providers rather than collaborators in proposal development, project scoping, and planning.
>* Focus exclusively on technical solutions without understanding research or educational objectives.
>* Emphasize infrastructure limitations instead of helping researchers find feasible alternatives.
>* Treat AI projects same as other HPC workloads without considering AI-specific workflows and requirements.
>* Assume researchers understand institutional policies, security requirements, and RCD resources and services.
>*Provision computing resources without understanding project requirements, support expectations, or a sustainability plan.
>* Consider primarily system utilization metrics while neglecting researcher's productivity, usability, and scientific outcomes.

Anti-Patterns for both researchers and RCDs:
>* Defer the discussions and decisions about governance, compliance, sustainability, and operational ownership until late in the project.
>* Fail to establish shared expectations regarding costs, timelines, team roles, responsibilities, and success criteria.
>* Optimize for immediate results without consideration of maintainability, reproducibility, and sustainability.
>* Overlook the importance of total cost of ownership, storage growth, maintenance, and future upgrades.
>* Treat reproducibility and documentation as activities after publication or deployment.

Failure to avoid these, as stated eariler, will rack up technical debt and make problems later in the future harder to solve. AI project failures can result from delayed RCD engagement, inadequate planning, and neglect of compliance and governance. Early partnership between researchers and RCD facilitators is essential to reduce the risks and ensure successful project execution and sustainable outcomes.

And with that comes the end of the CaRCC document. Further reading resources from CaRCC are linked below.

### [Further Resources](https://carcc.github.io/CaRCC-AI-Facilitation-Handbook/resources/)