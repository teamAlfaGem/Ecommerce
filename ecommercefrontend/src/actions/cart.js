import { GET_CART_PRODUCTS, REMOVE_FROM_CART_PRODUCTS, UPDATE_CART_PRODUCTS_QTY } from './types';

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

export const updateCartProducts = (cartId, amount, productId) => async (dispatch) => {
   
    try {
        
        const response = await axios.put(`${process.env.REACT_APP_API}/cart/updatecart`, {
            id: cartId,
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            productId: productId,
            qty: amount
        })

        await dispatch({
            type: UPDATE_CART_PRODUCTS_QTY,
            payload: {
                id: cartId,
                qty: amount
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart = (cartId) => async (dispatch) =>{

    try {
        await axios.delete(`${process.env.REACT_APP_API}/cart/delete/${cartId}`);

        await dispatch({
            type: REMOVE_FROM_CART_PRODUCTS,
            payload: {
                id : cartId
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}
