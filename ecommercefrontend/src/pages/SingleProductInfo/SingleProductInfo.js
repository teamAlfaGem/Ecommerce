import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ProductInfo from '../../components/SingleProductInfo/ProductInfo'

const SingleProductInfo = (props) => {
    const [product, setProduct] = useState({});
    const productId = props.match.params.id;

    // const product = useSelector(state => state.products).filter(product => product.id == parseInt(productId))[0]

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/product/getproduct/byid/${productId}`); 
                console.log(response);
                setProduct(response.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        getProductById()
    }, [])

    return (
        <ProductInfo 
            id={product.id}
            img={product.uploadDir}
            name={product.pname}
            description={product.description}
            price={product.price}
            />
    )
}

export default SingleProductInfo
