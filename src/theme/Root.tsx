// noinspection JSUnusedGlobalSymbols

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker, setDefaultTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';
import { useRouteMatch } from "@docusaurus/router";

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

  const match = useRouteMatch("/docs/");

  useEffect(
    () => {
      if (trackerApplicationId && trackerDocsApplicationId && trackerEndPoint) {
        try {
          getTracker(trackerApplicationId);
          getTracker(trackerDocsApplicationId);
        } catch (error) {
          makeTracker({
            applicationId: trackerApplicationId as string,
            endpoint: trackerEndPoint as string,
            active: Cookiebot.consent.statistics,
            console: trackerConsoleEnabled ? console : undefined
          });
          makeTracker({
            applicationId: trackerDocsApplicationId as string,
            endpoint: trackerEndPoint as string,
            active: Cookiebot.consent.statistics,
            console: trackerConsoleEnabled ? console : undefined
          });
        }
        // Switch default tracker based on the route: docs vs website
        setDefaultTracker(match ? trackerDocsApplicationId : trackerApplicationId);
      }

      window.addEventListener('CookiebotOnAccept', function () {
        // Activate tracker, which sets statistics cookies
        getTracker().setActive(Cookiebot.consent.statistics);
      }, false);
    },
    [match]
  )
  
  return (
    <>
      {children}
    </>
  );
}

export default Root;