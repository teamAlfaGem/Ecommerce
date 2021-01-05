import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg">
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
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar