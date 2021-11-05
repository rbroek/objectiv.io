import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

export default function Jobs() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  return (
    <Layout
      title='Jobs'
      description={siteConfig?.tagline}>
      <header 
        className={clsx('hero hero--primary', styles.jobsHeader)}
        {...tagElement({id: 'header'})}
      >
        <div className={clsx('container', styles.jobsContainer)}>
          <h1>Currently Hiring: Senior Software Engineer</h1>
        </div>
      </header>
      <main {...tagElement({id: 'main'})}>
        <div className={clsx('container', styles.jobsContainer)}>
          <p>It’s our mission to create the ultimate, SQL model based, experimental workflow for data science. 
            Let’s break that down.</p>
          <p>Building a great model as a data scientist happens in experimental iterations. That’s why so 
            many of us live in Notebooks. The analytics data that you work on clearly does not fit a local 
            machine, so it’s either working with samples, or spinning up complex data lakes. We believe there 
            is so much development going on in the SQL space, that today it’s possible to create a single 
            interactive &amp; experimental environment for the data scientist to build models, while 
            iterating on the full dataset.</p>
          <p>We are building a workflow where the data scientist can perform any operation or basic model on 
            a full SQL stored dataset, and get interactive results in a dataframe in a Notebook. Then, 
            easily go back a few steps to any point in the DAG, apply some other operations or models again, 
            and with a single click get the results back in a dataframe. From that point, have the full 
            freedom to add any machine learning model on that.</p>
          <p>To make this all happen, we have started our journey in the space of product analytics. Creating 
            a standardized taxonomy and validation that carries through a whole pipeline that ends all the 
            way in the notebook. We see product analytics as a stepping stone in a much larger ambition. To 
            create the dream experimental modelling workflow for data science.</p>

          <h2><img width="32px" src='/img/icons/icon-cake.svg' alt='The project'/>The project</h2>
          <p>Objectiv is open-source and we are developing the project in public. Our initial version was just 
            released, to showcase how we think about solving the hard parts of this challenge. It’s early days 
            and there is so much to do, this is where you possibly come in :-).</p>

          <h2><img width="32px" src='/img/icons/icon-cap.svg' alt='The team' /> The team</h2>
          <p>You will be joining an early team of 10 analytics enthusiasts that are together building a great 
            product. The lines between data science, data engineering, frontend and ops are quite blurry in 
            our team, as everyone is taking multiple parts of that.</p>

          <h2><img width="32px" src='/img/icons/icon-id-card.svg' alt='About you' /> About you</h2>
          <p>This role is at the intersection of engineering &amp; data science. What we are looking for in 
            this role:</p>
          <ul>
            <li>You have at least 5 years of working experience in a software engineering role, and are an 
              expert in Python.</li>
            <li>You have strong affinity with the data science side of things; worked actively in notebooks, 
              set up analytics pipelines, created models from scratch, etc.</li>
            <li>You get excited about data engineering tech like dbt or Meltano.</li>
            <li>You have a master’s degree in software engineering, math, physics, data science, or something 
              related.</li>
            <li>You have a can-do attitude. Even when the problem seems huge, you're able to chop it up and 
              solve the chunks.</li>
            <li>You are fluent in English.</li>
            <li>This is a remote role in EU timezone with regular team offsites in The Netherlands.</li>
          </ul>

          <h2><img width="32px" src='/img/icons/icon-video-call.svg' alt='Our work setup' /> Our work setup</h2>
          <p>Our team meets in Utrecht every Tuesday. This is the day where we do all the team updates, 
            syncs, and make decisions to move forward together. The rest of the week everyone works remotely 
            and we limit meetings to standups and syncs that cannot wait.</p>
          <p>We don’t care when work is being done, we care about what is being done. So our team is used to 
            taking exercise breaks or spending family time during the day and then getting stuff done in the 
            evening. Things like that.</p>
          <p>On a regular basis we meet for a team offsite and make sure there is always something to 
            celebrate together.</p>

          <h2><img width="32px" src='/img/icons/icon-premium.svg' alt='What we offer' /> What we offer</h2>
          <p>A role in a super driven and experienced team that is on a mission. Our team has over a decade 
            of experience in analytics and has made it their core focus to build the best possible workflow 
            for data science. Thanks to the support of &nbsp; 
            <Link 
              to="https://www.fly.vc/"
              {...tagLink({ id: 'vc-fly', text: 'Fly Ventures', href: 'https://www.fly.vc/' })}>
              Fly Ventures
            </Link> &amp; &nbsp; 
            <Link 
              to="https://localglobe.vc/"
              {...tagLink({ id: 'vc-localglobe', text: 'LocalGlobe', href: 'https://localglobe.vc/' })}>
              LocalGlobe
            </Link> we can focus on the long-term and take the 
            time to get the product just right. They were also the early backers of startups like Figma, 
            Tessian and Robinhood.</p>
          <p>Early days in the product, where you will be able to leave your mark in the open-source 
            community for data science. Our goals are very ambitious and this will allow you to grow with the 
            company. </p>
          <p>Like what you have read and think you meet the mark? Then&nbsp;
          <Link
            to={'mailto:jobs@objectiv.io'}
            {...tagLink({ id: 'hear-from-you', text: "we'd love to hear from you", 
              href: 'mailto:jobs@objectiv.io' })}>
            we'd love to hear from you
          </Link>
          .</p>
        </div>
      </main>
    </Layout>
  );
}
