import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const SingleProductInCart = ({product}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="">
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                    Price : {product.price}<br/><br/>
                    Qty:&nbsp; &nbsp; <Button variant="warning" size="sm">+</Button>&nbsp;{product.qty}&nbsp;<Button variant="warning" size="sm">-</Button>
                    </Card.Text>
                    <Button variant="dark" block>Remove from cart</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProductInCart
