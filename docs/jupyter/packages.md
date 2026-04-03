---
title: Available Packages in Jupyterhub
sidebar_position: 5
---

### What are the packages pre-installed in the Jupyterhub? <!-- {docsify-ignore} -->

The Procedure for package installation varies across different programming languages. Basic python packages such as numPy, pandas, scikit-learn, matplotlib, etc., are installed across the main Jupyterhub. R hubs supports packages such as shiny, dplyr, tidyR, RSQLlite, etc. 

You can use the following command in Python to see the list of available packages in JupyterHub.
```
!pip list

```

You can use the following command in R to see the list of available packages in JupyterHub.

```
installed.packages()

```

Here is the list of  [Python Packages](https://ucmerced.app.box.com/s/x2eigcssqyeca9mrid3m19glfcs73j02) installed in [ucmerced.2i2c.cloud](https://ucmerced.2i2c.cloud/hub/login) . Here is the list of [R packages](https://ucmerced.app.box.com/file/1481528927192?s=65r1rda9atblpdsxdvtyaq6exlnns9z3) of R packages installed in [ucmerced.2i2c.cloud](https://ucmerced.2i2c.cloud/hub/login)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<details open={false}>
  <summary>
    <strong>JupyterHub Environment (Major Libraries)</strong> — click to expand
  </summary>

  <Tabs>
    <TabItem value="core" label="Core">
      
  | Package | Version |
  |---|---|
  | **Python** | 3.11.8 |
  | **R**      | 4.3.1  |

    </TabItem>

    <TabItem value="jupyter" label="Jupyter Stack" default>

  | Package | Version |
  |---|---|
  | **JupyterHub** | 4.0.2 |
  | **JupyterLab** | 4.1.4 |
  | **Notebook** | 7.1.1 |
  | **ipykernel** | 6.29.3 |
  | **jupyter-server** | 2.13.0 |
  | **jupyterlab-git** | 0.50.0 |
  | **nbconvert** | 7.16.6 |
  | **nbformat** | 5.10.2 |
  | **jupytext** | 1.17.3 |
  | **ipywidgets** | 8.1.5 |
  | **ipympl** | 0.9.3 |
  | **bash_kernel** | 0.10.0 |
  | **jupyter-resource-usage** | 1.2.0 |

  For a complete list of of all python packages, run `pip list` in a jupyter notebook.

    </TabItem>

    <TabItem value="data" label="Data Science & Numerics">

  | Package | Version |
  |---|---|
  | **NumPy** | 1.26.4 |
  | **SciPy** | 1.12.0 |
  | **Pandas** | 2.3.2 |
  | **Bottleneck** | 1.3.8 |
  | **NumExpr** | 2.9.0 |
  | **Numba** | 0.59.1 |
  | **llvmlite** | 0.42.0 |
  | **Statsmodels** | 0.14.1 |
  | **SymPy** | 1.14.0 |

    </TabItem>

    <TabItem value="ml" label="ML / NLP">

  | Package | Version |
  |---|---|
  | **scikit-learn** | 1.4.1.post1 |
  | **PyTorch (CPU)** | 2.7.1 |
  | **torchvision** | 0.22.0 |
  | **pytorch-lightning** | 2.5.5 |
  | **Transformers** | 4.56.1 |
  | **sentence-transformers** | 5.1.0 |

    </TabItem>

    <TabItem value="viz" label="Visualization & Geo">

  | Package | Version |
  |---|---|
  | **Matplotlib** | 3.8.3 |
  | **Seaborn** | 0.13.2 |
  | **Plotly** | 5.19.0 |
  | **Kaleido** | 1.0.0 |
  | **Altair** | 5.3.0 |
  | **Bokeh** | 3.4.0 |
  | **folium** | 0.20.0 |
  | **branca** | 0.8.1 |

    </TabItem>

    <TabItem value="io" label="Data I/O & Big Data">

  | Package | Version |
  |---|---|
  | **Dask** | 2024.3.1 |
  | **distributed** | 2024.3.1 |
  | **PyArrow** | 21.0.0 |
  | **OpenPyXL** | 3.1.2 |
  | **PyTables** | 3.10.2 |
  | **h5py** | 3.14.0 |
  | **pypdf** | 6.0.0 |
  | **python-poppler** | 0.4.1 |
  | **ORC libs** | present |

    </TabItem>

    <TabItem value="r" label="R Packages">

  | Package | Version |
|---|---|
| **IRkernel** | 1.3.2 |
| **tidyverse** | 2.0.0 |
| **dplyr** | 1.1.3 |
| **tidyr** | 1.3.0 |
| **ggplot2** | 3.4.4 |
| **data.table** | 1.14.8 |
| **readr** | 2.1.4 |
| **readxl** | 1.4.3 |
| **stringr** | 1.5.0 |
| **lubridate** | 1.9.3 |
| **shiny** | 1.7.5.1 |
| **DBI** | 1.1.3 |
| **RSQLite** | 2.3.2 |
| **RPostgres** | 1.4.6 |
| **arrow** | 13.0.0.1 |
| **sf** | 1.0-14 |
| **terra** | 1.7-55 |
| **stars** | 0.6-4 |
| **knitr** | 1.44 |
| **rmarkdown** | 2.25 |
| **bookdown** | 0.36 |
| **blogdown** | 1.18 |
| **devtools** | 2.4.5 |
| **reticulate** | 1.34.0 |

For a complete list of installed R packages, run `installed.packages()` in an R notebook or refer to the full package list linked above.
    </TabItem>

  </Tabs>

import CodeBlock from '@theme/CodeBlock';

  <details>
    <summary><strong>Copy as text</strong> (click to expand)</summary>

    <CodeBlock language="text">{`Core
- Python 3.11.8
- R 4.3.1

Jupyter Stack
- JupyterHub 4.0.2
- JupyterLab 4.1.4
- Notebook 7.1.1
- ipykernel 6.29.3
- jupyter-server 2.13.0
- jupyterlab-git 0.50.0
- nbconvert 7.16.6
- nbformat 5.10.2
- jupytext 1.17.3
- ipywidgets 8.1.5
- bash_kernel 0.10.0

Data Science
- NumPy 1.26.4
- SciPy 1.12.0
- Pandas 2.3.2
- Statsmodels 0.14.1
- SymPy 1.14.0
- Numba 0.59.1

ML / NLP
- scikit-learn 1.4.1.post1
- PyTorch (CPU) 2.7.1
- torchvision 0.22.0
- pytorch-lightning 2.5.5
- Transformers 4.56.1
- sentence-transformers 5.1.0

Visualization
- Matplotlib 3.8.3
- Seaborn 0.13.2
- Plotly 5.19.0
- Altair 5.3.0
- Bokeh 3.4.0
- folium 0.20.0

Data I/O
- Dask 2024.3.1
- distributed 2024.3.1
- PyArrow 21.0.0
- OpenPyXL 3.1.2
- PyTables 3.10.2
- h5py 3.14.0
- pypdf 6.0.0
- python-poppler 0.4.1

R Packages
- IRkernel 1.3.2
- tidyverse 2.0.0
- dplyr 1.1.3
- tidyr 1.3.0
- ggplot2 3.4.4
- data.table 1.14.8
- readr 2.1.4
- readxl 1.4.3
- stringr 1.5.0
- lubridate 1.9.3
- shiny 1.7.5.1
- DBI 1.1.3
- RSQLite 2.3.2
- RPostgres 1.4.6
- arrow 13.0.0.1
- sf 1.0-14
- terra 1.7-55
- stars 0.6-4
- knitr 1.44
- rmarkdown 2.25
- bookdown 0.36
- blogdown 1.18
- devtools 2.4.5
- reticulate 1.34.0`}</CodeBlock>

  </details>
</details>


### What should I do if I want to install more packages? <!-- {docsify-ignore} -->

Use your Jupyterhub instance to install the required version of the package. Self installation of packages in your instance of hub is a temporary measure to identify dependencies. If you require a permanent solution then you need submit a [UCMerced Service Hub](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=9d79262483011a1066ac93647daad3e6&form_id=69d58f061b6bc6905f3aed74bd4bcb2a) to us to install the required package(s) in your hub.

If you want to install packages for Python in your instance, then use the following syntax,

```
!pip install <package-name>

Eg: !pip install numpy

```

If you want to install packages for R in your instance, then use the following syntax,

```
install.packages("<package-name>")

Eg: install.packages("ggplot2")

```

### Pre-installed Packages <!-- {docsify-ignore} -->

Many Python packages have been pre-installed on JupyterHub and are available by default. To use a pre-installed package such as numpy, you can simply type the line below into a code cell.

``` 
import numpy

```

### Long-term installation <!-- {docsify-ignore} -->

*This is the recommended method for packages that will be used frequently.* If you require a permanent solution then you need to [UCMerced Service Hub](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=9d79262483011a1066ac93647daad3e6&form_id=69d58f061b6bc6905f3aed74bd4bcb2a) us to install the required package(s) in your hub.

As in best practice, the installation will be done on staging hub first, and once validated, will be installed in the production hub.


> Before sending a request to CIRT team for installing new packages on Jupyterhub,Kindly mention its Version as well
