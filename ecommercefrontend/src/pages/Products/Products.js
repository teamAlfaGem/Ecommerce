import React from 'react'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Products = (props) => {
    return (
        <div>
            {props.match.params.id}<br/>
            Products
            <SingleProduct />
        </div>
    )
}

export default Products
