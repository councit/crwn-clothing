import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/card.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
