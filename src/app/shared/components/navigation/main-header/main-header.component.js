import React from 'react';

import styles from './main-header.module.scss';

const MainHeader = (props) => {
  return (
      <header className={styles["main-header"]} data-test="main-header-component">
        {props.children}
      </header>
  );
};

export default MainHeader;
