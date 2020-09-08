import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import bouncyCastlesReducer from './products/bouncy-castles/bouncy-castles.reducer';
import bouncyCastleDetailsReducer from './products/bouncy-castle-details/bouncy-castle-details.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bouncyCastleDetails'],
};

const rootReducer = combineReducers({
  user: userReducer,
  bouncyCastles: bouncyCastlesReducer,
  bouncyCastleDetails: bouncyCastleDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);