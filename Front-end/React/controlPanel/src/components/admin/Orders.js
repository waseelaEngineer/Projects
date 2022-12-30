import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import swal from 'sweetalert';

export default function Orders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`/api/view-orders`).then(res => {
      if (res.status === 200) {
        setOrders(res.data.orders)
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h4>Loading orders...</h4>
  }

  return (
    <div className='card mx-4 mt-4'>

      <div className='card-header'>
        <h4>Orders list</h4>
      </div>

      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Resturant</th>
                <th>Price</th>
                <th>Currency</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.resturant_url}</td>
                  <td>{order.price}</td>
                  <td>{order.currency}</td>
                  <td>{order.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}