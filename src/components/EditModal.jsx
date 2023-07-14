import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditModal({show,handleEditClose,product,handleEditChange,handleEditSave}) {
  return (
    <div>
      <Modal show={show} onHide={handleEditClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                    type="text" 
                    className="form-control "
                    value = {product.title}
                    name = "title"
                    onChange = {handleEditChange}
             
                    
                />

                <input 
                    type="text" 
                    className="form-control mt-2"
                    value = {product.description}
                    name = "description"
                    onChange = {handleEditChange}
                   
                />
                <input 
                    type="text" 
                    className="form-control mt-2"
                    value = {product.thumbnail}
                    name = "thumbnail"
                    onChange = {handleEditChange}
                    
                   
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                    Close
                </Button>
                <Button variant="primary" onClick = {(e)=>handleEditSave(e,product.id)} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
