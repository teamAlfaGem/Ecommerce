import React from 'react'

import Container from 'react-bootstrap/Container'

import style from './style'

const Header = () => {
    const classes = style
    return (
        <div>
            <Container className="bg-light" fluid>
                <h1 style={classes.logo} className="display-3">E-Shop</h1>
            </Container>
        </div>
    )
}

export default Header
