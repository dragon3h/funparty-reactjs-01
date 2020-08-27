import React from 'react';

import './login-register.module.scss';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

const loginRegister = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};

export default loginRegister;