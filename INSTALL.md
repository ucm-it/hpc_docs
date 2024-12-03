# How to install the Documenation project
This will cover the prequisite knowledge, softwares and tools to successfully have a local copy of the documentation site. 

## Prerequisite Tools
1. Node.js
   This is the runtime Javascript Enviroment that is used also as our package manager for all javascript packages. Without Node.js, it will not be possible to downlaod a working, local copy of the repository.

## Prerequisite Javascript Packages
1. Docusaurus
   - This is the documentation framework that the site is built on.
   - Typically if one executes `npm install docusaurus` the associated dependencies(listed below) will also download.
  ```bash
  ├── @docusaurus/core@3.5.2
  ├── @docusaurus/module-type-aliases@3.5.2
  ├── @docusaurus/plugin-content-docs@3.5.2
  ├── @docusaurus/plugin-content-pages@3.5.2
  ├── @docusaurus/preset-classic@3.5.2
  ├── @docusaurus/types@3.5.2
  ├── @easyops-cn/docusaurus-search-local@0.44.5
  ├── @mdx-js/react@3.0.1
  ├── @react-pdf-viewer/core@3.12.0
  ├── @react-pdf/renderer@4.0.0
  ├── clsx@2.1.1
  ├── pdfjs-dist@3.11.174
  ├── prism-react-renderer@2.4.0
  ├── react-dom@18.3.1
  ├── react-icons@5.3.0
  ├── react-pdf-viewer@0.1.0
  ├── react-pdf@9.1.1
  ├── react@18.3.1
  └── remark-mdx@3.1.0
  ```
  :::warning
  Some of these packages may need to be installed explicitly via `npm install`. Double check to see if your installed packages align with the stated packages above. 
  ::: 

  ## Forking the project
  Instructions on how to fork the project can be seen at [FORKING.md](/FORKING.md)

  ## Running a Local Build
  Once the project has been sucessfully forked and the required dependencies are installed, you can now try to do the following commands whenever. 
  1. `npm run build`
  2. `npm run serve`
  3. `npm run start`
  