import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Purchase = () => {
    return (
        <div>
            <h1>Purchase page</h1>

            <Form>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Expire date</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Expire date</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Purchase
