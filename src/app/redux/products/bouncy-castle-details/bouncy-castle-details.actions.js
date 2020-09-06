import {BouncyCastleDetailsTypes} from './bouncy-castle-details.types';

export const getBouncyCastleDetails = (id) => {
  return {
    type: BouncyCastleDetailsTypes.GET_BOUNCY_CASTLE_DETAILS,
    payload: id,
  };
};

export const updateBouncyCastle = (bouncyCastle) => {
  return {
    type: BouncyCastleDetailsTypes.UPDATE_BOUNCE_CASTLE,
    payload: bouncyCastle,
  };
};