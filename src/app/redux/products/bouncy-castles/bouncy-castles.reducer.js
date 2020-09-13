import {BouncyCastlesTypes} from './bouncy-castles.types';

// import bouncyCastles from '../../../assets/bouncy-castles.js';

const INITIAL_STATE = {
  bouncyCastles: [],
};

const bouncyCastlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BouncyCastlesTypes.GET_BOUNCY_CASTLES:
      return {
        ...state,
        bouncyCastles: action.payload,
      };
    case BouncyCastlesTypes.UPDATE_BOUNCE_CASTLE_COLLECTION:
      return {
        bouncyCastle: action.payload,
      };
    default:
      return state;
  }
};

export default bouncyCastlesReducer;