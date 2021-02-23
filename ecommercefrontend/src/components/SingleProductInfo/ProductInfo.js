import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductInfo = ({name, img, description, price}) => {
    
    const descriptionsArray = String(description).split(',');
    console.log(descriptionsArray);
  
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
                    <Button variant="danger" className="prod-info-add-to-cart">Add to cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductInfo;
