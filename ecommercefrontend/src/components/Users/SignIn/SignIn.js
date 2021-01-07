import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import style from './style'

const SignIn = () => {

    const classes = style
    return (
        <div>
            <Container className="mt-5 p-5 bg-light" style={classes.formContainer}>
                <h5 style={classes.info}>
                    Please enter your Email and <br/>Password to Sign In
                </h5>
                <Form>
                    <Form.Group >
                        <Form.Control type="email" placeholder="Enter email" autocomplete="off"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Password" autocomplete="off"/>
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

