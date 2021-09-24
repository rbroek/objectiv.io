import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AnnouncementBar from '../components/announcement-bar'
import KeepMePosted from '../components/keep-me-posted'
import styles from './styles.module.css';
import { trackElement, trackLink } from "@objectiv/tracker-browser";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const customFields = siteConfig.customFields;

  return (
    <Layout
      title=''
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <AnnouncementBar 
        title="We're Hiring!"
        content="Join our mission crew as a Senior Data Engineer."
        ctaLink='/jobs'
        ctaText='Check the vacancy'
      >
      </AnnouncementBar>
      <header 
        className={clsx('hero hero--primary', styles.heroBanner)}
        {...trackElement({id: 'header'})}
      >
        <div className={clsx('container', styles.heroContainer)}>
          <img
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            We're on a mission to create<br /> the ultimate iterative workflow<br /> for data scientists
          </h1>
          <div className={clsx(styles.heroSubTitleWrapper)}>
            <p className={clsx(styles.heroSubTitle)}>
            Build &amp; orchestrate reusable, stackable and interchangeable SQL models that embrace a 
            standardized event taxonomy. Straight from your Notebook.
            </p>
          </div>
          <div className={styles.heroKeepMePosted}>
            <p>In a repository near you this fall. Want to get notified?</p>
            <KeepMePosted />
          </div>
        </div>
      </header>
    </Layout>
  );
}
