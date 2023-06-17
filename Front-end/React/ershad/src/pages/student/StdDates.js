import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StdDates() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='navigation-bar'>
        <button onClick={() => navigate('/department')}>القسم</button>
        <button onClick={() => navigate('/specialization')}>التخصص</button>
        <button onClick={() => navigate('/doctors')}>الدكاترة</button>
        <button onClick={() => navigate('/dates')} className='active-nav'>المواعيد</button>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <h2>يجب عليك تسجيل الدخول لحجز المواعيد</h2>
      </div>
    </div>
  )
}