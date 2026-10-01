---
title: Downloading and using Docusaurus
sidebar_position: 3
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Docusaurus Description

Docusaurus is a static-site generator that can build single-page applications with fast client-side navigation, using React to make the site interactive. It is primarily used for tech-stacks and documentation purposes, which we use for our own HPC documentation. 

## Necessary software to install before installing Docusarus

There are two things that need to be installed onto your computer before installing Docusaurus.

1. **GIT for Windows users**
- For Windows users (macOS users are in another portion of the list), you can find the website to install GIT [at this link](https://git-scm.com/install/windows).
- To install GIT, first download the GIT installer for your operating system (Windows, Mac, Linux) and run it.
- Most of the pre-selected and recommended options can be selected.
- After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

- `git`

- If a general encyclopedia of GIT-related commands appear, then you have successfully installed GIT.

2. **GIT for macOS users**
- For Mac users, you are going to download a package manager called Homebrew, [link found here](https://brew.sh).
- Open up your macOS terminal and paste this command:
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- After all prompts and completing installation, close the terminal and open it again. After you do that, paste this command:
- `brew install git`
- Once installation is complete, you can type `git` into your terminal to check if GIT-related commands appear. If so, then GIT has been successfully installed.

3. **Node.js**
- You can find the website to install Node.js [at this link](https://nodejs.org/en/download).
- For convenience, you can use the prebuilt Node.js installer. Select your operating system (Windows, macOS, Linux, etc) as well as your CPU architecture (most Windows laptops run x64 and most MacBooks bought past 2020 run ARM64)
- Most of the pre-selected and recommended options can be selected.
- After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

- `npm`

- If a general encyclopedia of npm/Node.js-related commands appear, then you have successfully installed Node.js, and just as important, npm.

Notes:
- GIT is a free, open-source distributed version control system designed to track changes in files and coordinate work among multiple people.

- Node.js is a JavaScript runtime environment which will enable you to locally run a copy of the Docusaurus documentation website on your computer.

## Installing/Running Docusaurus

If you need to preview your changes locally, add new pages, or make extensive changes, you need to be able to run Docusaurus/HPC Documentation website locally on your computer.

To clone the HPC documentation repository, first fork the HPC documentation GitHub repository [link right here](https://github.com/ucm-it/hpc_docs) and instructions found here at [FORKING.md](/FORKING.md).

After forking the repository, you need to clone that forked repository. Your GitHub link should look like this:

```
https://github.com/[your-GitHub-username-here]/hpc_docs
```

and then type this into your command-line interface or terminal:

```
git clone https://github.com/your-GitHub-username-here/hpc_docs
cd hpc_docs
```

After you "cd" to "hpc_docs" you must then install Docusaurus dependencies by typing this command into your terminal:

```
npm install
```

Executing `npm install` will typically install the following dependencies.

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

After that, you are ready to run a copy of the website locally from your computer with this command:

```
npm run start
```

After you type that command, you can pat yourself on the back because you have successfully installed Node.js, GIT, and Docusaurus! The website will be ran locally at "http://localhost:3000", which should pop-up automatically, after which you can preview and make edits as necessary.

## List of commands

### Running a Local Build

The following commands can be used to preview, view, and update the site as needed.

  1. `npm run build` - Recompile and builds a static version that can be deployed anywhere like github pages. 
This command is important to run if you are making many pages or docs under the `static` folder, as these docs do not get compiled with `serve`. 

  2. `npm run serve` - Starts the deployment server(local), it will watch over the files and update the site in real-time when changes are made. 

  3. `npm run start`- Similar to `npm run build` except it deploys unoptimized builds, which can lead to broken sites. 