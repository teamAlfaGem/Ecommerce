import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const SingleProductInCart = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                    Price : $$<br/><br/>
                    Qty:&nbsp; &nbsp; <Button variant="warning" size="sm">+</Button>&nbsp;1&nbsp;<Button variant="warning" size="sm">-</Button>
                    </Card.Text>
                    <Button variant="dark" block>Remove from cart</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProductInCart
