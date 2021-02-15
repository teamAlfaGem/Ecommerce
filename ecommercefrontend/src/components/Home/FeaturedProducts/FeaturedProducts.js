import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img from '../../../images/Huawei-Mate-20-Pro.jpg'

const FeaturedProducts = () => {
    return (
        <Container>
            <Row>
                <Col><img src={img} alt="" style={{height: '30vh'}} /></Col>
                <Col>
                  <h4>KKKKKKK<br></br></h4>
                  <h5>Price: 500</h5>
                  <Button variant="info" size="sm" className="mt-5">View product</Button>
               </Col>
            </Row>
        </Container>
    )
}

export default FeaturedProducts
