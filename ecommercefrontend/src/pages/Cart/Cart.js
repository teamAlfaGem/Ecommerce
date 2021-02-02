import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'
import { useSelector } from 'react-redux';

const Cart = () => {
    let products = useSelector((state) => state.products);
    
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {

        const getProductsFromCart = async () => {

            let response;
         

            try {
                response = await axios(`${process.env.REACT_APP_API}/cart/getcart/${JSON.parse(sessionStorage.getItem('user')).id}`)
                
            } catch (error) {
                console.log(error);            
            }
            
            const filteredData = response.data.map(cartProduct => ({id: cartProduct.productId, qty: cartProduct.qty }) );
            
            let tempCartProducts = [];

            for (let i = 0; i < filteredData.length; i++) {
                let temp = products.filter(product => product.id === filteredData[i].id )
                
                setTimeout(() => {}, 2)

                tempCartProducts.push({productId: temp[0].id, productName: temp[0].pname, qty: filteredData[i].qty,
                     price: temp[0].price, img: temp[0].uploadDir })
            }

            setCartProducts(tempCartProducts);
        }

        getProductsFromCart();

    }, [products])
    
    console.log(cartProducts);
    return (
        <Container className="mt-2">
            <Row className="d-flex flex-row justify-content-between">
                <h1>Total Price: </h1>
                <Button variant="success" className="mt-3 px-5">Buy</Button>
            </Row>
            
            <div className="d-flex flex-wrap flex-row ">
                {cartProducts.map((product, index) => (
                    <div className="m-3" key={index} >
                        <SingleProductInCart product={product}/>
                    </div>  
                ))}
                  
            </div>

           
        </Container>
    )
}

export default Cart
