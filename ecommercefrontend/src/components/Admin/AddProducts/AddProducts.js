import React, { useState } from 'react'
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify';

const AddProducts = () => {
    const [product, setProduct] = useState({
        pname: "",
        category: "",
        brand: "",
        price: 0,
        description: "",
        imageName: "",
        uploadDir: "",
        keywords: "",
        file: null
    })

    const handleChange = (e) => {

        setProduct(product => ( { ...product, [e.target.name]: e.target.value } ))

    }

    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        setProduct(product => ( { ...product, file: e.target.files[0] } ))
    }



    const handleSubmit = async (e) => {
        console.log(product)
        e.preventDefault();

        let formData = new FormData();

        formData.append('file', product.file, product.file.name)
        formData.append('file', product.file)
        formData.append('pname', product.pname)
        formData.append('category',product.category)
        formData.append('brand', product.brand)
        formData.append('price', product.price)
        formData.append('description', product.description)
        formData.append('imageName',product.imageName)
        formData.append('uploadDir',product.uploadDir)
        formData.append('keywords', product.keywords)

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_PRODUCT}/saveproduct`, formData)
            console.log(response)
            toast.success('product added !!')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <Form className="w-75 m-auto" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="pname" value={product.pname}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" onChange={handleChange} name="category" >
                        <option >None</option>
                        <option value="phones">Phones</option>
                        <option value="laptops">Laptops</option>
                        <option value="pen-drives">Pen drives</option>
                        <option value="tv">Tv</option>
                        <option value="consoles">Consoles</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="brand" value={product.brand}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onChange={handleChange} name="price" value={product.price}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={handleChange} name="description" value={product.description}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Keywords</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="keywords" value={product.keywords}/>
                    <Form.Text className="text-muted mb-1">
                        Keywords should be seperated with a space and a #
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.File  label="Add Image" onChange={handleFileChange} name="image" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddProducts
