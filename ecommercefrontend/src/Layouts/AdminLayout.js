import React from 'react'

import AdminHeader from '../components/AdminHeader/AdminHeader'

const AdminLayout = (props) => {
    return (
        <div>
            <AdminHeader/>
            {props.children}
        </div>
    )
}

export default AdminLayout
