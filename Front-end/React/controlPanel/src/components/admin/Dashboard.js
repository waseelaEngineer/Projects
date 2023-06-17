import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import swal from 'sweetalert';
import axios from 'axios'

export default function Dashboard() {

  const [resturants, setResturants] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    axios.get(`/api/view-users`).then(res => {
      if (res.status === 200) {setUsers(res.data.users)}
    });

    axios.get(`/api/view-orders`).then(res => {
      if (res.status === 200) {setOrders(res.data.orders)}
    });

    axios.get(`/api/view-resturants`).then(res => {
      if (res.status === 200) {setResturants(res.data.resturants)}
    });
  },[])

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body"><i className="fa-solid fa-utensils"></i> Resturants
              <h4 className='float-end'>{resturants.length}</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/resturants">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body"><i className="fa-solid fa-book"></i> Orders
             <h4 className='float-end'>{orders.length}</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/orders">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body"><i className="fas fa-user fa-fw"></i> Users
             <h4 className='float-end'>{users.length}</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/users">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body"><i className="fa-solid fa-trash"></i> Trash
             <h4 className='float-end'>0</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-area me-1"></i>
              Area Chart Example
            </div>
            <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-bar me-1"></i>
              Bar Chart Example
            </div>
            <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
          </div>
        </div>
      </div>
    </div>
  )
}