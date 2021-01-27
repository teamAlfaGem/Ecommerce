import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";

import { login, logout, register } from '../services/auth.service'


export const registerAction = (firstname, lastname, address, username, email, password) => async (dispatch) => 
    new Promise(async(resolve, reject) => {
        
        try {
            const response = await register(firstname, lastname, address, username, email, password);
            await dispatch({type: REGISTER_SUCCESS});

            await dispatch({
                type: SET_MESSAGE,
                payload: 'login failed',
            });
            resolve('success');

        } catch (error) {

            console.log(error)
            dispatch({type: REGISTER_FAIL})
            reject(new Error(error))
        }
    })


export const loginAction = (username, password) => (dispatch) => new Promise(async(resolve, reject) => {
  
    try {
        const response = await login(username, password)
        await dispatch({ type: LOGIN_SUCCESS, payload: { user: response } });
        resolve('success')
    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_FAIL})
        reject(new Error(error));
    }
})


export const logoutAction = () => (dispatch) => {
    logout()

    dispatch({ type: LOGOUT})
}