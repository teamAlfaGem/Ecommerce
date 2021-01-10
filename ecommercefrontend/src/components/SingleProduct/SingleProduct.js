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
                    Basic description <br/>
                    of the product<br/>
                    lorem ipsium
                    
                    </Card.Text>
                    <Button variant="danger">Add to Cart</Button><Button variant="info">View</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProduct
