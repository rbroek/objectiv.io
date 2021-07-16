/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {
  makeLinkContext,
  trackLinkClick,
  useTracker
} from "@objectiv/tracker-react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalLogo from '@theme-original/Logo';

const Logo = (props) => {
  const tracker = useTracker();

  const {
    siteConfig: {
      themeConfig: {
        navbar: {
          logo = {
            src: '',
          },
        },
      },
    }
  } = useDocusaurusContext();
  const logoLink = useBaseUrl(logo.href || '/');

  return <OriginalLogo onClick={() => trackLinkClick(makeLinkContext({ id: 'logo', href: logoLink, text: logo.alt }), tracker)} {...props} />
};

export default Logo;
