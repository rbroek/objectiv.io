/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { TrackerSection } from "@objectiv/tracker-react";
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';

export function DefaultNavbarItem({mobile = false, ...props}) {
  if(mobile) {
    return <TrackerSection id={"hamburger-menu"}>
      <OriginalDefaultNavbarItem {...props} />
    </TrackerSection>
  }

  return (
    <TrackerSection id={"desktop-menu"}>
      <OriginalDefaultNavbarItem {...props} />
    </TrackerSection>
  );
}

export default DefaultNavbarItem;
