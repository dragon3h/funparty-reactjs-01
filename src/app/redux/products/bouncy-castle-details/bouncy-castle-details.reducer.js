import {BouncyCastleDetailsTypes} from './bouncy-castle-details.types';
import {getBouncyCastleById, updateBouncyCastle} from '../bouncy-castles.utils';

const INITIAL_STATE = {
  bouncyCastleDetails: {
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
  },
};

const bouncyCastleDetailsReducer = (state = INITIAL_STATE, action) => {
  let details = INITIAL_STATE;
  switch (action.type) {
    case BouncyCastleDetailsTypes.GET_BOUNCY_CASTLE_DETAILS:
      details = getBouncyCastleById(+action.payload);
      return {
        ...state,
        bouncyCastleDetails: details,
      };
    case BouncyCastleDetailsTypes.UPDATE_BOUNCE_CASTLE:
      details = updateBouncyCastle(action.payload);
      return {
        ...state,
        bouncyCastleDetails: details ? details : INITIAL_STATE,
      }
    default:
      return state;
  }
};

export default bouncyCastleDetailsReducer;