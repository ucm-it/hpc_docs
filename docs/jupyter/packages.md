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
