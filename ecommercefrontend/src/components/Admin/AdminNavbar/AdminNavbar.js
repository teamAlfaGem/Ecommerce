import React from 'react'

import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


import './style.css'

const AdminNavbar = () => {
    return (
        <Col md={2} className="menu d-flex flex-column text-center">
            <h1 className="admin-logo">E-Shop</h1>
           <Nav.Link className="link" href="/admin/home">Home</Nav.Link>
           <Nav.Link className="link" href="/admin/products">Products</Nav.Link>
           <Nav.Link className="link" href="/admin/orders">Orders</Nav.Link>
        </Col>
    )
}

export default AdminNavbar

