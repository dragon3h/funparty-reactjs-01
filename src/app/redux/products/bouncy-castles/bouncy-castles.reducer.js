import {BouncyCastlesTypes} from './bouncy-castles.types';

import bouncyCastles from '../../../assets/bouncy-castles.js';
import { getBouncyCastleById } from '../bouncy-castles.utils';

const INITIAL_STATE = {
  bouncyCastles: bouncyCastles,
};

const bouncyCastlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BouncyCastlesTypes.GET_BOUNCY_CASTLES:
      return {
        ...state,
        bouncyCastles: action.payload,
      };
    case BouncyCastlesTypes.GET_BOUNCY_CASTLE:
      return {
        bouncyCastle: getBouncyCastleById(action.payload),
      };
    default:
      return state;
  }
};

export default bouncyCastlesReducer;