/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useRouteMatch } from "@docusaurus/router";
import Translate from '@docusaurus/Translate';

import type {Props} from '@theme/EditThisPage';

import Link from '@docusaurus/Link';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

export default function EditThisPage({editUrl}: Props): JSX.Element {
  // if in the 'modeling' section, edit the source code that is used to auto-generate the docs instead
  let editThisPageUrl = useRouteMatch("/modeling") !== null ? 
    'https://github.com/objectiv/objectiv-analytics/tree/main/bach' : editUrl;

  return (
    <div 
      {...tagElement({id: 'edit-this-page'})}
    >
      <ul>
        <li>
          <Link
            to={editThisPageUrl}
            target="_blank"
            rel="noreferrer noopener">
            <Translate
              id="theme.common.editThisPage"
              description="The link label to edit the current page">
              Suggest an edit
            </Translate>
          </Link>
        </li>
        <li>
          <Link
            to={'https://discourse.objectiv.io'}
            target="_blank"
            {...tagLink({ id: 'get-help', text: 'Get help', href: 'https://discourse.objectiv.io' })}
          >
            Get help on Slack
          </Link>
        </li>
        <li>
          <Link
            to={'https://github.com/objectiv/objectiv-analytics'}
            target="_blank"
            {...tagLink({ id: 'submit-idea-or-bug-report', text: 'Submit idea or bug report', href: 'https://github.com/objectiv/objectiv-analytics' })}
          >
            Request feature or report issue
          </Link>
        </li>
        <li>
          <Link
            to={'https://github.com/objectiv/objectiv-analytics/projects/2'}
            target="_blank"
            {...tagLink({ id: 'roadmap', text: 'See the Roadmap', href: 'https://github.com/objectiv/objectiv-analytics/projects/2' })}
          >
            See the Roadmap
          </Link>
        </li>
      </ul>
    </div>
  );
}