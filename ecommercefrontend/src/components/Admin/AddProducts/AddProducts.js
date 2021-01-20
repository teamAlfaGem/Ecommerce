import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddProducts = () => {
    return (
        <div>
            <Form className="w-25">
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                    <option>Phones</option>
                    <option>Laptops</option>
                    <option>Pen drives</option>
                    <option>Tv</option>
                    <option>Consoles</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted mb-1">
                        Keywords should be seperated with a space and a #                      
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.File  label="Add Image" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddProducts
