import React, {Component} from 'react';

import MainHeader from '../main-header/main-header.component';
import Logo from '../logo/logo.component';
import NavLinks from '../nav-links/nav-links.component';
import LoginLogout from '../login-logout/login-logout.component';

import styles from './main-navigation.module.scss';

const MainNavigation = () => {
  return (
      <MainHeader data-test="main-header-component">
        <Logo/>
        <nav className={styles['main_header__main-navigation']} data-test="main-navigation-component">
          <NavLinks/>
        </nav>
        <LoginLogout/>
      </MainHeader>
  );
};

export default MainNavigation;