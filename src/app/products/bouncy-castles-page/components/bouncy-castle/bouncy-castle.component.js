import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './bouncy-castle.module.scss';

import CustomButton from '../../../../shared/components/custom-button/custom-button.component';
import BouncyCastleDetails from '../bouncy-castle-details/bouncy-castle-details.component';

const BouncyCastle = ({bouncyCastle, history}) =>{
  
  const ShowDetails = (event) => {
    console.log(history);
    console.log(event.target.id);
    history.push('/products/bouncy-castle/3');
    // <Link to="/products/bouncy-castle/:id" component={BouncyCastleDetails}/>
  };
  
  return (
      <div className={styles['grid-body__row']}>
        <div className={styles['grid-body__cell']}>{bouncyCastle.code}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.name}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.img}</div>
        <div
            className={styles['grid-body__cell']}>Category: {bouncyCastle.category}</div>
        <div className={styles['grid-body__cell']}>{bouncyCastle.description}</div>
        <div
            className={styles['grid-body__cell']}>{bouncyCastle.restrictions.minAge} - {bouncyCastle.restrictions.maxAge}</div>
        <div
            className={styles['grid-body__cell']}>{bouncyCastle.restrictions.maxQuantity}</div>
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
  
}

export default BouncyCastle;
