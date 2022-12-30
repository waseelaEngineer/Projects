import React from 'react'
import logo from '../images/logo.png'
import colors from '../images/colors.jpeg'

export default function Login() {
  return (
    <div >
      {/* <img src={colors}></img> */}
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <img src={logo} className='logo'/>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <h4>تسجيل الدخول</h4>
              </div>
              <div className='card-body'>
                <input className='form-control my-4' placeholder='الإيميل' />
                <input className='form-control my-4' placeholder='كلمة المرور' />
                <button className='btn btn-primary float-start'>تسجيل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
