import React from 'react';
import Popup from 'reactjs-popup';
import Styled from 'styled-components';
import 'reactjs-popup/dist/index.css';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './styles.module.css';

function Lightbox({children, src, title, caption, size='l', type='lightbox'}) {
  let sizeClass = styles.lightboxImageWidthLarge;
  switch(size) {
    case 'm': {
      sizeClass = styles.lightboxImageWidthMedium;
      break;
    }
    case 's': {
      sizeClass = styles.lightboxImageWidthSmall;
      break;
    }
    case 'xs': {
      sizeClass = styles.lightboxImageWidthExtraSmall;
      break;
    }
  }
  
  const lbImage = <img
    src={src}
    alt={title}
    className={sizeClass}
    closetext="Unzoom Image"
    opentext="Zoom Image"
  />;
  const lbCaption = caption ? <p className={styles.caption}>{caption}</p> : '';

  // TODO: Zoom to full size of image, instead of to what the class applied to it specifies
  if (type=="zoom")
    return (
      <div>
        <Zoom zoomMargin={0}>
          <div className={styles.lightbox}>
            {lbImage}
          </div>
        </Zoom>
        {lbCaption}
      </div>
    )
  else
    var StyledPopup = Styled(Popup)`
      &-content {
        width: auto;
        max-width: 90%;
        max-height: 90%;
        -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
      }
    `;
    return (
      <StyledPopup trigger={<div className={styles.lightbox}>{lbImage}{lbCaption}</div>} modal>
        <img
            src={src}
            alt={title}
        />
      </StyledPopup>
    )
}

export default Lightbox;
