import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditModal({show,handleAddClose,handleAddChange,handleAddSave}) {
  return (
    <div>
      <Modal show={show} onHide={handleAddClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder='Product title'
                    name = "title"
                    onChange = {handleAddChange}
             
                    
                />

                <input 
                    type="text" 
                    className="form-control m-2"
                    placeholder='Product description'
                    name = "description"
                    onChange = {handleAddChange}
                   
                />
                <input 
                    type="text" 
                    className="form-control m-2"
                    placeholder='Product image link'
                    name = "thumbnail"
                    onChange = {handleAddChange}
                    
                   
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleAddClose}>
                    Close
                </Button>
                <Button variant="primary" onClick = {handleAddSave} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
