/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { tagElement } from '@objectiv/tracker-browser';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import React from 'react';

export default function DocSidebar(props): JSX.Element {
  return (
    <>
      <div {...tagElement({id: 'docs-sidebar'})}>
        <OriginalDocSidebar {...props} />
      </div>
    </>
  );
}
