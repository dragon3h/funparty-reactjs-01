import bouncyCastles from '../../assets/bouncy-castles.js';

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
    bouncyCastle = mapBouncyCastle(bouncyCastle);
  }
  
  return bouncyCastle;
};

const mapBouncyCastle = (item) => {
  const mapedItem = {
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
  
  return mapedItem;
};