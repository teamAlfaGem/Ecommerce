import React from 'react'

const Products = (props) => {
    return (
        <div>
            {props.match.params.id}<br/>
            Products
        </div>
    )
}

export default Products
