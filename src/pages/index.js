import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AnnouncementBar from '../components/announcement-bar'
import IconHeader from '@site/src/components/icon-header';
import GitHubButton from 'react-github-btn'
import styles from './styles.module.css';
import {
  makeLinkContext,
  useTrackLinkClick
} from '@objectiv/tracker-react';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title=''
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <AnnouncementBar 
        title="We're Hiring!"
        content="Join our mission crew as a Data Scientist / Engineer."
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

          <p className={clsx(styles.heroSubTitle)}>
            what we’re currently working on:
          </p>
          <div className={clsx(styles.usps)}>
            <div>
              <img
                className={clsx(styles.uspIcon)}
                src={useBaseUrl("img/icons/icon-taxonomy.svg")}
                alt="Taxonomy" /><br />
              <strong>A common taxonomy for analytics</strong><br />
              so models can be shared, <br />
              reused, stacked and interchanged.
              <div className={clsx(styles.uspArrowUp)}>
                <img
                  src={useBaseUrl("img/usp-arrow-up.svg")}
                  alt="to" />
              </div>
            </div>
            <div>
              <img
                className={clsx(styles.uspIcon)}
                src={useBaseUrl("img/icons/icon-debug.svg")}
                alt="Debugging" /><br />
              <strong>Debuggable tracking instrumentation</strong><br />
              to ensure clean, model-ready data <br />
              is being collected at entry point
              <div className={clsx(styles.uspArrowDown)}>
                <img
                  src={useBaseUrl("img/usp-arrow-down.svg")}
                  alt="to" />
              </div>
            </div>
            <div>
            <img
                className={clsx(styles.uspIcon)}
                src={useBaseUrl("img/icons/icon-modeling-workflow.svg")}
                alt="Workflow" /><br />
              <strong>An iterative modeling workflow</strong><br />
              that closes the gap between <br />
              experimentation and production
            </div>
          </div>

          <div className={clsx(styles.heroOutro)}>
            Objectiv is open source and we’re building it in public. Check out&nbsp; 
            <Link to="https://github.com/objectiv/">
              GitHub
            </Link> for the latest release, or join our&nbsp;
            <Link to="https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg">
              Slack channel
            </Link> to stay in the loop.
          </div>

        </div>
      </header>
      <main className={clsx('body-large')}>
        <div className={clsx(styles.pageSection,styles.pageSectionBlue)}>
          <div className={clsx("container", styles.contentContainer, styles.intro)}>
            <img
              className={clsx(styles.introTitleIcon)}
              src={useBaseUrl("img/icons/icon-data-scientist-thinking.svg")}
              alt="Data Scientist thinking..." /><br />
            <p className={clsx(styles.introTitle)}>
              Data teams often have very similar goals, <br />
              yet their analytics data and models all look different...
            </p>
            <p>There is no common way to do data science. There are plenty of great purpose-built analytics tools, but teams are still on their own when it comes to defining how to structure, collect, groom and model data. This leads to the creation of lots of proprietary taxonomies &amp; models that all have the same intent.</p>
            <p className={clsx(styles.introTeaser)}>
              <img
                className={clsx(styles.introCaretDown)}
                src={useBaseUrl("img/caret-down.svg")}
                alt="Down" />
              Find out what we want to do about it
              <img
                className={clsx(styles.introCaretDown)}
                src={useBaseUrl("img/caret-down.svg")}
                alt="Down" />
            </p>
          </div>
        </div>
{/* 
        <div className={clsx(styles.pageSection,styles.pageSectionGreen)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="Collect well-structured, high-quality data" 
              subTitle="Tracking"
              iconName="diamond">
            </IconHeader>
            <p>In order to get the best possible data right at the beginning of the pipeline, Our tracker comes with a standardized event taxonomy. It consists of predefined properties for each common event type and carries the analysis requirements for effective modeling on the data science side.</p>
            <p>The taxonomy enables validation through the pipeline and is extensible to allow your not-so-typical events to be tracked as well. It is consistent by nature, making your tracking instrumentation less prone to errors when your product changes over time. Tools that enable you to easily set up and test your instrumentation are included.</p>
            <p>For more details on our tracker and taxonomy, have a look at <Link to="/docs">the docs</Link>.</p>
          </div>
        </div> */}

      </main>
    </Layout>
  );
}
