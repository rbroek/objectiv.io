// noinspection JSUnusedGlobalSymbols

import { useRouteMatch } from "@docusaurus/router";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getOrMakeTracker, getTrackerRepository, setDefaultTracker } from "@objectiv/tracker-browser";
import React, { useEffect, useState } from 'react';

declare namespace cookiebot {
  class Cookiebot {
    consent: {
      statistics: boolean
    };
  }
}

declare const Cookiebot: cookiebot.Cookiebot;

function Root({children}) {
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(Cookiebot.consent.statistics ?? false);
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};
  const isDocs = useRouteMatch("/docs/") !== null;

  // Listen for 'CookiebotOnAccept' and if `Cookiebot.consent.statistics` changed, update state
  window.addEventListener('CookiebotOnAccept', function () {
    if (cookiebotStatisticsConsent !== Cookiebot.consent.statistics) {
      setCookiebotStatisticsConsent(Cookiebot.consent.statistics);
    }
  }, false);

  // This component can re-mount. Use `getOrMakeTracker` instead of `makeTracker`. It's safe to call multiple times.
  if (trackerEndPoint) {
    const trackerOptions = {
      endpoint: trackerEndPoint as string,
      console: trackerConsoleEnabled ? console : undefined
    }

    if (trackerApplicationId) {
      getOrMakeTracker({
        applicationId: trackerApplicationId as string,
        ...trackerOptions,
        active: cookiebotStatisticsConsent,
      });
    }

    if (trackerDocsApplicationId) {
      getOrMakeTracker({
        applicationId: trackerDocsApplicationId as string,
        ...trackerOptions,
        active: cookiebotStatisticsConsent,
      });
    }
  }

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instances
  useEffect(
    () => {
      if(cookiebotStatisticsConsent) {
        getTrackerRepository().activateAll();
      } else {
        getTrackerRepository().deactivateAll();
      }
    },
    [cookiebotStatisticsConsent] // execute every time `cookiebotStatisticsConsent` changes
  )

  // This Effect monitor the `isDocs` state and when it changes it switches the default Tracker instance
  useEffect(
    () => {
      setDefaultTracker((!isDocs ? trackerApplicationId : trackerDocsApplicationId) as string);
    },
    [isDocs] // execute every time `isDocs` changes
  )

  return (
    <>
      {children}
    </>
  );
}

export default Root;