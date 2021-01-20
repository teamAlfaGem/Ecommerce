import React from 'react'

import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

const AdminNavbar = () => {
    return (
        <Col md={2} className="bg-light">
           <Nav.Link href="#">Products</Nav.Link>
           <Nav.Link href="#">Products</Nav.Link>
           <Nav.Link href="#">Products</Nav.Link>
        </Col>
    )
}

export default AdminNavbar
