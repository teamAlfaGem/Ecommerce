import React from 'react'
import { toast } from 'react-toastify';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const SingleProduct = ({product}) => {
    
    const addToCart = async (product_id, user_id) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/cart/savecart`, {
                userId: user_id, 
                productId: product_id, 
                qty: 1}
            )
            toast.success('product added to cart')
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    const addToCartBtn = (
       <Button variant="danger" onClick={() => addToCart(
           product.id, 
           JSON.parse(sessionStorage.getItem('user')).id)}>
               Add to Cart
        </Button>
    )

    return (
        <div>
           <Card style={{ width: '18rem' }} className="single-product-card">
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
