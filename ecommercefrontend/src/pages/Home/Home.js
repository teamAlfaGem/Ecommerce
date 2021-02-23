import React from 'react'
import Hero from '../../components/Home/Hero/Hero'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedProducts from './../../components/Home/FeaturedProducts/FeaturedProducts';
import { useSelector } from 'react-redux';

const Home = () => {

    const products = useSelector((state) => state.products)
    console.log(products)
    const phones = products.filter(product => product.featured === true && product.category === 'phones')
    const consoles = products.filter(product => product.featured === true && product.category === 'consoles')
    const laptops = products.filter(product => product.featured === true && product.category === 'laptops')

    return (
        <div>
            <Hero/>
            <Container className="w-75 pt-5 mb-4">
                <h3 className="mb-4">Best Phones</h3>
                <Row className="d-flex flex-wrap justify-content-between">
                   
                    {phones.map((product, index) => (
                        <Col sm={12} md={5}><FeaturedProducts product={product}/></Col>
                    ))}
                </Row>
            </Container>

            <Container className="w-75 pt-5 mb-4">
                <h3 className="mb-4">Awesome Laptops for your work</h3>
                <Row className="d-flex flex-wrap justify-content-between">
                   
                    {laptops.map((product, index) => (
                        <Col sm={12} md={5}><FeaturedProducts product={product}/></Col>
                    ))}
                </Row>
            </Container>

            <Container className="w-75 pt-5 mb-4">
                <h3 className="mb-4">Great Consoles for gaming</h3>
                <Row className="d-flex flex-wrap justify-content-between">
                   
                    {consoles.map((product, index) => (
                        <Col sm={12} md={5}><FeaturedProducts product={product}/></Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home
