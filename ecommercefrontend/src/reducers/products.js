import { GET_PRODUCTS } from '../actions/types';

const initialState = [];

export const products = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('hello')
            return [...state, action.payload]
        default:
            return state;
    }
}

