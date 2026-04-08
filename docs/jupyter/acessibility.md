---
title: Creating Accessible Notebooks

sidebar_position: 13

---
Improving the accessibility of the notebook interface has been a key priority for the DataHub team. This focus stems from the fact that notebooks have presented significant accessibility challenges, including limited compatibility with screen readers and keyboard navigation, difficulties in interpreting content due to color contrast issues, and non-compliance with the [WCAG 2.0 AA standards](https://www.ucop.edu/electronic-accessibility/standards-and-best-practices/levels-of-conformance-a-aa-aaa.html) mandated by the University.

Enhancing the accessibility of the notebook experience involves addressing the following aspects:

- Improving the accessibility of the lab and notebook interface.
- Improving the accessibility of the content within notebooks.

Content within notebooks might be inaccessible due to varied issues such as alt text, image captions, color contrast, and other reasons. One can avoid such issues by following the best practices.


## Alternative Text <!-- {docsify-ignore} -->

Adding alternative text ("alt text") to images is an important accessibility practice, especially when creating content for the web. Alt text provides a textual description of images, making content accessible to individuals who use screen readers or have other disabilities. Data visualization libraries such as matplotlib and seaborn by default doesn't support embedding alt text to generated charts.

You can add alt text to an image in a markdown file by using the below syntax where the text withing the square brackets denotes the alt text for an image.

`![A beautiful landscape](landscape.jpg)`

## Clear Headings <!-- {docsify-ignore} -->

Screen readers will be using headers to navigate the notebook. Ensure that the first cell in a notebook has the `H1` tag to identify that it is the title. It has been observed that lack of clear header tags affects the screen reader navigability.

## Represent data across multiple mediums <!-- {docsify-ignore} -->

It is important that users who use screen readers have additional pathways to make sense of the data visualized in a chart or an image. Some of those pathways include,
a) Descriptive summary of data represented in the chart and
b) HTML formatted table in the form of code or markdown cells.

Representing data in the form of table should take into consideration the impact it has on screen readers. Too many rows and columns can affect screen reader navigation resulting in issues with navigation and comprehension.

## Avoid creating large notebooks <!-- {docsify-ignore} -->

It has been observed that large notebooks causes screen readers like NVDA and JAWS to crash. Keeping notebook size lesser than 10 MB (realistically) or even better around 1 MB (ideally) will make it easy for screen readers to navigate the ipynb files. 

## Export to HTML <!-- {docsify-ignore} -->

The editable notebook format (.ipynb) is inaccessible for screen readers and keyboard navigation. Much effort has been made to improve the Lab 4 and Notebook 7 interfaces to overcome some of the accessibility barriers. However, they still are not 100% accessible at the moment. To improve the readability of the notebooks, it is recommended that .ipynb files be converted to .html files, which are largely designed for a web interface and have a more accessible experience. PDFs are generally inaccessible in comparison to HTML format from a readability standpoint.

[Nbconvert](https://github.com/jupyter/nbconvert) is a  tool that converts notebooks to various formats including html which improves readability. The command for converting notebooks from .ipynb to html is

```bash
jupyter nbconvert --to html mynotebook.ipynb`
```

One can also customize the themes, font types, sizes etc. as part of the notebook inorder to improve the accessibility. 

## Jupyterlab-a11y-checker <!-- {docsify-ignore} -->

The [JupyterLab a11y-checker extension](https://pypi.org/project/jupyterlab-a11y-checker/) is an acessibility engine for Jupyter Notebooks, assisting authors detect and fix accessibility issues in Jupyter Notebooks, aligning with WCAG 2.1 AA guidelines. It combines the strengths of axe-core, a widely used accessibility engine, with custom notebook-specific detection algorithms that address a11y issues in JupyterLab. Users can use this tool in two ways:

- As a JupyterLab extension. It not only provides accessibility scan results in real-time but also provides actionable suggestions to fix them.
- As a CLI tool. It can be ran independently of JupyterLab, for instance in GitHub Actions, to maintain accessible notebooks.

The tool does the following:
1. Verifies the presence of alt-text for images.
2. Calculates the colour contrast ratio and reports the images with a poor color contrast ratio.
3. Evaluates the heading structure of the markdown content and reports cells that don't align with WCAG standards.
4. Evaluates the presence of table captions, headers, and scope and reports tables where they aren't present.
5. Evaluates whether describable links are present in a notebook and reports cells where they aren't present.

## Accessible Themes <!-- {docsify-ignore} -->

### Quansight Themes <!-- {docsify-ignore} -->

Users may choose to install [accessbility-oriented jupyter lab themes](https://github.com/Quansight-Labs/jupyterlab-accessible-themes). There are three different types of themes which are included as part of this package:

1. Pitaya Smoothie
1. Github Light
1. Github Dark

All the above themes are WCAG 2.1 AAA compliant and have been recommended by the Jupyter a11y community. However, these themes are not compatible with classic notebook interface and are a work in progress in terms of compatibility with JupyterLab 4.0.

You can install this theme by running the following commands:

```bash
pip install jupyterlab-accessible-themes==0.1.1
```

or 

```bash
conda install -c conda-forge jupyterlab-accessible-themes
```

Once installed, you can enable this theme by the following steps:

- Save the notebook and restart the kernel by selecting Kernel > Restart Kernel
- Select `Github Light theme` by selecting Settings > Theme > Github Light and/or `Pitaya Smoothie theme` by selecting Settings > Theme > Pitaya Smoothie and/or `Github Dark theme` by selecting Settings > Theme > Github Dark

### Jupyterthemes <!-- {docsify-ignore} -->

[jupyterthemes](https://github.com/dunovank/jupyter-themes) is a notebook theme that offers 7 different types of themes to customize the classic notebook experience. This theme only works with classic notebook interface and is not compatible with JupyterLab and the Notebook 7.0. 

You can install themes by running:

```bash
pip install jupyterthemes
```

The different types of themes  are onedork, grade3,  oceans16, chesterish,  monokai, solarizedI,  solarizedd. If you are looking for JupyterLab equivalent for those themes then you can explore JupyterLab [Legos UI](https://github.com/dunovank/jupyterlab_legos_ui) and [Darkside UI](https://github.com/dunovank/jupyterlab_darkside_ui)

### Jupyter Font <!-- {docsify-ignore} -->

You can use the [JupyterLab fonts](https://github.com/deathbeds/jupyterlab-fonts) package to customize the fonts used in the notebook. JupyterLab font is a work in progress and is currently compatible with Lab version 3.0. The compatibility with Lab 4.0 is a work in progress.

```bash
pip install jupyterlab-fonts
```

The sans serif fonts this package ships currently are:
- [Anonymous Pro](https://fonts.google.com/specimen/Anonymous+Pro)
- [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible)
- [Dejavu Sans](https://dejavu-fonts.github.io/)
- [Fira Code](https://fonts.google.com/specimen/Fira+Code)

## Sonify your data <!-- {docsify-ignore} -->

"Sonify the data" refers to the process of representing data using sound. Instead of just visualizing data in charts, graphs, or other visual formats alone, sonification translates data into audible sound patterns, allowing users to perceive and understand data through their sense of hearing. 

- Use python packages like [sonipy](https://github.com/lockepatton/sonipy) to sonify the data
- Open source tools such as [TwoTone](https://github.com/sonifydata/twotone) allow for generating music from data
- In Astronomy, [Astronify](https://astronify.readthedocs.io/en/latest/) is used for turning astronomical data into sound

## R Notebook Content <!-- {docsify-ignore} -->

If you are using R as part of your instructional workflow then please check the following resources that provide better ways to make notebook content accessible,

- [Customize themes in R Studio](https://support.posit.co/hc/en-us/articles/115011846747-Using-Themes-in-the-RStudio-IDE)
- [BrailleR: R package that allows blind people understand plots better](https://cran.r-project.org/web/packages/BrailleR/index.html). Here is an [example of BrailleR package](https://cran.r-project.org/web/packages/BrailleR/vignettes/Ex1histograms.html)
- [Sonify: R package converts images into audio representation](https://cran.r-project.org/web/packages/sonify/index.html). Here is an [example for sonifying a data](https://jooyoungseo.com/post/ds4blind/)
- [TactileR: R package for creating tactile graphics for users with visual impairments](https://github.com/jooyoungseo/tactileR). Here is an [example for tacticleR](https://jooyoungseo.github.io/project/tactiler/)
- [Adding alt text content for images produced by knittR](https://posit.co/blog/knitr-fig-alt/)
- [AccessRMD is the package to improve accessibility of RMD files](https://cran.r-project.org/web/packages/accessrmd/accessrmd.pdf)

Improving accessibility in Jupyter notebooks is an ongoing process that involves attention to both the structural aspects of the content and the interactive elements within the notebooks. It's important to prioritize accessibility to ensure that your content is inclusive and usable by a broad audience.

## References <!-- {docsify-ignore} -->

- Potluri et al (2023), Notably Inaccessible - Data Driven Understanding of Data Science Notebook (In)Accessibility, ACM 
Paper titled [notably inaccessible](https://github.com/make4all/notebooka11y)
- Iota school [a11y tips](https://iota-school.github.io/notebooks-for-all/exports/resources/event-hackathon/accessibility-tips-for-jupyter-notebooks/) for creating and publishing Jupyter notebooks
- JupyterLab Accessibility [Meeting Notes](https://hackmd.io/WnaWXboXSiGoqWvev_fAvA?both)
- [Iota School](https://github.com/Iota-School) has compiled the best practices for creating accessible notebooks into checklists and tips:
  - [Checklist](https://iota-school.github.io/notebooks-for-all/exports/resources/event-hackathon/notebook-authoring-checklist/) for notebook authoring
  - [Tips](https://iota-school.github.io/notebooks-for-all/exports/resources/event-hackathon/accessibility-tips-for-jupyter-notebooks/#visualization-accessibility) for notebook authoring
