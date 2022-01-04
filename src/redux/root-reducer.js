import { combineReducers } from 'redux';

import { CartReducer } from './Cart/Cart.reducer';
import { UserReducer } from './User.reducer';

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
});