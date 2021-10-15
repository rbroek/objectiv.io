import React from 'react';
import styles from './styles.module.css';

function YouTubeVideo({children, src}) {
    return (
      <div className={styles.videoWrapper}>
        <iframe src={src} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
}

export default YouTubeVideo;
