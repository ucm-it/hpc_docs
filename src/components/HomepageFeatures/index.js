import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'The First Spot for HPC Documentation @ UCM',
    Svg: require('@site/static/img/liftup.svg').default,
    description: (
      <>
       This site is tailored and designed for the UC Merced community that use the HPC clusters.
       All job scripts and software tutorials are done on the cluster for best experience possible. 
      </>
    ),
    link: 'docs/category/HPC-clusters',
  },
  {
    title: 'Centralized Hub for Both Jupyterhub and HPC Clusters',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        First place to visit for everything HPC and JupyterHub related at UC Merced.
        Constantly updated with the latest news, information and resources.
      </>
    ),
    link: 'docs/jupyter/jupyterhub-policy', 
  },
  {
    title: 'An Open-Source Collaborative Effort',
    Svg: require('@site/static/img/interconnect.svg').default,
    description: (
      <>
       We are a tight knit group of researchers who are passionate about HPC and JupyterHub.
       We are always looking for new contributors to help us improve our documentation.
       Join us and chat with us on our{" "}
       <a href="https://ucmhpcclusters.slack.com/signup#/domain-signup" target="_blank" rel="noopener noreferrer">
             Slack workspace 
       </a> {" "}

        or  open an issue on our {" "}
       <a href="https://github.com/ucm-it/hpc_docs/issues" target="_blank" rel="noopener noreferrer">
         GitHub page
       </a>.
      </>
    ),
    link: 'https://ucmhpcclusters.slack.com/signup#/domain-signup',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}