import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddProducts = () => {
    const [product, setProduct] = useState({
        pname: "",
        category: "",
        brand: "",
        price: null,
        description: "",
        keywords: "",
        image: null,
    }) 

    const handleChange = (e) => {
        setProduct(product => ( { ...product, [e.target.name]: e.target.value } ))
    }

    const handleFileChange = (e) => {
        setProduct(product => ( { ...product, image: e.target.files[0] } ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Form className="w-25" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="pname" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" onChange={handleChange} name="category">
                    <option>Phones</option>
                    <option>Laptops</option>
                    <option>Pen drives</option>
                    <option>Tv</option>
                    <option>Consoles</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="brand"/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onChange={handleChange} name="price"/>
                </Form.Group>
                
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={handleChange} name="description"/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Keywords</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="keywords"/>
                    <Form.Text className="text-muted mb-1">
                        Keywords should be seperated with a space and a #                      
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.File  label="Add Image" onChange={handleFileChange} name="image"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddProducts
