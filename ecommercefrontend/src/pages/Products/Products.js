import React from 'react'
import { useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Products = (props) => {

    let products = useSelector((state) => state.products)

    products = props.match.params.id ? products.filter(product => product.category === props.match.params.id) : products
    
    return (
        <div>
            <Container className="d-flex flex-wrap flex-row">
               {products.map((product, index) => (
                   <div className="m-4" key={index}>
                       <SingleProduct  product={product}/>
                    </div>
               ))}
            </Container>
        </div>
    )
}

export default Products

