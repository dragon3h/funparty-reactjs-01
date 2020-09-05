import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import bouncyCastlesReducer from './products/bouncy-castles/bouncy-castles.reducer';
import bouncyCastleDetailsReducer from './products/bouncy-castle-details/bouncy-castle-details.reducer';

export default combineReducers({
  user: userReducer,
  bouncyCastles: bouncyCastlesReducer,
  bouncyCastleDetails: bouncyCastleDetailsReducer,
});