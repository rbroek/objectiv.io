// noinspection JSUnusedGlobalSymbols

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';

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
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  useEffect(
    () => {
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
