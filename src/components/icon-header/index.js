import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function IconHeader({children, iconName, title, subTitle}) {
  return (
    <div>
      {subTitle && <div className={styles.subTitle}><h2>{subTitle}</h2></div>}
      <div className={styles.titleWrapper}>
        <div className={styles.icon}>
          <img src={useBaseUrl('img/icons/icon-'+iconName+'.svg')} alt={iconName+" icon"} />
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default IconHeader;
