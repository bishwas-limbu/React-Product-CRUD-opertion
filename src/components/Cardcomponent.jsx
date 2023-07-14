import React from 'react'

export default function Cardcomponent({product,handleDelete,handleEdit}) {
  return (
    <div>
        <div className="card" style={{width: "18rem",marginTop : '1rem', marginLeft : '1rem'}}>
            <img className="card-img-top" src={product.thumbnail} alt={product.title}  style={{ height: '9.375rem'}} />
            <div className="card-body">
                <h5 className="card-title">{product.title.length > 23 ? product.title.slice(0,23) + "..." : product.title}</h5>
                <p className="card-text">{product.description.length > 25 ? product.description.slice(0,25) + "..." : product.description}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary " onClick = {(e) => handleEdit(e,product)}>Edit Product</button>
                    <button className="btn btn-danger ms-2" onClick = {(e) => {handleDelete(e,product)}}>Delete Product</button>
                </div>
            </div>
        </div>
    </div>
  )
}
