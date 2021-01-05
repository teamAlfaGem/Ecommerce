import React from 'react'

import Header from '../components/Header/Header'

const UsersLayout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}

export default UsersLayout
