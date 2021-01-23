import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { useDispatch } from 'react-redux';
import { registerAction } from '../../../actions/auth'

import style from './style'

const SignUp = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const classes = style

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        address: "",
        password1: "",
        password2: ""
    })

    const handleChange = (e) => {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        if (formData.password1 !== formData.password2){
            toast.error("passwords don't match! " )
        }
        else if (formData.password1.length <= 6){
            toast.error("password should have more than 6 characters ")
        }
        else {
            try {
                await dispatch(registerAction(
                    formData.firstName,
                    formData.lastName,
                    formData.address,
                    formData.username,
                    formData.email,
                    formData.password1
                ))
                toast.success('successfully signuped, now sign in !!')
                history.push('/users/sign-in')
                    
            } catch (error) {
                console.log(error)
                toast.error('username or email already in use!!')
            }
        }
    }



    return (
        <div>
            <Container className="mt-5 mb-5 p-5 bg-light " style={classes.formContainer} >
                <h5 style={classes.info}>
                    Please enter your info and <br/>
                    create your account
                </h5>
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"  name="firstName" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"  name="lastName"onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" name="address" onChange={handleChange}/>
                        <Form.Text className="text-muted mb-1">
                            Your orders will be delivered to this address, You can change it latter!!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" name="password1" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Re-type Password</Form.Label>
                        <Form.Control type="password" name="password2" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Sign Up
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default SignUp
