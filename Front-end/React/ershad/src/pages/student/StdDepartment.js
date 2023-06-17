import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function StdDepartment() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='navigation-bar'>
        <button onClick={() => navigate('/department')} className='active-nav'>القسم</button>
        <button onClick={() => navigate('/specialization')}>التخصص</button>
        <button onClick={() => navigate('/doctors')}>الدكاترة</button>
        <button onClick={() => navigate('/dates')}>المواعيد</button>
      </div>


      <div className='card mx-4 mt-5'>
        <div className='card-header'>
          <h4>جميع الأقسام</h4>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>رقم</th>
                  <th>إسم القسم</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>هندسة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
