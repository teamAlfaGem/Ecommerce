import React from 'react'

import AdminNavbar from '../components/Admin/AdminNavbar/AdminNavbar'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AdminLayout = (props) => {
    return (
        <Row>
            <AdminNavbar/>
            
            <Col>
                {props.children}
            </Col>
            
        </Row>
    )
}

export default AdminLayout
