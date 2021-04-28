import React from 'react';

import styles from './styles.module.css';

//TODO: Add lightbox effect
function Lightbox({children, src, title, caption, size}) {
  let sizeClass = styles.lightboxImageWidthLarge;
  switch(size) {
    case 'xs': {
      sizeClass = styles.lightboxImageWidthExtraSmall;
      break;
    }
    case 's': {
      sizeClass = styles.lightboxImageWidthSmall;
      break;
    }
    case 'm': {
      sizeClass = styles.lightboxImageWidthMedium;
      break;
    }
  }
  return (
    <div className={styles.lightbox}>
      <a href={src} title={title} target="_blank">
        <img
            src={src}
            alt={title}
            className={sizeClass}
        />
      </a>
      {caption && <p className={styles.caption}>Figure: {caption}</p>}
    </div>
  );
}

export default Lightbox;
