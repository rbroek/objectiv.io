import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import KeepMePosted from '../components/keep-me-posted';
import AnnouncementBar from '../components/announcement-bar'
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title=''
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <AnnouncementBar 
        title="We're Hiring!"
        content="Join our mission crew as a Data Infra Scientist / Data Workflow Engineer."
        ctaLink='/jobs'
        ctaText='Check the vacancy'
      >
      </AnnouncementBar>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContainer)}>
          <img
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            We're on a mission to create the ultimate iterative workflow for data scientists
          </h1>
          <div className={clsx(styles.heroSubTitleWrapper)}>
            <p className={clsx(styles.heroSubTitle)}>
            Build &amp; orchestrate reusable, stackable and interchangeable SQL models that embrace a
standardized event taxonomy. Straight from your Notebook.
            </p>
          </div>
          <div className={styles.heroKeepMePosted}>
            <p>In a repository near you after summer. Want to get notified?</p>
            <KeepMePosted />
          </div>
        </div>
      </header>
    </Layout>
  );
}
