import React, {Component} from 'react';

import styles from './bouncy-castles.module.scss';

import bouncyCastles from '../../../../assets/bouncy-castles.json';
import BouncyCastle from '../bouncy-castle/bouncy-castle.component';

class BouncyCastlesComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bouncyCastles: bouncyCastles,
    };
  }
  
  render() {
    const {bouncyCastles} = this.state;
    return (
        <div className={styles["bouncy-castles"]}>
          <h1>Bouncy Castles</h1>
          <div className={styles.grid}>
            <div className={styles["grid-header"]}>
              <div className={styles["grid-header__row"]}>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Code
                  </span>
                </div>
                <div className={`${styles["grid-header__cell"]} name`}>
                  <span className={styles["grid-header__cell-text"]}>
                    Name
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Preview
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Category
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Description
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Age
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Max Quantity
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Water Slide
                  </span>
                </div>
                <div className={styles["grid-header__cell"]}>
                  <span className={styles["grid-header__cell-text"]}>
                    Rent Price
                  </span>
                </div>
                <div className={`${styles["grid-header__cell"]} action`}>
                  <span className={styles["grid-header__cell-text"]}>
                    Details
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["grid-body"]}>
              {
                bouncyCastles.map((bouncyCastle) => (
                    <BouncyCastle key={bouncyCastle.id}
                                  bouncyCastle={bouncyCastle}/>
                ))
              }
            </div>
          </div>
        </div>
    );
  }
}

export default BouncyCastlesComponent;