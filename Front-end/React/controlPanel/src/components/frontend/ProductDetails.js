import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Navbar from '../../layouts/frontend/Navbar'
import swal from 'sweetalert';
import axios from 'axios'

export default function ProductDetails() {

    const navigate = useNavigate();
    const { category_name, product_name } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`/api/viewproduct/${category_name}/${product_name}`).then(res => {
            if (res.data.status === 200) {
                setProducts(res.data.product);
                setLoading(false)
            }
            else if (res.data.status === 404) {
                swal('warning', res.data.message, 'error');
                navigate('/collection');
            }
        })
    }, [category_name, product_name])

    function increaseQuantity(){
        setQuantity(quantity + 1);
    }
    function decreaseQuantity(){
        quantity > 1 && setQuantity(quantity - 1);
    }

    function addToCart(e){
        // e.preventDefault();

        const data = {
            product_id: products.id,
            product_qty: quantity,
        }

        axios.post(`/api/addtocart`, data).then(res => {
            if (res.data.status === 201){
                swal('Success', res.data.message, 'success');
            }
            else if (res.data.status === 409){
                swal('Warning', res.data.message, 'warning');
            }
            else if (res.data.status === 401){
                swal('Error', res.data.message, 'error');
            }
            else if (res.data.status === 404){
                swal('Warning', res.data.message, 'warning');
            }
        })
    }

    if (loading) {
        return <h4>Loading product details...</h4>
    }

    return (
        <>
            <Navbar />
            <div>

                <div className='py-3 bg-warning'>
                    <div className='container'>
                        {products.length !== 0 && <h6>collection / {products.category.name} / {products.name}</h6>}
                    </div>
                </div>

                <div className='py-3'>
                    <div className='container mt-5'>
                        <div className='row'>
                            
                            <div className='col-md-4 border-end'>
                                <img src={`http://localhost:8000/${products.image}`} alt='image' className='w-100' />
                            </div>

                            <div className='col-md-8'>
                                <p>ID: {products.id}</p>
                                <p>Category: {products.category.name}</p>
                                <p>Name: {products.name}</p>
                                <p>Price: {products.price}<small className='px-2'>{products.currency}</small></p>
                                <p>Description: {products.description}</p>
                                <p>Status: {products.status}</p>
                                <div className='col-md-3 mt-3'>
                                    <div className='input-group'>
                                        <button onClick={()=>{ decreaseQuantity() }} className='input-group-text'>-</button>
                                        <div className='form-control text-center'>{quantity}</div>
                                        <button onClick={()=>{ increaseQuantity() }} className='input-group-text'>+</button>
                                    </div>
                                </div>
                                <button onClick={()=> addToCart() } className='btn btn-primary mt-3'>Add to cart</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}