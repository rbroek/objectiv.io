/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import type {Props} from '@theme/EditThisPage';
import IconEdit from '@theme/IconEdit';
import {ThemeClassNames} from '@docusaurus/theme-common';

import { tagLink, tagElement } from "@objectiv/tracker-browser";

export default function EditThisPage({editUrl}: Props): JSX.Element {
  return (
    <div 
      {...tagElement({id: 'edit-this-page'})}
    >
      <Link
        to={editUrl}
        target="_blank"
        {...tagLink({ id: 'edit-this-page', text: 'Edit this page', href: editUrl })}
        rel="noreferrer noopener"
        className={ThemeClassNames.common.editThisPage}>
        <IconEdit />
        <Translate
          id="theme.common.editThisPage"
          description="The link label to edit the current page">
          Edit this page
        </Translate>
      </Link>
    </div>
  );
}
