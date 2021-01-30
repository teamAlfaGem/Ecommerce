import React from 'react'

import Container from 'react-bootstrap/Container'

import './style.css'

const Header = () => {
    return (
        <div>
            <Container className="bg-light d-flex justify-content-center" fluid>
                <h1 className="logo">E-Shop</h1>
            </Container>
        </div>
    )
}

export default Header
