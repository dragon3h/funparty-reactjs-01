import React from 'react';

import './logo.module.scss';
import Logo from '../../../../assets/icons/funparty-rentals.png';
import styles from '../main-header/main-header.module.scss';

const logo = () => {
  return (
      <div className={styles["main-header__logo"]}>
        <img src={Logo} className={styles["main-header__logo-img"]} alt="logo" height="50px" width="auto" />
      </div>
  );
};

export default logo;