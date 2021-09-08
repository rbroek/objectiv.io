/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import OriginalLogo from '@theme-original/Logo';
import {
  makeLinkContext,
  trackLinkClick,
  useTracker
} from "@objectiv/tracker-react";

const Logo = (props: Props): JSX.Element  => {
  const tracker = useTracker();

  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo = {src: ''}},
  } = useThemeConfig();
  const logoLink = useBaseUrl(logo.href || '/');

  return <OriginalLogo onClick={() => trackLinkClick(makeLinkContext({ id: 'logo', href: logoLink, text: logo.alt }), tracker)} {...props} />
};

export default Logo;
