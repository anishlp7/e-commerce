import {  combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

import UserReducer from './User/UserReducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persisConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user:UserReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})



export default persistReducer(persisConfig, rootReducer)