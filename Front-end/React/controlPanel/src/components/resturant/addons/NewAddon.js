import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function NewAddon() {

    const navigate = useNavigate();
    const { url } = useParams();
    const [addonInput, setAddonInput] = useState({
        name: '',
        price: '',
        status: 'available',
        error_list: '',
    });

    function handleInput(e) {
        setAddonInput({ ...addonInput, [e.target.name]: e.target.value });
    }

    function handleCheckbox() {
        addonInput.status === 'available'
            ? setAddonInput({ ...addonInput, status: 'hidden' })
            : setAddonInput({ ...addonInput, status: 'available' })
    }

    function submitAddon(e) {
        e.preventDefault();

        const data = {
            resturant_url: url,
            name: addonInput.name,
            price: addonInput.price,
            status: addonInput.status,
        }

        axios.post(`api/add-addon`, data).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                navigate(`/admin/resturant/${url}/menu`);
            }
            else if (res.data.status === 422) {
                setAddonInput({ ...addonInput, error_list: res.data.errors });
            }
        });
    }

    return (
        <div className='container-fluid px-4'>

            <div className='card mt-4'>

                <div className='card-header'>
                    <h4>New addon
                        <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>

                <div className='card-body'>

                    <form onSubmit={submitAddon}>

                        <div className='form-group mb-3 pt-4'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={addonInput.name} className='form-control' />
                            <p className='text-danger'>{addonInput.error_list.name}</p>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Price</label>
                            <input name='price' onChange={handleInput} value={addonInput.price} className='form-control' />
                            <p className='text-danger'>{addonInput.error_list.price}</p>
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