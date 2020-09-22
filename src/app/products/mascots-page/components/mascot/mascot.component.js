import React from 'react';

import styles from './mascot.module.scss';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';

const Mascot = ({mascot, history}) => {
  const ShowDetails = (event) => {
    history.push(`/products/mascot/${event.target.id}`);
  };
  
  return (
      <div className={styles['grid-body__row']}>
        <div className={styles['grid-body__cell']}>{mascot.code}</div>
        <div className={styles['grid-body__cell']}>{mascot.name}</div>
        <div className={styles['grid-body__cell']}>{mascot.img}</div>
        <div className={styles['grid-body__cell']}>Category: {mascot.category.toString()}</div>
        <div className={styles['grid-body__cell']}>{mascot.label.toString()}</div>
        <div className={styles['grid-body__cell']}>{mascot.size}</div>
        <div className={styles['grid-body__cell']}>{mascot.recommendedAge}</div>
        <div className={styles['grid-body__cell']}>{mascot.rentPrice} CAD</div>
        <div className={`${styles['grid-body__cell']} action`}>
          <CustomButton onClick={ShowDetails} id={mascot.id}>
            Details
          </CustomButton>
        </div>
      </div>
  );
};

export default Mascot;