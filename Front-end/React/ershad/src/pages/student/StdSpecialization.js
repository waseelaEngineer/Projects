import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StdSpecialization() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='navigation-bar'>
        <button onClick={() => navigate('/department')}>القسم</button>
        <button onClick={() => navigate('/specialization')} className='active-nav'>التخصص</button>
        <button onClick={() => navigate('/doctors')}>الدكاترة</button>
        <button onClick={() => navigate('/dates')}>المواعيد</button>
      </div>

      <div className='card mx-4 mt-5'>
        <div className='card-header'>
          <h4>جميع التخصصات</h4>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>رقم</th>
                  <th>إسم القسم</th>
                  <th>إسم التخصص</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>هندسة</td>
                  <td>الكترونيات</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
