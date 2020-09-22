import React, {Component} from 'react';

import styles from './bouncy-castle.module.scss';

import CustomButton from '../../../../shared/components/custom-button/custom-button.component';

const BouncyCastle = ({bouncyCastle, history}) => {
  
  const ShowDetails = (event) => {
    history.push(`/products/bouncy-castle/${event.target.id}`);
  };
  
  return (
      <div className={styles['grid-body__row']}>
        <div className={styles['grid-body__cell']}>{bouncyCastle.code}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.name}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.img}</div>
        <div className={styles['grid-body__cell']}>Category: {bouncyCastle.category}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.description}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.minAge} - {bouncyCastle.maxAge}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.maxQuantity}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.isWater ?
            'Yes' :
            'No'}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.rentPrice} CAD</div>
        <div className={`${styles['grid-body__cell']} action`}>
          <CustomButton onClick={ShowDetails} id={bouncyCastle.id}>
            Details
          </CustomButton>
        </div>
      </div>
  );
  
};

export default BouncyCastle;
