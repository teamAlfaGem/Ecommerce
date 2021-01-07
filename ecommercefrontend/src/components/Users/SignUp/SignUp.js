import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import style from './style'

const SignUp = () => {
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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
                        <Form.Control type="text" placeholder="First name"  name="firstName" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Last name"  name="lastName"onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Username"  name="username" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="email" placeholder="Email"  name="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control as="textarea" placeholder="Address"  name="address" onChange={handleChange}/>
                        <Form.Text className="text-muted mb-1">
                            Your orders will be delivered to this address, You can change it latter!!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="Password" placeholder="Password"  name="password1" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Re-type password"  name="password2" onChange={handleChange}/>
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
