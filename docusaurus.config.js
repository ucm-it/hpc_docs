// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UC Merced HPC & JupyterHub Documentation',
  tagline: 'Cyberinfrastructure and Research Technologies',
  favicon: 'img/CIRT.png',

  // Set the production url of your site here
  url: 'https://ucm-it.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hpc_docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ucm-it', // Usually your GitHub org/user name.
  projectName: 'hpc_docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },

        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins:[
   [
    require.resolve("@easyops-cn/docusaurus-search-local"),
   
    ({
      
      hashed: true,
      
    }),
  ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({


      // Replace with your project's social card
      image: 'img/cirt.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'CIRT Logo',
          src: 'img/CIRT.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'HPC Cluster',
            sidebarCollapsed: false,
   
          },
          {
            type: 'docSidebar',
            sidebarId: 'jupytersidebar',
            position: 'left',
            label: 'JupyterHub',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {to: '/serve', label: 'Calendar', position: 'left'},
          {
            href: 'https://github.com/ucm-it/hpc_doc_new',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'HPC Tutorial',
                to: 'docs/hpcdocs/hpc-tutorials/intro-hpc',
              },
              {
                label: 'HPC Clusters',
                to: 'docs/hpcdocs/HPC-clusters/campus-clusters/#hpc-clusters',
              },
              {
                label: 'JupyterHub',
                to: 'docs/jupyter/jupyterhub-policy',
              }

            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'ServiceNow Hub',
                href: 'https://ucmerced.service-now.com/servicehub',
              },
              {
                label: 'Zoom Office Hours (Fridays 11:30pm-1pm PT',
                href: 'https://ucmerced.zoom.us/j/89487493900',
              },
              {
                label: 'CIRT UC Merced Home Page',
                href: 'https://it.ucmerced.edu/CIRT',
              },
              {
                label: 'UC Merced HPC Cluster Slack Workspace',
                href: 'https://ucmhpcclusters.slack.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ucm-it/hpc_doc_new',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} University of California, Merced HPC & JupyterHub Documentation.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
