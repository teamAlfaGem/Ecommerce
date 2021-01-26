import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'


const Cart = () => {
    return (
        <Container className="mt-2">
            <Row className="d-flex flex-row-reverse justify-content-between">
                <Button variant="success" className="mt-3 px-5 ">Buy</Button>
                <h1>Total Price: </h1>
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
