import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

  return (
    <div className='header'>
      <h2 onClick={() => navigate('/department')}>ارشدني</h2>
      <div>
          <button onClick={() => navigate('/login')}>تسجيل الدخول</button>
          <button onClick={() => navigate('/register')}>إنشاء حساب</button>
      </div>
    </div>
  )
}