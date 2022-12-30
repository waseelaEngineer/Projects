import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';

export default function EditCategory() {

    var { id, url } = useParams();
    const navigate = useNavigate();
    const [categoryInput, setCategoryInput] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`/api/edit-category/${id}`).then(res => {
            if (res.data.status === 200) {
                setCategoryInput(res.data.category);
            }
            else {
                swal('Error', res.data.message, 'error');
                navigate(`/admin/resturant/${url}/menu`);
            }
            setLoading(false)
        });
    }, [id]);

    function handleInput(e) {
        e.persist();
        setCategoryInput({ ...categoryInput, [e.target.name]: e.target.value });
    }

    function handleCheckbox() {
        categoryInput.status === 'available' 
        ? setCategoryInput({ ...categoryInput, status: 'hidden' })
        : setCategoryInput({ ...categoryInput, status: 'available' })
    }

    function updateCategory(e) {
        e.preventDefault();

        const data = categoryInput;
        axios.put(`/api/update-category/${id}`, data).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                setErrors([]);
                navigate(`/admin/resturant/${url}/menu`);
            }
            else if (res.data.status === 422) {
                swal('Field is required', '', 'error');
                setErrors(res.data.errors);
            }
            else if (res.data.statue === 404) {
                swal('Error', res.data.message, 'error');
                navigate(`/admin/resturant/${url}/menu`);
            }
        });
    }

    if (loading) {
        return <h4>Loading edit category...</h4>
    }

    return (
        <div className='container px-4'>
            <div className='card mt-4'>

                <div className='card-header'>
                    <h4>Edit Category
                        <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>
                
                <div className='card-body'>
                    <form onSubmit={updateCategory}>

                        <div className='form-group pt-4 mb-3'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={categoryInput.name} className='form-control' />
                            <small className='text-danger'>{errors.name}</small>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <textarea name='description' onChange={handleInput} value={categoryInput.description || ''} className='form-control' ></textarea>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Hide:</label>
                            <input type='checkbox' checked={categoryInput.status === 'hidden' ? true : false} onChange={handleCheckbox} className='mx-3' />
                        </div>

                        <button type='submit' className='btn btn-primary px-4 float-end'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}