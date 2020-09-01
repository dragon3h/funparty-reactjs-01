import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './nav-links.module.scss';

const navLinks = () => {
  return (
      <ul className={styles['nav-links']}>
        <li>
          <NavLink to='/' exact>Home</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className={styles['nav-links__dropdown']}>
          <div className={styles['nav-links__btn-dropdown']}>Products
            {/*<FontAwesomeIcon icon={faCaretDown} />*/}
          </div>
          <div className={styles['nav-links__content']}>
            <NavLink to="/products">All Products</NavLink>
            <NavLink to="/products/bouncy-castles">Bouncy Castles</NavLink>
            <NavLink to="/products/mascots">Mascots</NavLink>
            <NavLink to="/products/games">Games</NavLink>
            <NavLink to="/products/food-machines">Food Machines</NavLink>
          </div>
        </li>
        <li>
          <NavLink to='/schedule'>Schedule</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      </ul>
      
  );
};

export default navLinks;