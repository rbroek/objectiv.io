import React from 'react';
import Popup from 'reactjs-popup';
import Styled from 'styled-components';
import 'reactjs-popup/dist/index.css';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './styles.module.css';

function Lightbox({src, title, caption, size='l', type='lightbox'}) {
  // noinspection JSUnresolvedVariable - doesn't work for :local statements
  let sizeClass = styles.lightboxImageWidthLarge;
  switch(size) {
    case 'm': {
      // noinspection JSUnresolvedVariable - doesn't work for :local statements
      sizeClass = styles.lightboxImageWidthMedium;
      break;
    }
    case 's': {
      // noinspection JSUnresolvedVariable - doesn't work for :local statements
      sizeClass = styles.lightboxImageWidthSmall;
      break;
    }
    case 'xs': {
      // noinspection JSUnresolvedVariable - doesn't work for :local statements
      sizeClass = styles.lightboxImageWidthExtraSmall;
      break;
    }
  }
  
  // noinspection HtmlUnknownAttribute - closetext and opentext are not actual attributes
  const lbImage = <img
    src={src}
    alt={title}
    className={sizeClass}
    closetext="Unzoom Image"
    opentext="Zoom Image"
  />;
  // noinspection JSUnresolvedVariable - doesn't work for :local statements
  const lbCaption = caption ? <p className={styles.caption}>{caption}</p> : '';

  // TODO: Zoom to full size of image, instead of to what the class applied to it specifies
  if (type==="zoom")
    {
      // noinspection JSUnresolvedVariable
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
    }
  else
    const StyledPopup = Styled(Popup)`
      &-content {
        width: auto;
        max-width: 90%;
        max-height: 90%;
        -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
      }
    `;
    // noinspection JSUnresolvedVariable
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
