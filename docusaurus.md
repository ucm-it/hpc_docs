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

1. GIT
- You can find the website to install GIT [at this link](https://git-scm.com/install/windows).
- To install GIT, first download the GIT installer for your operating system (Windows, Mac, Linux) and run it.
- Most of the pre-selected and recommended options can be selected.
- After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

- 'git'

- If a general encyclopedia of GIT-related commands appear, then you have successfully installed GIT.

2. Node.js
-You can find the website to install Node.js [at this link](https://nodejs.org/en/download).

-To install Node.js, download the prebuilt Node.js for your operating system (Windows, Mac) and run it.

-Most of the pre-selected and recommended options can be selected.

-After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

-`npm`

-If a general encyclopedia of npm/Node.js-related commands appear, then you have successfully installed Node.js, and just as important, npm.

Notes:
GIT is a free, open-source distributed version control system designed to track changes in files and coordinate work among multiple people.

Node.js is a JavaScript runtime environment which will enable you to locally run a copy of the Docusaurus documentation website on your computer.

## Installing GIT

You can find the website to install GIT [at this link](https://git-scm.com/install/windows).

To install GIT, first download the GIT installer for your operating system (Windows, Mac, Linux) and run it.

Most of the pre-selected and recommended options can be selected.

After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

```
git
```

If a general encyclopedia of GIT-related commands appear, then you have successfully installed GIT.

## Installing Node.js

You can find the website to install Node.js [at this link](https://nodejs.org/en/download).

To install Node.js, download the prebuilt Node.js for your operating system (Windows, Mac) and run it.

Most of the pre-selected and recommended options can be selected.

After the installation is complete, open up your terminal, command prompt, or your command-line interface and type:

```
npm
```

If a general encyclopedia of npm/Node.js-related commands appear, then you have successfully installed Node.js, and just as important, npm.

## Installing/Running Docusaurus

If you need to preview your changes locally, add new pages, or make extensive changes, you need to be able to run Docusaurus/HPC Documentation website locally on your computer.

To clone the HPC documentation repository, first fork the HPC documentation GitHub repository [link right here](https://github.com/ucm-it/hpc_docs).

After that, you need to clone your forked repository (should look like this - "https://github.com/[your-GitHub-username-here]/hpc_docs")

and then type this into your command-line interface or terminal:

```
git clone https://github.com/your-GitHub-username-here/hpc_docs
cd hpc_docs
```

It is also recommended that you fork the repository, but it isn't crucial.

After you "cd" to "hpc_docs" you must then install Docusaurus dependencies by typing this command into your terminal:

`npm install`

After that, you are ready to run a copy of the website locally from your computer with this command:

`npm run start`

After you type that command, you can pat yourself on the back because you have successfully installed Node.js, GIT, and Docusaurus! The website will be ran locally at "http://localhost:3000", after which you can preview and make edits as necessary.