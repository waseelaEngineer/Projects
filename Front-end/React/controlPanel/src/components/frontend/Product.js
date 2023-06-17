import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Navbar from '../../layouts/frontend/Navbar'
import swal from 'sweetalert';
import axios from 'axios'

export default function Product() {

    const navigate = useNavigate();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const productCount = products.length;

    useEffect(() => {
        axios.get(`/api/getproducts/${name}`).then(res => {
            if (res.data.status === 200) {
                setProducts(res.data.product_data.product);
                setCategory(res.data.product_data.category);
                setLoading(false)
            }
            else if (res.data.status === 400) {
                swal('warning', res.data.message, '');
                navigate('/collection');
            }
            else if (res.data.status === 404) {
                swal('warning', res.data.message, 'error');
                navigate('/collection');
            }
        })
    }, [])

    if (loading) {
        return <h4>Loading products...</h4>
    }
    else {
        var productList = '';

        if (productCount) {
            productList = products.map(product => {
                return (
                    <div key={product.id} className='col-md-3'>
                        <Link to={`/collection/${product.category.name}/${product.name}`}>
                            <div className='card'>
                                <img src={`http://localhost:8000/${product.image}`} className='w-100' alt='image' />
                                <div className='card-body'>
                                    <h5 className='Non-underlined'>{product.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
        else{
            productList = 
            <div className='col-md-12'>
                <h4>No products available in {category.name} category.</h4>
            </div> 
        }
    }

    return (
        <>
            <Navbar />
            <div>

                <div className='py-3 bg-warning'>
                    <div className='container'>
                        <h6>Category / {category.name}</h6>
                    </div>
                </div>

                <div className='py-3'>
                    <div className='container'>
                        <div className='row'>
                            {productList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
