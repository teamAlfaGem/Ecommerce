import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";

import { login, logout, register } from '../services/auth.service'


export const registerAction = (firstname, lastname, address, username, email, password) => async (dispatch) => {
    
    const response = await register(firstname, lastname, address, username, email, password)
    
    await dispatch({type: REGISTER_SUCCESS});
    
    dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
    });
  
}
        


export const loginAction = (username, password) => async (dispatch) => {
    
    
    const response = await login(username, password)
    
    dispatch({type: LOGIN_SUCCESS, payload: { user: response} })
    
}

export const logoutAction = () => (dispatch) => {
    logout()

    dispatch({ type: LOGOUT})
}