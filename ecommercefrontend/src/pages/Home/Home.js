import React from 'react'
import Hero from '../../components/Home/Hero/Hero'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedProducts from './../../components/Home/FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
        <div>
            Home
            <Hero/>

            <Container className="w-75 pt-5">
                <Row className="d-flex flex-wrap justify-content-between">
                    <Col sm={12} md={5}><FeaturedProducts/></Col>
                    <Col sm={12} md={5}><FeaturedProducts/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
