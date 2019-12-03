import {  combineReducers } from 'redux';

import UserReducer from './User/UserReducer';
import CartReducer from './cart/cart.reducer'

export default combineReducers({
    user:UserReducer,
    cart:CartReducer
})