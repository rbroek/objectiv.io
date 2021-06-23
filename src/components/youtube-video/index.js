import React from 'react';
import styles from './styles.module.css';

function YouTubeVideo({children, src}) {
    return (
      <div className={styles.videoWrapper}>
        <iframe src={src} frameborder="0" allowfullscreen></iframe>
      </div>
    )
}

export default YouTubeVideo;
