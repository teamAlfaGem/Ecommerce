import { combineReducers } from 'redux'

import { cartProducts } from './cart'
import { auth } from './auth'
import { message } from './message'

export default combineReducers({
    cartProducts,
    auth,
    message
})
