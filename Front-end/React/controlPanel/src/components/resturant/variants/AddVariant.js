import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function AddVariant() {

    const navigate = useNavigate();
    const { url } = useParams();
    const [productList, setProductList] = useState([]);
    const [errors, setErrors] = useState([]);
    const [variantInput, setVariantInput] = useState({
        product_id: '',
        name: '',
        price: '',
    });

    useEffect(() => {
        axios.get(`/api/view-product/${url}`).then(res => {
            if (res.data.status === 200) {
                setProductList(res.data.products);
            }
        });
    }, [])

    function handleInput(e) {
        setVariantInput({ ...variantInput, [e.target.name]: e.target.value });
    }

    function submitVariant(e) {
        e.preventDefault();

        const data = {
            resturant_url: url,
            product_id: variantInput.product_id,
            name: variantInput.name,
            price: variantInput.price,
        }

        axios.post(`api/add-variant`, data).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                navigate(`/admin/resturant/${url}/menu`);
            }
            else if (res.data.status === 422) {
                setErrors(res.data.errors);
            }
        });
    }

    return (

        <div className='container-fluid px-4'>

            <div className='card mt-4'>

                <div className='card-header'>
                    <h4>Add variant
                        <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>

                <div className='card-body'>

                    <form onSubmit={submitVariant}>

                        <div className='form-group my-2'>
                            <label>Choose product</label>
                            <select name='product_id' onChange={handleInput} value={variantInput.product_id} className='form-control'>
                                <option disabled value=''>...</option>
                                {productList.map(product => (
                                    <option value={product.id} key={product.id}>{product.name}</option>
                                ))}
                            </select>
                            <p className='text-danger'>{errors.product_id}</p>
                        </div>
                        <div className='form-group my-2'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={variantInput.name} className='form-control' />
                            <p className='text-danger'>{errors.name}</p>
                        </div>
                        <div className='form-group my-2'>
                            <label>Price</label>
                            <input type='number' name='price' onChange={handleInput} value={variantInput.price} className='form-control' />
                            <p className='text-danger'>{errors.price}</p>
                        </div>

                        <button type='submit' className='btn btn-primary px-4 float-end'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
