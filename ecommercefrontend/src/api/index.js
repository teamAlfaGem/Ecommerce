import axios from 'axios'
import authHeader from './../services/auth-header';

export const axiosWithUserToken = axios.create({
    baseURL: `${process.env.REACT_APP_API}`,
    timeout: 5000,
    headers: authHeader()
})