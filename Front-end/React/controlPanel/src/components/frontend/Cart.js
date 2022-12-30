import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Navbar from '../../layouts/frontend/Navbar'

export default function Cart() {

    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    function increamentQty(cart_id){
        setCarts(cart => 
            cart.map(item => 
                cart_id === item.id ? {...item, product_qty: item.product_qty + 1} : item
            )
        );
        cartUpdateQty(cart_id,'inc');
    }
    function decreamentQty(cart_id){
        setCarts(cart => 
            cart.map(item => 
                cart_id === item.id ? {...item, product_qty: item.product_qty - (item.product_qty > 1 ?1 :0)} : item
            )
        );
        cartUpdateQty(cart_id,'dec');
    }

    function cartUpdateQty(cart_id, scope){
        axios.put(`/api/cartupdateqty/${cart_id}/${scope}`).then(res=>{ })
    }

    function deleteCartItem(e, cart_id){
        e.preventDefault();
        const btn = e.currentTarget;
        btn.innerText = 'Removing';

        axios.delete(`/api/cartdeleteitem/${cart_id}`).then(res=>{
            if (res.data.status === 200){
                swal('Success', res.data.message, 'success');
                btn.closest('tr').remove();
            }
            else if (res.data.status === 401){
                swal('Warning', res.data.message, 'warning');
                btn.innerText = 'remove';
            }
            else if (res.data.status === 404){
                swal('Error', res.data.message, 'error');
                btn.innerText = 'remove';
            }
        })
    }

    if (loading){
        return <h4>Loading cart...</h4>
    }

  return (
    <>
        <Navbar />
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Home / Cart</h6>
                </div>
            </div>

            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Quantity</th>
                                            <th className='text-center'>Total price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {carts.map(cart =>(

                                            <tr key={cart.id}>
                                                <td width='10%'> 
                                                    <img src={`http://localhost:8000/${cart.product.image}`} alt={cart.product.name} width='50px' height='50px' />
                                                </td>
                                                <td>{cart.product.name}</td>
                                                <td width='15%' className='text-center'>{cart.product.price}</td>
                                                <td width='15%'>
                                                    <div className='input-group'>
                                                        <button type='button' onClick={()=> decreamentQty(cart.id)} className='input-group-text'>-</button>
                                                        <div className='form-control text-center'>{cart.product_qty}</div>
                                                        <button type='button' onClick={()=> increamentQty(cart.id)} className='input-group-text'>+</button>
                                                    </div>
                                                </td>
                                                <td width='15%' className='text-center'>{cart.product_qty * cart.product.price}</td>
                                                <td width='10%'>
                                                    <button type='button' onClick={e => {deleteCartItem(e, cart.id)}} className='btn btn-danger btn-sm'>Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div >
                        <h1>{totalPrice}</h1>
                        <button onClick={()=> navigate('/checkout')}>Checkout</button>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}