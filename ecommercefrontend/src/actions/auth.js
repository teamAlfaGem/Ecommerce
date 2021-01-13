import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";

import { login, logout, register } from '../services/auth.service'

export const registerAction = (username, email, password) => async (dispatch) => {
    
    try {
        const response = register(username, email, password)
        
        dispatch({type: REGISTER_SUCCESS});
        
        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
        });

    } catch (error) {
        const message = error.message || error.toString();

        dispatch({type : REGISTER_FAIL})

        dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    }

}

export const loginAction = (username, password) => (dispatch) => {

    try {
        const response = login(username, password)

        dispatch({type: LOGIN_SUCCESS, payload: { user: response} })

    } catch (error) {
        const message = error.message || error.toString();

        dispatch({type: LOGIN_FAIL});
    
        dispatch({
            type: SET_MESSAGE,
            payload: message,
        });
    }
}

export const logoutAction = () => (dispatch) => {
    logout()

    dispatch({ type: LOGOUT})
}