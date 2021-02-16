import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import SingleProductInCart from '../../components/SingleProductInCart/SingleProductInCart'
import { getCartProducts } from './../../actions/cart';

const Cart = () => {
    
    const history = useHistory()

    const dispatch = useDispatch()

    let cartProducts = useSelector((state) => state.cartProducts)

    const getTotalPrice = () => {
        let price = 0;
        for (let i = 0; i < cartProducts.length; i++){
          price += cartProducts[i].price * cartProducts[i].qty
        }
      
        return price
      }

    useEffect(() => {
        dispatch(getCartProducts())
      }, [dispatch])

    const ifCartProductsIsEmpty = (
        <h3 className="pt-5">
            <i>No Products in cart...</i>
        </h3>
    )

    const ifCartProductsIsNotEmpty = (
        <div className="d-flex flex-wrap flex-row">
                {cartProducts.map((product, index) => (
                    <div className="m-4" key={index} >
                        <SingleProductInCart product={product}/>
                    </div>  
                ))}
            </div>
    )
                  
            
    console.log(cartProducts);
    return (
        <Container className="mt-2">
            <Row className="d-flex flex-row justify-content-between">
                <h1>Total Price: {getTotalPrice()}</h1>
                <Button variant="success" className="mt-3 px-5" onClick={() => { history.push('/purchase') }}>Buy</Button>
            </Row>
            
            {cartProducts.length === 0 ? (ifCartProductsIsEmpty) : (ifCartProductsIsNotEmpty)}

           
        </Container>
    )
}

export default Cart