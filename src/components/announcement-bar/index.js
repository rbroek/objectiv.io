import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function AnnouncementBar({children, title, content, ctaLink, ctaText}) {
  return (
    <div className={clsx(styles.announcement)}>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <a href="{ctaLink}">{ctaText}</a>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
    </div>
  );
}

export default AnnouncementBar;