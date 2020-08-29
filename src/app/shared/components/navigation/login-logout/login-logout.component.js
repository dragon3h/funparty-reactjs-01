import React from 'react';

import styles from './login-logout.module.scss';

const loginLogout = () => {
  return (
      <div className={styles["login-logout"]} data-test="login-logout-component">
        User
      </div>
  );
};

export default loginLogout;