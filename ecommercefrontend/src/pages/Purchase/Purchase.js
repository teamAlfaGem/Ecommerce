import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Purchase = () => {

    const history = useHistory();
    
    const cartProducts = useSelector((state) => state.cartProducts);
    
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zip: 0,
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    })

    const handleChange = (e) => {
        setFormData(data => ({...data, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const prodIds = cartProducts.map(items => items.productId)
        let price = 0;
        for (let i = 0; i < cartProducts.length; i++){
          price += cartProducts[i].price * cartProducts[i].qty
        }
        
        try {
            const postData = {...formData, productIds: prodIds, amount: price, userId: JSON.parse(sessionStorage.getItem('user')).id }
           
            const response = await axios.post(`${process.env.REACT_APP_API}/purchased/savepurchased`, postData)
            
            toast.success(response.data.message)
            history.push('/')
        } catch (error) {
            toast.error('transaction failed')
        }
    }
    return (
        <div>
            <h1>Purchase page</h1>

            <Container className="w-50 bg-light p-5 mb-5" style={{borderRadius: '15px'}}>

                <Container className="d-flex flex-direction-row mb-4">
                <div >
                    <h5>Items purchased: </h5>
                
                </div >
                <div className="pl-3">
                    {cartProducts.map((item, index) => (
                        <li key={index} style={{listStyleType: 'none'}}><h5>{item.productName} X {item.qty}</h5></li>
                    ))}
                
                </div >

                </Container>
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" onChange={handleChange}/>
                    </Form.Group>

                    <span className="d-flex flex-wrap">
                        <span className="w-75 d-flex flex-direction-row justify-content-between">
                            
                            <Form.Group style={{width: '45%'}}>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" onChange={handleChange}/>
                            </Form.Group>
                            
                            <Form.Group style={{width: '45%'}}>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="state" onChange={handleChange}/>
                            </Form.Group>

                        </span>

                        <Form.Group>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="number" name="zip" onChange={handleChange}/>
                        </Form.Group>

                    </span>
                    
                    <Form.Group className="mt-5">
                        <Form.Label>Card Holder's Name</Form.Label>
                        <Form.Control type="text" name="cardName" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mt-5">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" name="cardNumber" onChange={handleChange}/>
                    </Form.Group>
                    
                    <span className="w-75 d-flex flex-direction-row justify-content-between">
                        <Form.Group>
                            <Form.Label>Expire date</Form.Label>
                            <Form.Control type="date" name="expDate" onChange={handleChange}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="number" name="cvv" onChange={handleChange}/>
                        </Form.Group>

                    </span>
                    
                    <Button variant="primary" type="submit" className="my-5">
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default Purchase
