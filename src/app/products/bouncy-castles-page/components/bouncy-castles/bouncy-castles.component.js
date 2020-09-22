import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './bouncy-castles.module.scss';

import BouncyCastle from '../bouncy-castle/bouncy-castle.component';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';

import {getBouncyCastles} from '../../../../redux/products/bouncy-castles/bouncy-castles.actions';

import {firestore, convertBouncyCastlesCollectionToMap} from '../../../../firebase/firebase.utils';

class BouncyCastlesComponent extends Component {
  unsubscribeFromSnapshot = null;
  
  componentDidMount() {
    const connectionRef = firestore.collection('bouncyCastles');
    const {getBouncyCastles} = this.props;
    
    connectionRef.onSnapshot(async (snapshot) => {
      const result = convertBouncyCastlesCollectionToMap(snapshot);
      console.log('bouncyCastles: ', result);
      
      getBouncyCastles(result);
    });
  }
  
  render() {
    const {bouncyCastles} = this.props;
    return (
        <div className={styles['grid-container']}>
          <h1>Bouncy Castles</h1>
          <div className={styles['list-page-buttons']}>
            <CustomButton onClick={() => {
              this.props.history.push(`/products/bouncy-castle/-1`);
            }}>Add New</CustomButton>
          </div>
          <div className={styles.grid}>
            <div className={styles['grid-header']}>
              <div className={styles['grid-header__row']}>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Code
                  </span>
                </div>
                <div className={`${styles['grid-header__cell']}`}>
                  <span className={styles['grid-header__cell-text']}>
                    Name
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Preview
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Category
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Description
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Age
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Max Quantity
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Water Slide
                  </span>
                </div>
                <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Rent Price
                  </span>
                </div>
                <div className={`${styles['grid-header__cell']} action`}>
                  <span className={styles['grid-header__cell-text']}>
                    Details
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['grid-body']}>
              {
                bouncyCastles.length > 0 ? bouncyCastles.map((bouncyCastle) => (
                    <BouncyCastle key={bouncyCastle.id}
                                  bouncyCastle={bouncyCastle}
                                  history={this.props.history}/>
                )) : 'No Data'
              }
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bouncyCastles: state.bouncyCastles.bouncyCastles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getBouncyCastles: (bouncyCastles) => dispatch(getBouncyCastles(bouncyCastles)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BouncyCastlesComponent);