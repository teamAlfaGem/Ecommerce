import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img from '../../../images/Huawei-Mate-20-Pro.jpg'

const FeaturedProducts = () => {
    return (
        <Container className="featured-products-card ">
           
                <Col className="pl-0" md={6}><img src={img} alt="" style={{height: '30vh', width: '100%'}} /></Col>
                <Col className="pt-4" md={6}>
                  <h4>KKKKKKK<br></br></h4>
                  <h5>Price: 500</h5>
                  <Button variant="info" size="sm" className="mt-5 featured-view-btn" >View product</Button>
               </Col>
          
        </Container>
    )
}

export default FeaturedProducts
