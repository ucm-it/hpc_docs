import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HPC Documentation',
    Svg: require('@site/static/img/liftup.svg').default,
    description: (
      <>
        Guides, job scripts, and software tutorials built for the UC Merced HPC clusters.
      </>
    ),
    link: 'docs/category/HPC-clusters',
  },
  {
    title: 'JupyterHub Documentation',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        Your go-to resource for JupyterHub and HPC at UC Merced, kept up to date.
      </>
    ),
    link: 'docs/jupyter/jupyterhub-policy',
  },
  {
    title: 'Join the Community',
    Svg: require('@site/static/img/interconnect.svg').default,
    description: (
      <>
        Chat with us on{" "}
        <a href="https://ucmhpcclusters.slack.com/signup#/domain-signup" target="_blank" rel="noopener noreferrer">
          Slack
        </a>{" "}
        or contribute on{" "}
        <a href="https://github.com/ucm-it/hpc_docs/issues" target="_blank" rel="noopener noreferrer">
          GitHub
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
        <a href={link} className={styles.featureTitleLink}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </a>
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
