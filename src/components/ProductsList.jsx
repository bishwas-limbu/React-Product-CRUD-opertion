import React from 'react'
import Cardcomponent from '../components/Cardcomponent';
import Button from 'react-bootstrap/Button';

export default function ProductsList({productList,handleDelete,handleEdit,handleAddShow}) {
  return (
    <>
        <Button className='ms-5' onClick = {handleAddShow} >Add Product</Button>
        <div className='d-flex justify-content-start flex-wrap'  style={{ margin: '0rem 2rem 2rem 2rem'}}>
            {
                productList !== undefined && productList.length > 0 &&
                    productList.map((product) => {
                        return (
                            <Cardcomponent 
                                product = {product} 
                                key = {product.id}
                                handleDelete = {handleDelete}
                                handleEdit = {handleEdit}
                            />
                        );
                    })
            }
        </div>
  
    </>
  )

}
