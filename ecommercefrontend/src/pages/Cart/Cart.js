import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'


const Cart = () => {
    const getProductsFromCart = () => {

    }
    return (
        <Container className="mt-2">
            <Row className="d-flex flex-row justify-content-between">
                <h1>Total Price: </h1>
                <Button variant="success" className="mt-3 px-5">Buy</Button>
            </Row>
            
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
