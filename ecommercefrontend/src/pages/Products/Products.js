import React from 'react'

import Container from 'react-bootstrap/Container'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Products = (props) => {

    return (
        <div>
            {props.match.params.id}<br/>
                Products
            <Container className="d-flex flex-row flex-wrap justify-content-around">
                <div className="mb-5">
                    <SingleProduct />
                </div>
                <div>
                    <SingleProduct />
                </div>
                <div>
                    <SingleProduct />
                </div>
                <div>
                    <SingleProduct />
                </div>
                <div>
                    <SingleProduct />
                </div>
                <div>
                    <SingleProduct />
                </div>
            </Container>
        </div>
    )
}

export default Products

