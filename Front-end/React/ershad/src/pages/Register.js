import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Register() {

  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  })

  const [user, setUser] = useState('');

  function handleInput(e) { }

  function registerSubmit(e) { }
  
  return (
    <div>
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <img src={logo} className='logo' />
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <h4>إنشاء حساب</h4>
              </div>
              <div className='card-body'>
                <select className='form-control my-3 text-secondary' defaultValue={user} onChange={e => setUser(e.target.value)}>
                  <option hidden>إختر نوع الحساب...</option>
                  <option value='supervisor'>مشرف</option>
                  <option value='doctor'>دكتور</option>
                  <option value='student'>طالب</option>
                </select>

                {user == 'supervisor' && (<>
                  <input className='form-control my-4' placeholder='إلاسم' />
                  <input className='form-control my-4' placeholder='الإيميل' />
                  <input className='form-control my-4' placeholder='كلمة المرور' />
                </>)}
                {user == 'doctor' && (<>
                  <input className='form-control my-4' placeholder='إلاسم' />
                  <input className='form-control my-4' placeholder='الإيميل' />
                  <input className='form-control my-4' placeholder='كلمة المرور' />
                  <input className='form-control my-4' placeholder='التخصص' />
                  <input className='form-control my-4' placeholder='السيرة الذاتية' />
                  <label>إرفاق الصورة الشخصية</label>
                  <input className='form-control my-4' type='file' />
                </>)}
                {user == 'student' && (<>
                  <input className='form-control my-4' placeholder='إلاسم' />
                  <input className='form-control my-4' placeholder='الإيميل' />
                  <input className='form-control my-4' placeholder='كلمة المرور' />
                </>)}
                <button className='btn btn-primary float-start'>تسجيل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
