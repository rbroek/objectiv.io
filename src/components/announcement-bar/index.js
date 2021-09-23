import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import { trackLink } from "@objectiv/tracker-browser";

function AnnouncementBar({children, title, content, ctaLink, ctaText}) {
  return (
    <div className={clsx(styles.announcement)}>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <Link 
          to={ctaLink}
          {...trackLink({ id: 'announcement-cta', text: ctaText, href: ctaLink })}
        >
          {ctaText}
        </Link>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
    </div>
  );
}

export default AnnouncementBar;
