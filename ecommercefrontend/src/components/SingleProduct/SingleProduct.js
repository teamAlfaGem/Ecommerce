import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SingleProduct = ({product}) => {

    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.uploadDir} />
                <Card.Body>
                    <Card.Title>{product.pname}</Card.Title>
                    <Card.Text>
                    Price : {product.price}
                    
                    </Card.Text>
                    <Button variant="danger" >Add to Cart</Button><Button variant="info" className="ml-2">View Product</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProduct
