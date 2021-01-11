import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'

import style from './style'

const Cart = () => {
    const classes = style
    return (
        <Container>
            Cart
            <Button style={classes.buyBtn} variant="success" className="mt-3">Buy</Button>
            <h1>Total Price: </h1>
            <div className="d-flex flex-wrap flex-row ">
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>
                <div className="m-3">
                    <SingleProductInCart />
                </div>

                
            </div>

           
        </Container>
    )
}

export default Cart
