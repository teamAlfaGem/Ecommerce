import React from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductInfo = ({id, name, img, description, price}) => {
    
    const descriptionsArray = String(description).split(',');
    console.log(descriptionsArray);

    const addToCart = async (product_id) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/cart/savecart`, {
                userId: JSON.parse(sessionStorage.getItem('user')).id, 
                productId: product_id, 
                qty: 1}
            )
            toast.success('product added to cart')
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }
  
    return (
        <Container className="mt-5 prod-info-container ">
             <h3 className="mt-3 text-center">{name}</h3>
            <Row className="prod-info py-3">
                
                <Col md={4} sm={12} className="prod-info-img">
                    <img src={img} alt=""></img>
                   <br></br>
                </Col>
                <Col md={4} sm={12} className="prod-info-">
                    
                    <h3></h3><br/>
                    <h4>{descriptionsArray.map((desc, index) => (
                        <li className="prod-info-desc">
                            {desc}
                        </li>
                    ))}</h4>
                    <h4 className="prod-info-price">price: {price}</h4>
                    {sessionStorage.getItem('user') ? (
                        <Button 
                        variant="danger" 
                        className="prod-info-add-to-cart"
                        onClick={() => {addToCart(id)}}
                    >
                        Add to cart
                    </Button>
                    ) : (
                        <Button 
                            variant="secondary"
                            href="/"
                        >Home</Button>
                    )}
                    
                </Col>
            </Row>
        </Container>
    )
}

export default ProductInfo;
