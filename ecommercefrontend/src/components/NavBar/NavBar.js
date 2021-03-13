import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

// import './style.css'

import { useDispatch } from 'react-redux';
import { logoutAction } from '../../actions/auth'


const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    
    const { username } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : ""

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearchBtn = () => {
        if (searchTerm){
            const temp = searchTerm
            setSearchTerm("")
            history.push("/")
            history.push(`search/${temp}`)
        }
    }

    const contentIfUserIsLoggedIn = (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic userDropdown" >
                <i className="fa fa-user" aria-hidden="true">{' '}</i>{'  '}{ username }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="users/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    dispatch(logoutAction())
                    window.location.reload()
                    }}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

    return (
        <div>
            <Navbar expand="lg" className="nav-bar">
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
                            
                            {username ? (<Nav.Link href="/cart">
                                Cart{" "}
                                <i id="cart" className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Nav.Link>) : ("")}
                            
                            <Form inline className="search-form">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch}/>
                                <Button variant="outline-success" onClick={handleSearchBtn} >Search</Button>
                            </Form>
                        </Nav>
                        
                        {/* <Button variant="outline-info" href="/users/sign-in">SignIn</Button> */}
                        {username ? (contentIfUserIsLoggedIn) : (<Button variant="outline-info" href="/users/sign-in">SignIn</Button>)}
                        
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
 
                               
