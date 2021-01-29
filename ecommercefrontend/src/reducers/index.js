import { combineReducers } from 'redux'

import { cartProducts } from './cart'
import auth from './auth'
import message from './message'
import { products }  from './products'

export default combineReducers({
    cartProducts,
    auth,
    message,
    products
})
