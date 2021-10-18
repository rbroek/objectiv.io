/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { tagElement, tagLink } from '@objectiv/tracker-browser';

const LINK_CLASS_NAME = 'table-of-contents__link';

const TOC_HIGHLIGHT_PARAMS = {
  linkClassName: LINK_CLASS_NAME,
  linkActiveClassName: 'table-of-contents__link--active',
};

/* eslint-disable jsx-a11y/control-has-associated-label */
export function TOCHeadings({
  toc,
  isChild,
}): JSX.Element | null {
  if (!toc.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }
      >
      {toc.map((heading) => (
        <li 
          key={heading.id}>
          <Link
            to={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            {...tagLink({id: heading.id, href: "#"+heading.id, text: heading.value})}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <TOCHeadings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function TOC({toc}): JSX.Element {
  useTOCHighlight(TOC_HIGHLIGHT_PARAMS);
  return (
    <div 
      className={clsx(styles.tableOfContents, 'thin-scrollbar')}
      {...tagElement({id: 'toc'})}
    >
      <TOCHeadings toc={toc} isChild={false} />
    </div>
  );
}

export default TOC;
