import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { makeTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig.customFields;

  useEffect(
    () => {
      makeTracker({
        applicationId: trackerApplicationId,
        endpoint: trackerEndPoint,
        console: trackerConsoleEnabled ? console : undefined
      });
    },
    [] // no dependencies => no side effects on re-render
  )
  
  return (
    <>
      {children}
    </>
  );
}

export default Root;
