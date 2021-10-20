// noinspection JSUnusedGlobalSymbols

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker, setDefaultTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";

declare namespace cookiebot {
  class Cookiebot {
    consent: {
      statistics: boolean
    };
  }
}

declare const Cookiebot: cookiebot.Cookiebot;

function Root({children}) {
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  useEffect(
    () => {
      const match = useRouteMatch("/docs/");
      // Switch default tracker based on the route: docs vs website
      setDefaultTracker(match ? trackerDocsApplicationId : trackerApplicationId);
    
      if (trackerApplicationId && trackerEndPoint) {
        makeTracker({
          applicationId: trackerApplicationId as string,
          endpoint: trackerEndPoint as string,
          active: Cookiebot.consent.statistics,
          console: trackerConsoleEnabled ? console : undefined
        });
      }

      window.addEventListener('CookiebotOnAccept', function () {
        // Activate tracker, which sets statistics cookies
        getTracker().setActive(Cookiebot.consent.statistics);
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