import React from 'react';

import styles from './orders.module.scss';
import Order from '../order/order.component';

const Orders = () => {
  return (
      <div>
        <h1>Orders</h1>
        <Order />
      </div>
  );
};

export default Orders;