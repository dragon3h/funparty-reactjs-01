import React from 'react';

import styles from './login-register.module.scss';
import Login from '../login/login.component';
import Register from '../register/register.component';

const loginRegister = () => {
  return (
    <div className={styles["login-register"]}>
      <Login/>
      <Register/>
    </div>
  );
};

export default loginRegister;