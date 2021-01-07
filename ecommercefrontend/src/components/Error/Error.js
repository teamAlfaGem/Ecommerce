import React from 'react'

import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'

const Error = () => {
    return (
        <div>
            <Container>
                <h1>Error- 404 <br/>
                    Sorry page not found !!
                </h1>
                <Link to="/">Home</Link>
            </Container>
        </div>
    )
}

export default Error
