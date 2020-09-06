import bouncyCastles from '../../assets/bouncy-castles.js';
import _ from 'lodash';

export const getBouncyCastleById = (id) => {
  let bouncyCastle = bouncyCastles.find(item => item.id === id);
  
  if (!bouncyCastle) {
    bouncyCastle = {
      id: '',
      code: '',
      name: '',
      img: '',
      category: '',
      description: '',
      minAge: '',
      maxAge: '',
      maxQuantity: '',
      isWater: '',
      rentPrice: '',
    };
  } else {
    bouncyCastle = mapDbToFeBouncyCastle(bouncyCastle);
  }
  
  return bouncyCastle;
};

export const updateBouncyCastle = (bouncyCastle) => {
  let existingBouncyCastle = bouncyCastles.find(item => item.id === bouncyCastle.id);
  const currentIndex = _.findIndex(bouncyCastles, (item) => (item.id === bouncyCastle.id));
  
  if (existingBouncyCastle) {
    bouncyCastles[currentIndex] = mapFeToDbBouncyCastle(bouncyCastle);
    return bouncyCastles[currentIndex];
  } else {
    return null;
  }
};

const mapDbToFeBouncyCastle = (item) => {
  const mappedItem = {
    id: item.id,
    code: item.code,
    name: item.name,
    img: 'will be implemented',
    category: item.category,
    description: item.description,
    minAge: item.restrictions ? item.restrictions.minAge : 'N/A',
    maxAge: item.restrictions ? item.restrictions.maxAge : 'N/A',
    maxQuantity: item.restrictions ? item.restrictions.maxQuantity : 'N/A',
    isWater: item.isWater,
    rentPrice: item.rentPrice,
  };
  
  return mappedItem;
};

const mapFeToDbBouncyCastle = (item) => {
  const mappedItem = {
        'id': item.id,
        'code': item.code,
        'name': item.name,
        'category': item.category,
        'isWater': item.isWater,
        'indoor': 'to be done', // yes
        'outdoor': 'to be done', //no
        'restrictions': {
          'minAge': +item.minAge, //2,
          'maxAge': +item.maxAge, //8,
          'maxQuantity': item.maxQuantity, //2,
          'weightLimitLb': 'to be done', //200,
          'inflatedSize': 'to be done', //'18x7x7',
        },
        'weight': 'to be done', //85,
        'features': [
          'Water Jet',
          'Splash Pool',
          'Buq Slide',
          'Climbing Wall',
        ],
        'installation': {
          'inflateTime': 'to be done',//5,
          'persons': 'to be done',//1,
        },
        'carryBagSize': 'to be done',//'Size of a hockey bag, fits any car trunk',
        'purchasePrice': 'to be done',//400,
        'rentPrice': item.rentPrice,
        'salePrice': 'to be done',//450,
        'images': 'to be done',//[],
        'description': item.description,
        'createdDate': 'to be done',//'01-01-2018',
        'changedDate': 'to be done',//'19-03-2020',
        'createdBy': 'to be done',//'user-1',
      };
  
  return mappedItem;
};