import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function AddCategory() {

    const navigate = useNavigate();
    const {url} = useParams();
    const [categoryInput, setCategoryInput] = useState({
        name: '',
        descrip: '',
        status: 'available',
        error_list: '',
    });

    function handleInput(e) {
        setCategoryInput({ ...categoryInput, [e.target.name]: e.target.value });
    }

    function handleCheckbox() {
        categoryInput.status === 'available' 
        ? setCategoryInput({ ...categoryInput, status: 'hidden' })
        : setCategoryInput({ ...categoryInput, status: 'available' })
    }

    function submitCategory(e) {
        e.preventDefault();

        const data = {
            name: categoryInput.name,
            description: categoryInput.descrip,
            status: categoryInput.status,
        }

        axios.post(`api/add-category/${url}`, data).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                navigate(`/admin/resturant/${url}/menu`);
            }
            else if (res.data.status === 400) {
                setCategoryInput({ ...categoryInput, error_list: res.data.errors });
            }
        });
    }

    return (
        <div className='container-fluid px-4'>

            <div className='card mt-4'>

                <div className='card-header'>
                    <h4>Add Category
                        <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>
                
                <div className='card-body'>

                    <form onSubmit={submitCategory}>

                        <div className='form-group mb-3 pt-4'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={categoryInput.name} className='form-control' />
                            <p className='text-danger'>{categoryInput.error_list.name}</p>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <textarea name='descrip' onChange={handleInput} value={categoryInput.descrip} className='form-control' ></textarea>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Hide:</label>
                            <input type='checkbox' name='status' onChange={handleCheckbox} className='mx-3' />
                        </div>

                        <button type='submit' className='btn btn-primary px-4 float-end'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}