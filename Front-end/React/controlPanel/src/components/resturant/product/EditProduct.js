import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios';

export default function EditProduct() {

    const {id, url} = useParams();
    const [categoryList, setCategoryList] = useState([]);
    const [error, setError] = useState([]);
    const [picture, setPicture] = useState([]);
    const [productInput, setProductInput] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`/api/view-category/${url}`).then(res => {
            if (res.status === 200) {
                setCategoryList(res.data.category)
            }
        });

        axios.get(`/api/edit-product/${id}`).then(res => {
            if (res.data.status === 200){
                setProductInput(res.data.product);
                setLoading(false);
                setError([]);
            }
            else if (res.data.status === 404){
                swal('Error', res.data.message, 'error');
                navigate(`/admin/resturant/${url}/menu`);
            }
        });
    }, [id])

    function handleInput(e){
        setProductInput({...productInput, [e.target.name]: e.target.value});
    }
    
    function handleImage(e){
        setPicture({image: e.target.files[0] });
    }
    
    function handleCheckbox(e){
        productInput.status === 'available'
        ? setProductInput({...productInput, status: 'hidden'})
        : setProductInput({...productInput, status: 'available'})
    }

    function updateProduct(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', picture.image);
        formData.append('category_id', productInput.category_id);
        formData.append('name', productInput.name);
        formData.append('price', productInput.price);
        formData.append('description', productInput.description);
        formData.append('status', productInput.status);

        axios.post(`/api/update-product/${id}`, formData).then(res => {
            if (res.data.status === 200){
                swal('Success', res.data.message, 'success');
                setError([]);
                navigate(`/admin/resturant/${url}/menu`);
            }
            else if (res.data.status === 422){
                swal('Some fields are required', '', 'error');
                setError(res.data.errors);
            }
            else if (res.data.status === 404){
                swal('Error', res.data.message, 'error');
                navigate(`/admin/resturant/${url}/menu`);
            }
        });
    }

    if (loading){
        return <h4>Loading product...</h4>
    }

    return (
        <div className='container-fluid px-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <h4>Edit product
                        <Link className='btn btn-primary btn-sm float-end' to={`/admin/resturant/${url}/menu`}>Back</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={updateProduct} encType='multipart/form-data'>
                        
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">Details</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="image-tab" data-bs-toggle="tab" data-bs-target="#image" type="button" role="tab" aria-controls="image" aria-selected="false">Image</button>
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane mt-3 fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                                <div className='form-group mt-4 mb-3'>
                                    <label>Choose category</label>
                                    <select name='category_id' onChange={handleInput} value={productInput.category_id} className='form-control'>
                                        <option disabled value=''>...</option>
                                        {categoryList.map(category => (
                                            <option value={category.id} key={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    <p className='text-danger'>{error.category_id}</p>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Name</label>
                                    <input type='text' name='name' onChange={handleInput} value={productInput.name} className='form-control' />
                                    <p className='text-danger'>{error.name}</p>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Price</label>
                                    <input type='number' name='price' onChange={handleInput} value={productInput.price} className='form-control' />
                                    <p className='text-danger'>{error.price}</p>
                                </div>
                            </div>
                            
                            <div className="tab-pane mt-3 fade" id="image" role="tabpanel" aria-labelledby="image-tab">
                                <div className='row'>
                                    <div className='form-group mt-4 mb-3 col-sm-7'>
                                        <label>Image</label>
                                        <input type='file' name='image' onChange={handleImage} className='form-control' />
                                    </div>
                                    <div className='col-1'>
                                        <img src={`https://server.waseela.online/${productInput.image}`} width='170px' alt='Image'/>
                                    </div>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Description</label>
                                    <textarea name='description' onChange={handleInput} value={productInput.description || ''} className='form-control' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Hide:</label>
                                    <input type='checkbox' name='status' onChange={handleCheckbox} checked={productInput.status === 'hidden' ? true : false} className='mx-3' />
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-primary px-4 mt-2 float-end'>Submit</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}