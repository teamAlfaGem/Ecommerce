import React from 'react'
import { useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Products = (props) => {

    let products = useSelector((state) => state.products)

    products = props.match.params.id ? products.filter(product => product.category === props.match.params.id) : products
    
    return (
        <div>
            <Container className="products-container">
               {products.map((product, index) => (
                   <div className="m-4 product-div" key={index}>
                       <SingleProduct  product={product}/>
                    </div>
               ))}
            </Container>
        </div>
    )
}

export default Products