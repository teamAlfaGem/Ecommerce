import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img from '../../../images/Huawei-Mate-20-Pro.jpg'

const FeaturedProducts = ({product}) => {
    return (
        <Container className="featured-products-card mt-4">
           
                <Col className="img-col" lg={6} md={12} sm={12}>
                    <img src={product.uploadDir} alt="" />
                </Col>
                <Col className="info-col" lg={6} md={12} sm={12}>
                  <h4>{product.pname}<br></br></h4>
                  <h5>Price: {product.price}</h5>
                  
                  <Button 
                    variant="info" 
                    size="sm" 
                    className="featured-view-btn"
                    href={(`/products/single-product/${product.id}`)} 
                    >
                        View product
                    </Button>
               </Col>
          
        </Container>
    )
}

export default FeaturedProducts
