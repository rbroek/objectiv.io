import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  useTrackLinkClick,
  makeLinkContext,
} from '@objectiv/tracker-react';

function AnnouncementBar({children, title, content, ctaLink, ctaText}) {
  const trackCtaClick = useTrackLinkClick(makeLinkContext({ id: ctaLink, href: '/jobs', text: 'Check the vacancy' }));
  return (
    <div className={clsx(styles.announcement)}>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <Link 
          to={ctaLink}
          onClick={trackCtaClick}
        >
          {ctaText}
        </Link>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
    </div>
  );
}

export default AnnouncementBar;
