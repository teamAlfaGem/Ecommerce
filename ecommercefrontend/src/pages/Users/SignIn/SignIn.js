import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { useDispatch } from 'react-redux';
import { loginAction } from '../../../actions/auth'

// import "./style.css"
// import style from './style'

const SignIn = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username : "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await dispatch(loginAction(formData.username, formData.password))
            toast.success('successfully signed in !!')
            history.push('/')
            
        
        } catch (error) {
            console.log(error.message)
            toast.error('Invalid Credentials!!')
        }
    }

    return (
        <div>
            <Container className="mt-5 mb-5 p-5 form-container">
                <h5 className="info">
                    Please enter your Email and <br/>Password to Sign In
                </h5>
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"  name="username" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" autoComplete="off" name="password" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Sign In
                    </Button>
                </Form>

                <h5 className="text-center mt-5">
                    You don't have account !!<br/><br/>
                    <Button variant="info" href="/users/sign-up">Sign Up</Button>
                </h5>

            </Container>
        </div>
    )
}

export default SignIn

