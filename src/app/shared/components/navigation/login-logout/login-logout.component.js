import React from 'react';
import {NavLink} from 'react-router-dom';
import {auth} from '../../../../firebase/firebase.utils';

import styles from './login-logout.module.scss';

const loginLogout = () => {
  return (
      <div className={styles["login-logout"]} data-test="login-logout-component">
        <div className={styles['nav-links__btn-dropdown']}>User
          {/*<FontAwesomeIcon icon={faCaretDown} />*/}
        </div>
        <div className={styles['nav-links__content']}>
          <NavLink to="/user-profile">Profile</NavLink>
          <div onClick={() => auth.signOut()}>Logout</div>
        </div>
      </div>
  );
};

export default loginLogout;