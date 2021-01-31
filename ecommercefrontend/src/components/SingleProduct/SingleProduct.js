import React from 'react'
import { axiosWithUserToken } from '../../api'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SingleProduct = ({product}) => {

    const addToCart = async (product_id, user_id) => {
        try {
            const response = await axiosWithUserToken('/savecart', {
                userId: user_id, 
                productId: product_id, 
                qty: 1}
            )
            
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    const addToCartBtn = (
       <Button variant="danger" onClick={addToCart}>Add to Cart</Button>
    )

    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.uploadDir} />
                <Card.Body>
                    <Card.Title>{product.pname}</Card.Title>
                    <Card.Text>
                    Price : {product.price}
                    
                    </Card.Text>
                    {sessionStorage.getItem('user') ? 
                        (addToCartBtn) : 
                        ('') }
                    
                    <Button variant="info" className="ml-2">View Product</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProduct
