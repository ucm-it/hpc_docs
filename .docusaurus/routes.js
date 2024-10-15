import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hpc_doc_new/blog',
    component: ComponentCreator('/hpc_doc_new/blog', 'ade'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/archive',
    component: ComponentCreator('/hpc_doc_new/blog/archive', '986'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/authors',
    component: ComponentCreator('/hpc_doc_new/blog/authors', '431'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/hpc_doc_new/blog/authors/all-sebastien-lorber-articles', '539'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/authors/yangshun',
    component: ComponentCreator('/hpc_doc_new/blog/authors/yangshun', '9ee'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/first-blog-post',
    component: ComponentCreator('/hpc_doc_new/blog/first-blog-post', '955'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/long-blog-post',
    component: ComponentCreator('/hpc_doc_new/blog/long-blog-post', 'd48'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/mdx-blog-post',
    component: ComponentCreator('/hpc_doc_new/blog/mdx-blog-post', 'dad'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/tags',
    component: ComponentCreator('/hpc_doc_new/blog/tags', 'bb5'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/tags/docusaurus',
    component: ComponentCreator('/hpc_doc_new/blog/tags/docusaurus', '16d'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/tags/facebook',
    component: ComponentCreator('/hpc_doc_new/blog/tags/facebook', 'ad0'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/tags/hello',
    component: ComponentCreator('/hpc_doc_new/blog/tags/hello', 'f80'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/tags/hola',
    component: ComponentCreator('/hpc_doc_new/blog/tags/hola', '9c8'),
    exact: true
  },
  {
    path: '/hpc_doc_new/blog/welcome',
    component: ComponentCreator('/hpc_doc_new/blog/welcome', '64e'),
    exact: true
  },
  {
    path: '/hpc_doc_new/markdown-page',
    component: ComponentCreator('/hpc_doc_new/markdown-page', 'a4e'),
    exact: true
  },
  {
    path: '/hpc_doc_new/search',
    component: ComponentCreator('/hpc_doc_new/search', '5a8'),
    exact: true
  },
  {
    path: '/hpc_doc_new/docs',
    component: ComponentCreator('/hpc_doc_new/docs', '1ea'),
    routes: [
      {
        path: '/hpc_doc_new/docs',
        component: ComponentCreator('/hpc_doc_new/docs', '9b4'),
        routes: [
          {
            path: '/hpc_doc_new/docs',
            component: ComponentCreator('/hpc_doc_new/docs', '8a8'),
            routes: [
              {
                path: '/hpc_doc_new/docs/category/additional-hpc-resources',
                component: ComponentCreator('/hpc_doc_new/docs/category/additional-hpc-resources', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/category/hpc-clusters',
                component: ComponentCreator('/hpc_doc_new/docs/category/hpc-clusters', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/category/off-campus-high-performance-computing-resources',
                component: ComponentCreator('/hpc_doc_new/docs/category/off-campus-high-performance-computing-resources', '927'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/category/running-jobs',
                component: ComponentCreator('/hpc_doc_new/docs/category/running-jobs', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/category/tutorial---extras',
                component: ComponentCreator('/hpc_doc_new/docs/category/tutorial---extras', 'aeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/campus-clusters',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/campus-clusters', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/data',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/data', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/get_help',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/get_help', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/hpc_news',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/hpc_news', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/job_manage',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/job_manage', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/jobs',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/jobs', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/markdown-features',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/markdown-features', 'eca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/HPC-clusters/run_apps',
                component: ComponentCreator('/hpc_doc_new/docs/HPC-clusters/run_apps', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/hpc-tutorials/hpc_vocab',
                component: ComponentCreator('/hpc_doc_new/docs/hpc-tutorials/hpc_vocab', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/hpc-tutorials/OH',
                component: ComponentCreator('/hpc_doc_new/docs/hpc-tutorials/OH', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/hpc-tutorials/slurm',
                component: ComponentCreator('/hpc_doc_new/docs/hpc-tutorials/slurm', 'c50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/offcampus_resources/access',
                component: ComponentCreator('/hpc_doc_new/docs/offcampus_resources/access', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/running-jobs/build_gpu_apps',
                component: ComponentCreator('/hpc_doc_new/docs/running-jobs/build_gpu_apps', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/running-jobs/interact_job',
                component: ComponentCreator('/hpc_doc_new/docs/running-jobs/interact_job', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/running-jobs/run_jupyter',
                component: ComponentCreator('/hpc_doc_new/docs/running-jobs/run_jupyter', 'd03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/running-jobs/running_matlab',
                component: ComponentCreator('/hpc_doc_new/docs/running-jobs/running_matlab', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/hpc_doc_new/docs/tutorial-extras/manage-docs-versions', '1b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hpc_doc_new/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/hpc_doc_new/docs/tutorial-extras/translate-your-site', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/hpc_doc_new/',
    component: ComponentCreator('/hpc_doc_new/', '1ae'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
