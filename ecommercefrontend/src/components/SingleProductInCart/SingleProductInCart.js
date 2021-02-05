import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import axios from 'axios';


const SingleProductInCart = ({product}) => {

   
    const updateQty = (amount) => {
        
        try {
            const newQty = product.qty + amount;

            axios.put(`${process.env.REACT_APP_API}/cart/updatecart`, {
                id: product.cartId,
                userId: JSON.parse(sessionStorage.getItem('user')).id,
                productId: product.productId,
                qty: newQty
            })

            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }
    

    const removeFromCart = (cartId) => {

        try{

            axios.delete(`${process.env.REACT_APP_API}/cart/delete/${cartId}`);
            window.location.reload()
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="">
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                    
                    Price : {product.price}<br/><br/>

                    Qty:&nbsp; &nbsp;   <Button variant="warning" size="sm" onClick={() => {updateQty(1)}}>+</Button>
                                            &nbsp;{product.qty}&nbsp;
                                        <Button variant="warning" size="sm" onClick={() => {updateQty(-1)}}>-</Button>
                    </Card.Text>
                    
                    <Button variant="dark" block onClick={() => {removeFromCart(product.cartId)}}>
                        Remove from cart
                    </Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProductInCart
