import { useState,useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductsList from '../components/ProductsList';
import fetchData from '../services/axios.services'

import EditModal from '../components/EditModal'
import AddModal from '../components/AddModal'


function TabComponents() {
  

  const [productList,setProductList] = useState([]);
  const [editProduct,setEditProduct] = useState({});
  const [addProduct, setAddProduct] = useState({});
 
  const [userList, setUserList] = useState([]);

  
  const [key, setKey] = useState("products");

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);

  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  
  
    useEffect(() => {
        console.log(key);
        fetchData(key).then((value) => {
            key === 'products' ?setProductList(value.data[key]):setUserList(value.data[key]);
         })
    },[key]);

    const handleDelete = (e,product) => {
        //e.prevent.default();
        const filter = productList.filter((prod) => {
            return prod.id !== product.id;
        });
        console.log(filter);
        setProductList(filter);
    }
    const handleEdit = (e,product) => {
        console.log('edit');
        setEditProduct(product);
        setEditShow(true);
        console.log(editProduct);
    }

    const handleEditChange =(e) => {
       // console.log(e.target.value);
       let updateProduct = {
        ...editProduct,
        [e.target.name] : e.target.value,
       } 
        setEditProduct(updateProduct);
    }
    const handleEditSave = (e,id) => {
        const updatedProduct = productList.map((prod) => {
            return prod.id === id ? editProduct : prod;
        })
        setProductList(updatedProduct);
        setEditShow(false);
    }

    // ADD
    const handleAddShow = () => {
       // console.log('handleAddShow');
        setAddShow(true);
    }
    const handleAddChange = (e) => {
        let newProduct = {
            id: Math.random(),
            ...addProduct,
            [e.target.name]:e.target.value,
        }
        setAddProduct(newProduct);
        
    }
    console.log(addProduct);

    const handleAddSave = () => {
       productList.unshift(addProduct);
       setAddShow(false);
    }
   // console.log(productList);


  return (
    <>
        {/* {JSON.stringify(editProduct)} */}
        <div className="container">


            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="products" title="Products">
                    <ProductsList 
                        productList = {productList}
                        handleDelete = {handleDelete}
                        handleEdit = {handleEdit}
                        handleAddShow = {handleAddShow}
                    />
                </Tab>
                <Tab eventKey="users" title="Users">
                    Tab content for Profile
                </Tab>
            </Tabs>

            <EditModal 
                show = {editShow} 
                handleEditClose = {handleEditClose}
                product = {editProduct}
                handleEditChange = {handleEditChange}
                handleEditSave = {handleEditSave}
            />
            <AddModal 
                show = {addShow}
                handleAddClose = {handleAddClose }
                handleAddChange = {handleAddChange}
                handleAddSave = {handleAddSave}
            
            />


        </div>
    </>
 
  );
}

export default TabComponents;
