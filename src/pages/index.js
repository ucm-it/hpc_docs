import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const pdfUrl = useBaseUrl('/files/CIRT_Mission-Vision_SOP.pdf');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* ✅ Plain text with PDF link */}
        <p className={clsx('hero__subtitle', styles.missionLink)}>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            CIRT Mission Vision Values
          </a>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/hpcdocs/HPC-clusters/policies">
            Research Computing Guidelines - 📀⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`UC Merced HPC & JupyterHub Documentation`}
      description="HPC & JupyterHub Documentation @ UC Merced">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
