import React from 'react';

import styles from './form-input.module.scss';

const formInput = ({handleChange, label, value, type, ...otherProps}) => {
  return (
    <div className={styles["input-group"]}>
      <input className={styles["form-input"]} onChange={handleChange} value={value} type={type} {...otherProps} />
      {
        label ? (
          <label
            className={`${
                (otherProps.value && otherProps.value.length) ? styles.shrink : ''
            } ${styles['form-input__label']}`}>
            {label}
          </label>
        ) : null
      }
    </div>
  );
};

export default formInput;