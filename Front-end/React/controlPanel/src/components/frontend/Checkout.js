import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Navbar from '../../layouts/frontend/Navbar'

export default function Checkout() {

    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkoutInputs, setChechoutInputs] = useState({
        name: '',
        phone: '',
    });
    
    useEffect(()=>{
        axios.get(`/api/cart`).then(res=>{
            if (res.data.status === 200){
                setCarts(res.data.cart);
                setLoading(false);
            }
            else if (res.data.status === 401){  
                swal('Warning', res.data.message, 'error');
                navigate('/')
            }
        })
    },[])
    
    let totalPrice = 0;
    carts.map(cart => {
        totalPrice += cart.product_qty * cart.product.price
    });

    function handleInput(e){
        e.persist();
        setChechoutInputs({...checkoutInputs, [e.target.name]: e.target.value});
    }

    function submitOrder(e){
        // e.preventDefualt();

        const data = {
            name: checkoutInputs.name,
            phone: checkoutInputs.name,
        }

        axios.post(`/api/placeorder`, data).then(res =>{
            if (res.data.status === 200){
                swal('Success', res.data.message, 'success');
                setErrors([]);
                navigate('/');
            }
            else if (res.data.status === 422){
                swal('Field is requeired');
                setErrors(res.data.errors);
            }
        })
    }

    if (loading){
        return <h4>Loading checkout...</h4>
    }

    return (
        <>
            <Navbar />
            <div>
                <div className='py-3 bg-warning'>
                    <div className='container'>
                        <h6>Home / Checkout</h6>
                    </div>
                </div>

                <div className='py-4'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-7'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4>Basic information</h4>
                                    </div>

                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='form-group mb-3'>
                                                <label>Name</label>
                                                <input type='text' name='name' onChange={handleInput} value={checkoutInputs.name} className='form-control' />
                                                <small className='text-danger'>{errors.name}</small>
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label>Phone number</label>
                                                <input type='text' name='phone' onChange={handleInput} value={checkoutInputs.phone} className='form-control' />
                                                <small className='text-danger'>{errors.phone}</small>
                                            </div>
                                        </div>
                                        <button onClick={()=> submitOrder()} className='btn btn-primary float-end mt-3'>Send order</button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-5'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th width='50%'>Product</th>
                                            <th>price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map(cart=>(
                                            
                                            <tr key={cart.id}>
                                                <td>{cart.product.name}</td>
                                                <td>{cart.product.price}</td>
                                                <td>{cart.product_qty}</td>
                                                <td>{cart.product_qty * cart.product.price}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan='2' className='fw-bold'>Grand price</td>
                                            <td colSpan='2' className='fw-bold'>{totalPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}