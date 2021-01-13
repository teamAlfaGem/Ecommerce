import axios from 'axios'

export const login = async (username, password) => {

    const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/signin`, {username, password})
    
    if(response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response;
}

   
   


export const logout = () => {
    localStorage.removeItem("user")
}

export const register = async (username, email, password) => {
    
    const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/signup`, {
        username,
        email,
        password
    })

    return response
    
}
        
    
 