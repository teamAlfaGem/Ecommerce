import React from 'react'

import Container from 'react-bootstrap/Container'

const AdminHeader = () => {
    return (
        <Container className="bg-dark text-white text-center" fluid >
            <h1 className="display-3"><span style={{ fontFamily: 'Hanalei Fill'}}>E-Shop Admin</span></h1>
        </Container>
    )
}

export default AdminHeader
