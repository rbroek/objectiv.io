import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function AnnouncementBar({children, title, content, ctaLink, ctaText}) {
  return (
    <div className={clsx(styles.announcement)}>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <Link 
          to="{ctaLink}"
          onClick={useTrackLinkClick(makeLinkContext({ id: 'home', href: '/jobs', text: 'Check the vacancy' }))}
        >
          {ctaText}
        </Link>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
    </div>
  );
}

export default AnnouncementBar;