import {BouncyCastlesTypes} from './bouncy-castles.types';

export const getBouncyCastles = (bouncyCastles) => {
  return {
    type: BouncyCastlesTypes.GET_BOUNCY_CASTLES,
    payload: bouncyCastles,
  };
};