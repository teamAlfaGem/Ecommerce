import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { useDispatch } from 'react-redux';
import { updateCartProducts } from '../../actions/cart'
import { removeFromCart } from './../../actions/cart';



const SingleProductInCart = ({product}) => {

    const dispatch = useDispatch()

    const updateQty = async (amount) => {
        await dispatch(updateCartProducts(product.cartId, product.qty + amount, product.productId))
    }
    
    return (
        <div>
            <Card style={{ width: '18rem' }} className="cart-product-card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="">
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                    
                    Price : {product.price}<br/><br/>

                    Qty:&nbsp; &nbsp;   <Button variant="warning" size="sm" onClick={() => {updateQty(1)}} >+</Button>
                                            &nbsp;{product.qty}&nbsp;
                                        <Button variant="warning" size="sm" onClick={() => {updateQty(-1)}} disabled={product.qty === 1}>-</Button>
                    </Card.Text>
                    
                    <Button variant="dark" block onClick={() => {dispatch(removeFromCart(product.cartId))}}>
                        Remove from cart
                    </Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default SingleProductInCart
