import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function AssignAddon() {

    const navigate = useNavigate();
    const {id, url } = useParams();
    const [errors, setErrors] = useState([]);
    const [products, setProducts] = useState([]);
    const [addons, setAddons] = useState([]);
    const [assignAddons, setAssignAddons] = useState([]);
    const [product_id, setProduct_id] = useState('');
    let productsNotAssinged = [];    

    useEffect(()=>{
        fetchData();
    },[])

    if (assignAddons.length !== 0){
        productsNotAssinged = products.filter(product =>{
            return !assignAddons.some(assign => parseInt(assign.product_id) === product.id && parseInt(assign.addon_id) === parseInt(id))
        })
    }
    else{
        productsNotAssinged = products;
    }

    function handleInput(e) {
        setProduct_id( e.target.value );
    }

    function fetchData(){
        axios.get(`/api/view-product/${url}`).then(res => {
            if (res.data.status === 200) {
                setProducts(res.data.products);
            }
        });
        axios.get(`/api/view-assignaddons/${url}`).then(res => {
            if (res.data.status === 200) {
                setAssignAddons(res.data.assigns);
            }
        });
        axios.get(`/api/view-addons/${url}`).then(res => {
            if (res.data.status === 200) {
              setAddons(res.data.addons);
            }
        });
    }

    function deleteAssign(e, id){
        const btn = e.currentTarget;
        btn.innerText = 'Deleting';
        axios.delete(`/api/delete-assignaddons/${id}`).then(res =>{
            fetchData(); 
        })
    }

    function submitAddon(e) {
        e.preventDefault();

        const data = {
            resturant_url: url,
            addon_id: id,
            product_id: product_id,
        }

        axios.post(`api/add-assignaddons`, data).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                setProduct_id([])
                fetchData();
            }
            else if (res.data.status === 422) {
                swal('Select a product','', 'error');
            }
        });
    }

    return (
        <div className='container-fluid px-4'>

            <div className='card mt-4'>

                <div className='card-header'>
                    <h4>{addons.length !== 0 && addons.filter(addon => addon.id === parseInt(id))[0].name}
                        <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>

                <div className='card-body'>

                    <form onSubmit={submitAddon}>
                        <div className='row pt-4 d-flex'>
                            <label>Select Product</label>
                            <div className='form-group col-10'>
                                <select name='product_id' onChange={handleInput} value={product_id} className='form-control'>
                                    <option disabled value=''>...</option>
                                    {productsNotAssinged.map(product => <option value={product.id} key={product.id}>{product.name}</option>)}
                                </select>
                                <p className='text-danger'>{errors.price}</p>
                            </div>
                            <div className='col'>
                                <button type='submit' className='btn btn-primary w-100 float-end'>Assign</button>
                            </div>
                        </div>
                    </form>
                    {assignAddons.filter(assign => parseInt(assign.addon_id) === parseInt(id)).map(assign => (
                        <div key={assign.id} className='d-flex justify-content-between col-4 my-3 align-items-center'>
                            <p className='my-auto'>{assign.product.name}</p>
                            <button onClick={(e)=> deleteAssign(e, assign.id)} className="btn btn-danger mx-3 btn-sm">Delete</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}