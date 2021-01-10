import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import style from './style'


const NavBar = () => {

    const classes = style

    return (
        <div>
            <Navbar bg="light" expand="lg">
                {/* styles for logo is in App.css */}
                <Navbar.Brand href="/" className="logo">E-Shop</Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/products/phones">Phones</NavDropdown.Item>
                                <NavDropdown.Item href="/products/laptops">Laptops</NavDropdown.Item>
                                <NavDropdown.Item href="/products/pen-drives">Pen Drives</NavDropdown.Item>
                                <NavDropdown.Item href="/products/tv">Tv</NavDropdown.Item>
                                <NavDropdown.Item href="/products/consoles">Consoles</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/cart">
                                Cart{" "}
                                <i className="fa fa-shopping-cart" aria-hidden="true" style={classes.cart}></i>
                            </Nav.Link>
                            <Form inline >
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        
                        <Button variant="outline-info" href="/users/sign-in">SignIn</Button>

                        
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
 
