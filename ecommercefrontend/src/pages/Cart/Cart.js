import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState([]);

    const getTotalPrice = () => {
        let price = 0;
        for (let i = 0; i < cartProducts.length; i++){
          price += cartProducts[i].price * cartProducts[i].qty
        }
      
        return price
      }

    useEffect(() => {
        
        const getProductsToCart = async () => {
            
            try {
                const response = await axios(`${process.env.REACT_APP_API}/cart/getcart/${JSON.parse(sessionStorage.getItem('user')).id}`)
                console.log(response)
                const tempCartProducts = response.data.map(data => ({
                    cartId : data.id,
                    productId : data.productId,
                    qty: data.qty,
                    productName: data.product.pname,
                    img: data.product.uploadDir,
                    price: data.product.price
                }))

                setCartProducts(tempCartProducts)
               
            } catch (error) {
                console.log(error);            
            }

        }

        getProductsToCart();
      }, [])

    const ifCartProductsIsEmpty = (
        <h3 className="pt-5">
            <i>No Products in cart...</i>
        </h3>
    )

    const ifCartProductsIsNotEmpty = (
        <div className="d-flex flex-wrap flex-row ">
                {cartProducts.map((product, index) => (
                    <div className="m-3" key={index} >
                        <SingleProductInCart product={product}/>
                    </div>  
                ))}
            </div>
    )
                  
            
    console.log(cartProducts);
    return (
        <Container className="mt-2">
            <Row className="d-flex flex-row justify-content-between">
                <h1>Total Price: {getTotalPrice()}</h1>
                <Button variant="success" className="mt-3 px-5">Buy</Button>
            </Row>
            
            {cartProducts.length === 0 ? (ifCartProductsIsEmpty) : (ifCartProductsIsNotEmpty)}

           
        </Container>
    )
}

export default Cart