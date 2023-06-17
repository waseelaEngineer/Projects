import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StdDoctors() {

  const navigate = useNavigate(); 


  return (
    <div>
      <div className='navigation-bar'>
        <button onClick={() => navigate('/department')}>القسم</button>
        <button onClick={() => navigate('/specialization')}>التخصص</button>
        <button onClick={() => navigate('/doctors')} className='active-nav'>الدكاترة</button>
        <button onClick={() => navigate('/dates')}>المواعيد</button>
      </div>

      <div className='card mx-4 mt-5'>
        <div className='card-header'>
          <h4>جميع الدكاترة</h4>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>رقم</th>
                  <th>إسم الدكتور</th>
                  <th>إيميل الدكتور</th>
                  <th>التخصص</th>
                  <th>السيرة الذاتية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>عبد الرحمن جمال</td>
                  <td>abdulrahman@gmail.com</td>
                  <td>الكترونيات</td>
                  <td>السيرة الذاتية</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}