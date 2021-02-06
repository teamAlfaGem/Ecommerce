import { GET_CART_PRODUCTS, REMOVE_FROM_CART_PRODUCTS, INCREMENT_QTY_CART_PRODUCTS, DECREMENT_QTY_CART_PRODUCTS } from './../actions/types';



export const cartProducts = (products = [], action) => {
    switch (action.type) {
        case GET_CART_PRODUCTS:
            return action.payload

        case REMOVE_FROM_CART_PRODUCTS:
            return products

        case INCREMENT_QTY_CART_PRODUCTS:
            return products

        case DECREMENT_QTY_CART_PRODUCTS:
            return products
            
        default:
            return products;
    }
}
    