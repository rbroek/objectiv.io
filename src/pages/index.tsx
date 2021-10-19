import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { tagElement } from "@objectiv/tracker-browser";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import AnnouncementBar from '../components/announcement-bar'
import KeepMePosted from '../components/keep-me-posted'
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  return (
    <Layout
      title=''
      description={siteConfig?.tagline}> {/*Description will go into a meta tag in <head />*/}
      <AnnouncementBar 
        title="We're Hiring!"
        content="Join our mission crew as a Data Scientist / Engineer."
        ctaLink='/jobs'
        ctaText='Check the vacancy'
      />
      <header
        className={clsx('hero hero--primary', styles.heroBanner)}
        {...tagElement({id: 'header'})}
      >
        <div className={clsx('container', styles.heroContainer)}>
          <img
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            We're on a mission to create<br /> the ultimate workflow<br /> for data scientists
          </h1>
          <div className={clsx(styles.heroSubTitleWrapper)}>
            <p className={clsx(styles.heroSubTitle)}>
              Objectiv is a data collection &amp; modeling library that puts the data scientist first. <br />
              Embrace a common taxonomy. Collect better data. Model more effectively.
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
