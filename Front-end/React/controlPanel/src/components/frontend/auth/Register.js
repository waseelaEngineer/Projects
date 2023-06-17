import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar'
import swal from 'sweetalert'
import axios from 'axios';

export default function Register() {

  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  })

  function handleInput(e) {
    e.persist();
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
  }

  function registerSubmit(e) {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      role: 0,
      password: registerInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => {
        if (res.data.status === 200){
          localStorage.setItem( 'auth_token', res.data.token);
          localStorage.setItem( 'auth_name', res.data.username);
          swal('Success', res.data.massage, 'success');
          navigate('/');
        }
        else{
          setRegisterInput({ ...registerInput, error_list: res.data.validation_errors});
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
                <h4>Register</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={registerSubmit}>
                  <div className='form-group mb-3'>
                    <label>Full Name</label>
                    <input name='name' onChange={handleInput} value={registerInput.name} className='form-control' />
                    <span className='text-danger'>{registerInput.error_list.name}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <label>Email ID</label>
                    <input name='email' onChange={handleInput} value={registerInput.email} className='form-control' />
                    <span className='text-danger'>{registerInput.error_list.email}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <label>Password</label>
                    <input name='password' onChange={handleInput} value={registerInput.password} className='form-control' />
                    <span  className='text-danger'>{registerInput.error_list.password}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <button type='submit' className='btn btn-primary float-end'>Register</button>
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
