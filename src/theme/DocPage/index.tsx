import OriginalDocPage from '@theme-original/DocPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  ReactTracker,
  TrackerContextProvider,
  useTrackApplicationLoaded
} from "@objectiv/tracker-react";
import React from 'react';

export default function DocPage(props: Props): JSX.Element {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint } = siteConfig.customFields;
  const docsTracker = new ReactTracker({ applicationId: trackerDocsApplicationId, endpoint: trackerEndPoint });
  useTrackApplicationLoaded(docsTracker);
  
  return (
    <TrackerContextProvider tracker={docsTracker}>
      <OriginalDocPage {...props} />
    </TrackerContextProvider>
    
  );
}
