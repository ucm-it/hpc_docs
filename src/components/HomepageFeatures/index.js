import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The First Spot for HPC Documentation @ UCM',
    Svg: require('@site/static/img/icon_svg/1.svg').default,
    description: (
      <>
       This site is tailored and designed for the UC Merced community that use the HPC clusters.
       All job scripts and software tutorials are done on the cluster for best experience possible. 
      </>
    ),
  },
  {
    title: 'Centralized Hub for Both Jupyterhub and HPC Clusters',
    Svg: require('@site/static/img/icon_svg/2.svg').default,
    description: (
      <>
        First place to visit for everything HPC and JupyterHub related at UC Merced.
        Constantly updated with the latest news, information and resources.
      </>
    ),
  },
  {
    title: 'An Open-Source Collaborative Effort',
    Svg: require('@site/static/img/icon_svg/3.svg').default,
    description: (
      <>
       We are a tight knit group of researchers who are passionate about HPC and JupyterHub.
       We are always looking for new contributors to help us improve our documentation.
       Join us and chat with us on our{" "}
       <a href="https://ucmhpcclusters.slack.com" target="_blank" rel="noopener noreferrer">
         Slack workspace 
       </a> 

        or  open an issue on our {" "}
       <a href="https://github.com/amirayuyue/hpc_doc_new" target="_blank" rel="noopener noreferrer">
         GitHub page
       </a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
