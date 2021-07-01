import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import KeepMePosted from '../components/keep-me-posted';
import styles from './styles.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <div className={clsx(styles.announcement)}>
        <img src="/img/icons/icon-star.svg" />
          <strong>We’re Hiring!</strong> Are you mad about data science &amp; engineering? <a href="/jobs">Check out the 
          vacancy</a>!
        <img src="/img/icons/icon-star.svg" />
      </div>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContainer)}>
          <img 
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            The Open Source Analytics Pipeline<br/>
            Built For The Data Scientist
          </h1>
          <p className={clsx(styles.heroSubTitle)}>
            Build &amp; orchestrate reusable, stackable and interchangeable models <br />
            that embrace a standardized event taxonomy. Straight from your Jupyter notebook.
          </p>
          <div className={styles.heroKeepMePosted}>
            <p>In a repository near you after summer. Want to get notified?</p>
            <KeepMePosted />
          </div>
        </div>
      </header>
    </Layout>
  );
}
