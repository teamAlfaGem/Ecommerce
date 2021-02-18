import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img from '../../../images/Huawei-Mate-20-Pro.jpg'

const FeaturedProducts = ({product}) => {
    return (
        <Container className="featured-products-card d-flex flex-wrap justify-content-between mt-4">
           
                <Col className="pl-0" md={6}><img src={product.uploadDir} alt="" style={{height: '30vh', width: '100%'}} /></Col>
                <Col className="pt-4" md={6}>
                  <h4>{product.pname}<br></br></h4>
                  <h5>Price: {product.price}</h5>
                  <Button variant="info" size="sm" className="featured-view-btn" >View product</Button>
               </Col>
          
        </Container>
    )
}

export default FeaturedProducts
