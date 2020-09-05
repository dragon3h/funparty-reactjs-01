import {BouncyCastleDetailsTypes} from './bouncy-castle-details.types';
import {getBouncyCastleById} from '../bouncy-castles.utils';

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
  }
};

const bouncyCastleDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BouncyCastleDetailsTypes.GET_BOUNCY_CASTLE_DETAILS:
      // let details;
      // if(+action.payload < 0) {
      //   details = INITIAL_STATE;
      // } else {
      //   details = getBouncyCastleById(+action.payload);
      // }
      
      const details = getBouncyCastleById(+action.payload);
      return {
        ...state,
        bouncyCastleDetails: details,
      };
    default:
      return state;
  }
};

export default bouncyCastleDetailsReducer;