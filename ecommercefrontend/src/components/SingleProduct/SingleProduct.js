import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SingleProduct = () => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                    Price : $$
                    
                    </Card.Text>
                    <Button variant="danger" >Add to Cart</Button><Button variant="info" className="ml-2">View Product</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProduct