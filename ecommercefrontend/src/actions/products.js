import { GET_PRODUCTS } from './types';

import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/product`)
       
        await dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        })

    } catch (error) {
        console.log(error);
    }

  
}