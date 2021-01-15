import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../actions/types"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = user ? { isLoggenIn: true, user} : { isLoggedIn: false, user: null }

const auth = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            // state = {...state, isLoggedIn: false}
            // return state 
            return {...state, isLoggedIn: false}  

        case REGISTER_FAIL:
            // state = { ...state, isLoggedIn: false }
            // return state
            return { ...state, isLoggedIn: false }

        case LOGIN_SUCCESS:
            // state = { ...state, isLoggedIn: true, user: action.payload.user }
            // return  state
            return { ...state, isLoggedIn: true, user: action.payload.user }

        case LOGIN_FAIL:
            // state = { ...state, isLoggedIn: false, user: null }
            // return state
            return { ...state, isLoggedIn: false, user: null }

        case LOGOUT:
            // state = { ...state, isLoggedIn: false, user: null }
            // return state
            return { ...state, isLoggedIn: false, user: null }

        default:
           return state;
    }
} 

export default auth;