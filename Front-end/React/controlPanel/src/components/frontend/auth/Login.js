import React, { useState } from 'react'
import Navbar from '../../../layouts/frontend/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function Login() {

  const navigate = useNavigate();

  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  function handleInput(e) {
    e.persist();
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  }

  function loginSubmit(e) {
    e.preventDefault();

    const data = {
      email: loginInputs.email,
      password: loginInputs.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/login`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem( 'auth_token', res.data.token);
          localStorage.setItem( 'auth_name', res.data.username);
          swal('Success', res.data.message, 'success');
          res.data.role === 'admin' ? navigate('/admin/dashboard') : navigate('/');
        }
        else if (res.data.status === 401) {
          swal('Warning', res.data.message, 'warning');
        }
        else {
          setLoginInputs({ ...loginInputs, error_list: res.data.validation_errors })
        }
      });
    });
  }

  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <h4>Login</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={loginSubmit}>
                  <div className='form-group mb-3'>
                    <label>Email ID</label>
                    <input type='email' name='email' onChange={handleInput} value={loginInputs.email} className='form-control' />
                    <span className='text-danger'>{loginInputs.error_list.email}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleInput} value={loginInputs.password} className='form-control' />
                    <span className='text-danger'>{loginInputs.error_list.password}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <button type='submit' className='btn btn-primary float-end'>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
