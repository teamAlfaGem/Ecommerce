import { GET_CART_PRODUCTS, REMOVE_FROM_CART_PRODUCTS, UPDATE_CART_PRODUCTS_QTY } from './../actions/types';



export const cartProducts = (products = [], action) => {
    switch (action.type) {
        case GET_CART_PRODUCTS:
            return action.payload

        case REMOVE_FROM_CART_PRODUCTS:
            return products.filter((product) => product.cartId !== action.payload.id )

        case UPDATE_CART_PRODUCTS_QTY:
            return products.map((product) => product.cartId === action.payload.id ? {...product, qty: action.payload.qty} : product)

        
        default:
            return products;
    }
}
    