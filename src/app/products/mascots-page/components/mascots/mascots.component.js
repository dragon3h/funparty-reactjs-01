import React from 'react';

import styles from './mascots.module.scss';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';
import Mascot from '../mascot/mascot.component';

const mascots = [
  {
    id: 1,
    code: 'ms-02000109',
    name: 'Elf on the shelf',
    image: 'to be done',
    category: ['ChristmasMascots', 'RegularMascots'],
    label: ['Christmas', 'Human'],
    size: '1.6m - 1.9m',
    recommendedAge: 'adult',
    rentPrice: 80,
    purchasePrice: 300,
    sellingPrice: 420,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 2,
    code: 'ms-01000209',
    name: 'Giant Panda',
    image: 'to be done',
    category: ['GiantMascots'],
    label: ['Animals'],
    size: '3m',
    recommendedAge: 'professional animator',
    rentPrice: 250,
    purchasePrice: 1300,
    sellingPrice: 2600,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 3,
    code: 'ms-01020739',
    name: 'Woody',
    image: 'to be done',
    category: ['HalloweenMascots', 'HighRangeMascots'],
    label: ['Halloween', 'ToyStory'],
    size: '1.6m - 2m',
    recommendedAge: 'adult',
    rentPrice: 100,
    purchasePrice: 400,
    sellingPrice: 740,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 4,
    code: 'ms-02001001',
    name: 'Santa',
    image: 'to be done',
    category: ['ChristmasMascots', 'HighRangeMascots'],
    label: ['Animals', 'Halloween'],
    size: '1.6m - 1.75m',
    recommendedAge: 'adult',
    rentPrice: 100,
    purchasePrice: 300,
    sellingPrice: 620,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 5,
    code: 'ms-04002003',
    name: 'Grenouille',
    image: 'to be done',
    category: ['DiscountMascots', 'HalloweenMascots'],
    label: ['Animals', 'Halloween'],
    size: '1.6m - 1.9m',
    recommendedAge: 'adult',
    rentPrice: 35,
    purchasePrice: 250,
    sellingPrice: 380,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
];

const Mascots = (props) => {
  const renderedMascots = mascots.map((mascot) => {
    return (
        <React.Fragment key={mascot.id}>
          <h3>{mascot.name}</h3>
        </React.Fragment>
    );
  });
  return (
      <div className={styles['grid-container']}>
        <h1>Mascots</h1>
        <div className={styles['list-page-buttons']}>
          <CustomButton onClick={() => {
            this.props.history.push(`/products/mascot/-1`);
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
                    Label
                  </span>
              </div>
              <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Size
                  </span>
              </div>
              <div className={styles['grid-header__cell']}>
                  <span className={styles['grid-header__cell-text']}>
                    Recommended Age
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
              mascots.length > 0 ? mascots.map((mascot) => (
                  <Mascot key={mascot.id}
                          mascot={mascot}
                          history={props.history}/>
              )) : 'No Data'
            }
          </div>
        </div>
      </div>
  );
};

export default Mascots;