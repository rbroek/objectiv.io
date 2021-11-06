import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getOrMakeTracker, getTrackerRepository, windowExists } from "@objectiv/tracker-browser";
import React, { useEffect, useState, useLayoutEffect } from 'react';

declare namespace cookiebot {
  class Cookiebot {
    consent: {
      statistics: boolean
    };
  }
}

declare const Cookiebot: cookiebot.Cookiebot;

const registerCookiebotEventListeners = (callback: EventListenerOrEventListenerObject) => {
  // Skip if we are in SSR
  if (!windowExists()) {
    return;
  }

  window.addEventListener('CookiebotOnAccept', callback, false);
  window.addEventListener('CookiebotOnDecline', callback, false);
}

const cookiebotConsentStatistics = (): boolean => {
  // Skip if we are in SSR
  if (!windowExists()) {
    return false;
  }

  return Cookiebot.consent.statistics ?? false;
}

function Root({children}) {
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(cookiebotConsentStatistics());
  const { siteConfig } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Listen for 'CookiebotOnAccept' and if `Cookiebot.consent.statistics` changed, update state
  registerCookiebotEventListeners(function () {
    if (cookiebotStatisticsConsent !== cookiebotConsentStatistics()) {
      setCookiebotStatisticsConsent(cookiebotConsentStatistics());
    }
  })

  // This component can re-mount. Use `getOrMakeTracker` instead of `makeTracker`. It's safe to call multiple times.
  if (trackerEndPoint) {
    // Execute only if we are not in SSR
    if (windowExists()) {
      const trackerOptions = {
        endpoint: trackerEndPoint as string,
        console: trackerConsoleEnabled ? console : undefined
      }

      if (trackerDocsApplicationId) {
        getOrMakeTracker({
          applicationId: trackerDocsApplicationId as string,
          ...trackerOptions,
          active: cookiebotStatisticsConsent,
        });
      }
    }
  }

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instances
  useEffect(
    () => {
      // Skip if we are in SSR
      if (!windowExists()) {
        return;
      }
      if(cookiebotStatisticsConsent) {
        getTrackerRepository().activateAll();
      } else {
        getTrackerRepository().deactivateAll();
      }
    },
    [cookiebotStatisticsConsent] // execute every time `cookiebotStatisticsConsent` changes
  )

  // Scroll to the right anchor if it's in the URL
  useLayoutEffect ( () => {
    const location = window.location;
    // the id of the element is the part after # in the url
    const id = location.toString().split('#')[1];

    const element = document.getElementById(id);

    // if we can find the element, try to scroll to it
    if (element) {
        element.scrollIntoView();
    }
  });  

  return (
    <>
      {children}
    </>
  );
}

export default Root;