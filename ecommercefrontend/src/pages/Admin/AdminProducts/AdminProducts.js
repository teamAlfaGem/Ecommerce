import React, {useState} from 'react'

import AddProductsModal from '../../../components/Admin/AddProductsModal/AddProductsModal'

import Row from 'react-bootstrap/Row'

import './style.css'

const AdminProducts = () => {
    const [modalShow, setModalShow] = useState(false);

    const hideModal = () => {
        setModalShow(false)
    }

    return (
        <div>
            <Row>
                <h1>Products</h1>
                
                    <button className="addProductBtn"  onClick={() => setModalShow(true)} >
                        Add Products&nbsp;&nbsp;<i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
            
                <AddProductsModal  show={modalShow} onHide={hideModal}/>
            </Row>

        </div>
    )
}

export default AdminProducts

