import axios from 'axios'

export const login = async (username, password) => {

   
    const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/signin`, {username, password})

    if(response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data))
    }

    console.log(response)
    return response.data;
    }

export const logout = () => {
    sessionStorage.removeItem("user")
}

export const register = async (firstName, lastName, address, username, email, password) => {
    
    const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/signup`, {
        firstName,
        lastName,
        address,
        username,
        email,
        password
    })
    console.log(response)
    return response
    
}
        
    
 