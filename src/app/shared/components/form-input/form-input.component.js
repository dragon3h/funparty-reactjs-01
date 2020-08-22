import React from 'react';

import fistyles from './form-input.module.scss';
import styles from '../../../products/bouncy-castles-page/components/bouncy-castle/bouncy-castle.module.scss';

const formInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className={styles["input-group"]}>
      <input className={styles["form-input"]} onChange={handleChange} {...otherProps} />
      {
        label ? (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } ${fistyles['form-input__label']}`}>
            {label}
          </label>
        ) : null
      }
    </div>
  );
};

export default formInput;