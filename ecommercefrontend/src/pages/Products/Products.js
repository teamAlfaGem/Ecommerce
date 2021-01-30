import React from 'react'
import { useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Products = (props) => {

    let products = useSelector((state) => state.products)

    products = props.match.params.id ? products.filter(product => product.category === props.match.params.id) : products
    
    return (
        <div>
            {props.match.params.id}<br/>
                Products
            <Container className="d-flex flex-row flex-wrap justify-content-around">
               {products.map((product, index) => (
                   <SingleProduct key={index} product={product}/>
               ))}
            </Container>
        </div>
    )
}

export default Products

