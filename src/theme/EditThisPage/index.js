/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function EditThisPage({editUrl}) {
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
          <li><a href="https://discourse.objectiv.io" target="_blank">Discuss</a></li>
        </ul>
      </div>
      <div className={styles.docItemFooterProject}>
        <p className={styles.docItemFooterHeading}>The project</p>
        <ul>
          <li><a href="https://discourse.objectiv.io" target="_blank">Get help</a></li>
          <li><a href="https://github.com/objectiv" target="_blank">Submit feature request or bug report</a></li>
        </ul>        
      </div>
    </div>
  );
}
