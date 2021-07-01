import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Jobs() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.jobsContainer)}>
          <h1>Currently Hiring: Full Stack Data Nerd</h1>
            With Objectiv, we’re building the open-source analytics pipeline for the data scientist. 
            <h2> <img width="32px" src='/img/startup.svg' />  Our mission</h2>
            After having crunched analytics data in many shapes and forms, we ran into the same issues over and over again:
            <ul>
              <li>Because the underlying analytics data is not standardized, data science is doing way too much cleaning, transforming, and exploration work every time they start developing a model. </li>
              <li>Once a model is finished, it still requires maintenance, as the analytics data changes over time. </li>
              <li>Data science teams are inventing the same wheel; building comparable models, but not being able to exchange, extend and collaborate.</li>
            </ul>

            These things have been fixed to a great extent for engineers. Programming languages that dictate standardization and endless integrated workflow tooling to choose from. We are bringing these practices to data science land when it comes to analytics.

            <h2> <img width="32px" src='/img/cake.svg' />  So, where is the product?</h2>
            In a repository near you after summer. Our team is working hard to get the initial version ready. Then we will continue to develop in public.

            <h2> <img width="32px" src='/img/cap.svg' />  That is a weird job title!</h2>
            Well, to start we don’t really get excited about titles. But more importantly; you will be joining an early team of 10 analytics nerds that are together building a great product. The lines between data science, data engineering, frontend and ops are just very blurry in our team, as everyone is taking multiple parts of that. 

            <h2> <img width="32px" src='/img/id-card.svg' />  About you</h2>
            This role is at the intersection of data science and data engineering. What we are looking for in this role:
            <ul>
              <li>You know your way in Python &amp; SQL, but also get excited about data engineering tech like dbt. </li>
              <li>You have at least 5 years of working experience in a data science / data engineering role and ideally worked with analytics data.</li>
              <li>You have a master’s degree in engineering, physics or something related.</li>
              <li>You have a can-do attitude. Even when the problem seems huge, you think of solutions first.</li>
              <li>You are fluent in English and live within 2 hours of travel from Utrecht, The Netherlands.</li>
            </ul>

            <h2> <img width="32px" src='/img/basketball.svg' />  Our work setup</h2>
            Our team meets every Tuesday in Utrecht. This is the day where we do all the team updates, syncs and make decisions to move forward together. The rest of the week everyone works remote and we limit meetings to standups and syncs that can not wait.

            We don’t care when work is being done, we care about what is being done. So our team is used to taking exercise breaks or spending family time during the day and then getting stuff done in the evening. Things like that.

            On a regular basis we meet for a team offsite and make sure there is always something to celebrate together.

            <h2> <img width="32px" src='/img/premium.svg' />  What we offer</h2>
            A role in a super driven and experienced team that is on a mission. Our team has over a decade of experience in analytics and has made it their core focus to build the best possible workflow for data science. Thanks to the support of Fly Ventures & LocalGlobe we can focus on the long-term and take the time to get the product just right. They were also the early backers of startups like Figma, Tessian and Robinhood.

            Early days in the product, where you will be able to leave your mark in the open-source community for data science. Our goals are very ambitious and this will allow you to grow with the company. 

            Like what you have read and think you meet the mark? Then <a href="mailto:jobs@objectiv.io">we'd love to hear from you</a>.
        </div>
      </header>
    </Layout>
  );
}
