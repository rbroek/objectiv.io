/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useRef, useEffect} from 'react';
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import { trackLink } from "@objectiv/tracker-browser";

export function DefaultNavbarItem({mobile = false, ...props}: Props): JSX.Element {
  // const mobileNavbarTracker = new ReactTracker(tracker, {
  //   location_stack: [makeOverlayContext({ id: 'hamburger-menu' })],
  // });
  // const desktopNavbarTracker = new ReactTracker(tracker, {
  //   location_stack: [makeSectionContext({ id: 'desktop-menu' })],
  // });

  if(mobile) {
    return <OriginalDefaultNavbarItem 
      {...props} 
      {...trackLink({ id: props.label, text: props.label, href: props.href ? props.href : props.to })}
    />
  }

  return (
    <OriginalDefaultNavbarItem 
      {...props} 
      {...trackLink({ id: props.label, text: props.label, href: props.href ? props.href : props.to })}
    />
  )
}

export default DefaultNavbarItem;
