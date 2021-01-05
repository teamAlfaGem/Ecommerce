import React from 'react'

import NavBar from '../components/NavBar/NavBar'

const PageLayout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
            
        </div>
    )
}

export default PageLayout
