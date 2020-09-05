import {BouncyCastleDetailsTypes} from './bouncy-castle-details.types';

export const getBouncyCastleDetails = (id) => {
  return {
    type: BouncyCastleDetailsTypes.GET_BOUNCY_CASTLE_DETAILS,
    payload: id
  };
};