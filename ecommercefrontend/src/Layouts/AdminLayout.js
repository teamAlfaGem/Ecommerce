import React from 'react'

import AdminNavbar from '../components/Admin/AdminNavbar/AdminNavbar'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const AdminLayout = (props) => {
    return (
        <Container fluid>
            <Row>
                <AdminNavbar/>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
            
    )
}

export default AdminLayout
                
