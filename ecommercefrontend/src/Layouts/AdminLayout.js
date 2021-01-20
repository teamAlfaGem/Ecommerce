import React from 'react'

import AdminNavBar from '../components/AdminNavBar/AdminNavBar'

const AdminLayout = (props) => {
    return (
        <div>
            <AdminNavBar/>
            {props.children}
        </div>
    )
}

export default AdminLayout
