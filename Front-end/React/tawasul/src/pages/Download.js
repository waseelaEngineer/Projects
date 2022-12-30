import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

export default function Download() {

  const [password, setPassword] = useState();

  async function exportData(){
    let users = await fetch("https://server.tawasulapp.net/api/view",{
      method:'Get',
      headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'
        }
    })
    users = await users.json()
    console.log(users)

    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(users);

    XLSX.utils.book_append_sheet( wb, ws, "data");
    XLSX.writeFile( wb, "Data.xlsx");
  }

  return (
    <div className='container py-5 text-center' dir='rtl'>
      <div className="title">
        <h2>تواصل</h2>
        <h2>تواصل</h2>
      </div>
      <div className='row justify-content-center text-end'>
        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-header'>
              <h4>تحميل البيانات</h4>
            </div>
            <div className='card-body'>
              <input name='password' className='form-control my-4' placeholder='ادخل كلمة السر لتحميل البيانات' onChange={e => setPassword(e.target.value)}/>
              {password === 'Kau@1404' && <button className='btn btn-primary float-start' onClick={exportData}>تحميل البيانات</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
