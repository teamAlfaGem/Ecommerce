import React from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FeaturedProducts = ({product}) => {
    return (
        <Container className="featured-products-card mt-4">
           
                <Col className="img-col" lg={6} md={12} sm={12}>
                    <img src={product.uploadDir} alt="" />
                </Col>
                <Col className="info-col" lg={6} md={12} sm={12}>
                  <span className="mt-2">
                    <h4>{product.pname}<br></br></h4>
                    <h5>Price: {product.price}</h5>
                  </span>
                  
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
