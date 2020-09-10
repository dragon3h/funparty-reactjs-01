import {BouncyCastlesTypes} from './bouncy-castles.types';

export const getBouncyCastles = (bouncyCastles) => {
  return {
    type: BouncyCastlesTypes.GET_BOUNCY_CASTLES,
    payload: bouncyCastles,
  };
};

export const addBouncyCastlesCollection = (bouncyCastles) => {
  return {
    type: BouncyCastlesTypes.UPDATE_BOUNCE_CASTLE_COLLECTION,
    payload: bouncyCastles,
  };
};