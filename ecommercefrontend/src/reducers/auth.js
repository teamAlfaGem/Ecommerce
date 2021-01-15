import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../actions/types"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = user ? { isLoggenIn: true, user} : { isLoggedIn: false, user: null }

const auth = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, isLoggedIn: false}  

        case REGISTER_FAIL:
            return { ...state, isLoggedIn: false }

        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: action.payload.user }

        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, user: null }

        case LOGOUT:
            return { ...state, isLoggedIn: false, user: null }

        default:
           return state;
    }
} 

export default auth;