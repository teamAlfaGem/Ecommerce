import { GET_CART_PRODUCTS, REMOVE_FROM_CART_PRODUCTS, INCREMENT_QTY_CART_PRODUCTS, DECREMENT_QTY_CART_PRODUCTS } from './types';

import axios from 'axios';

export const getCartProducts = () => async (dispatch) => {

    try {
        const response = await axios(`${process.env.REACT_APP_API}/cart/getcart/${JSON.parse(sessionStorage.getItem('user')).id}`)
        console.log(response)
        const tempCartProducts = response.data.map(data => ({
            cartId : data.id,
            productId : data.productId,
            qty: data.qty,
            productName: data.product.pname,
            img: data.product.uploadDir,
            price: data.product.price
        }))

        await dispatch({
            type: GET_CART_PRODUCTS,
            payload: tempCartProducts
        })
        
    } catch (error) {
        console.log(error)
    }
}
