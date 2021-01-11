import React from 'react'

import Container from 'react-bootstrap/Container'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'

const Cart = () => {
    return (
        <Container>
            Cart
            <h1>Total Price: </h1>
            <SingleProductInCart />
        </Container>
    )
}

export default Cart
