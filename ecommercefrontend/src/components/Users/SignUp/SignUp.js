import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import style from './style'

const SignUp = () => {
    
    const classes = style
    return (
        <div>
            <Container className="mt-5 mb-5 p-5 bg-light " style={classes.formContainer} >
                <h5 style={classes.info}>
                    Please enter your info and <br/>
                    create your account
                </h5>
                <Form>
                    <Form.Group >
                        <Form.Control type="text" placeholder="First name" autocomplete="off" name="firstName"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Last name" autocomplete="off" name="lastName"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="email" placeholder="Email" autocomplete="off" name="email"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control as="textarea" placeholder="Address" autocomplete="off" name="address"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="Password" placeholder="Password" autocomplete="off" name="password1"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Re-type password" autocomplete="off" name="password2"/>
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
