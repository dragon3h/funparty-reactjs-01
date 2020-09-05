import bouncyCastles from '../../assets/bouncy-castles.js';

export const getBouncyCastleById = (id) => {
  let bouncyCastle = bouncyCastles.find(item => item.id === id);
  
  if (!bouncyCastle) {
    bouncyCastle = {
      id: 'a',
      code: 'b',
      name: 'c',
      img: 'd',
      category: 'e',
      description: 'f',
      minAge: '',
      maxAge: '',
      maxQuantity: '',
      isWater: '',
      rentPrice: '',
    };
  }
  
  return bouncyCastle;
};