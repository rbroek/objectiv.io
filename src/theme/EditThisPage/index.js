/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {
  useTracker,
  makeLinkContext,
  trackLinkClick
} from '@objectiv/tracker-react';

export default function EditThisPage({editUrl}) {
  const tracker = useTracker();
  return (
    <div className={styles.docItemFooter}>
      <div className={styles.docItemFooterPage}>
        <p className={styles.docItemFooterHeading}>
          This page
        </p>
        <ul>
          <li>
            <a href={editUrl} target="_blank" rel="noreferrer noopener">
              <Translate
                id="theme.common.editThisPage"
                description="The link label to edit the current page">
                Suggest an edit
              </Translate>
            </a>
          </li>
          <li>
            <Link
              to={'https://discourse.objectiv.io'}
              target="_blank"
              onClick={() => trackLinkClick(makeLinkContext({ id: 'discuss', href: 'https://discourse.objectiv.io', text: "Discuss" }), tracker)}
            >
              Discuss
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.docItemFooterProject}>
        <p className={styles.docItemFooterHeading}>The project</p>
        <ul>
          <li>
            <Link
              to={'https://discourse.objectiv.io'}
              target="_blank"
              onClick={() => trackLinkClick(makeLinkContext({ id: 'get-help', href: 'https://discourse.objectiv.io', text: "Get help" }), tracker)}
            >
              Get help
            </Link>
          </li>
          <li>
            <Link
              to={'https://github.com/objectiv/objectiv-analytics'}
              target="_blank"
              onClick={() => trackLinkClick(makeLinkContext({ id: 'get-help', href: 'https://github.com/objectiv/objectiv-analytics', text: "Submit idea or bug report" }), tracker)}
            >
              Submit idea or bug report
            </Link>
          </li>
        </ul>        
      </div>
    </div>
  );
}
