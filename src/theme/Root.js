import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker, getTrackerRepository } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig.customFields;
  let match = useRouteMatch("/docs/");
  if (match) {
    // TODO: switch default tracker to docs tracking
    getTrackerRepository().setDefault(trackerDocsApplicationId);
  } else {
    getTrackerRepository().setDefault(trackerApplicationId);
  }

  useEffect(
    () => {
      let trackerActive = false;
      if (Cookiebot.consent.statistics) {
        trackerActive = true;
      }
      makeTracker({
        applicationId: trackerApplicationId,
        endpoint: trackerEndPoint,
        active: trackerActive,
        console: trackerConsoleEnabled ? console : undefined
      });

      window.addEventListener('CookiebotOnAccept', function (e) {
        if (Cookiebot.consent.statistics) {
          // Activate tracker, which sets statistics cookies
          getTracker().setActive(true);
          console.log("Objectiv Tracker activated");
        } 
      }, false);

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
