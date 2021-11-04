import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Octokit } from "@octokit/rest"
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { useAsync } from "react-async";

const createOctokit = ({gitHubSecretKey}) => {
  const ObOctokit = Octokit.plugin(retry, throttling);
  return new ObOctokit({
    auth: gitHubSecretKey,
    userAgent: 'Objectiv Documentation',
    log: console,
    throttle: {
      onRateLimit: (retryAfter, options) => {
        console.warn(
          `GitHub API: Request quota exhausted for request ${options.method} ${options.url}`
        );
  
        // Retry twice after hitting a rate limit error, then give up
        if (options.request.retryCount <= 2) {
          console.log(`GitHub API: Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onAbuseLimit: (retryAfter, options) => {
        // Do not retry, only log a warning
        console.warn(
          `GitHub API: Abuse detected for request ${options.method} ${options.url}`
        );
      },
    },
  });
}

const getReleaseChangeLog = async ({octokit, organization, repo, releaseId }) => {
  const res = await octokit.rest.repos.getRelease({
    owner: organization,
    repo: repo,
    release_id: releaseId
  });
  if (res.status != 200) throw new Error(res);
  return res.data;
}

function Changelog({releaseId}) {
  if (!releaseId) {
    console.error("No Release ID provided");
    return null;
  }

  const {siteConfig} = useDocusaurusContext();
  const {organizationName, projectName} = siteConfig;
  const {gitHubSecretKey} = siteConfig.customFields;

  const octo = createOctokit({gitHubSecretKey});

  const { data, error, isPending } = useAsync({ 
    promiseFn: getReleaseChangeLog, 
    octokit: octo,
    organization: organizationName,
    repo: projectName,
    releaseId: releaseId 
  })

  if (isPending) return "Loading...";
  if (error) {
    console.error(error);
    return `Something went wrong: ${error.message}`;
  }
  if (data) {
    const url = data.html_url;
    const published_date = new Date(data.published_at).toString();
    const name = data.name;
    const body = data.body;
    return (
      <div>
        <h2><a href={url}>{name}</a></h2>
        <h6>Published: {published_date}</h6>
        <div>{body}</div>
      </div>
    );
  }
}

export default Changelog;
