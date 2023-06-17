import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../layouts/frontend/Navbar'
import axios from 'axios';

export default function Collection() {

  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get(`/api/getcategory`).then(res=>{
      if (res.data.status === 200){
        setCategorys(res.data.category);
        setLoading(false)
      }
    })
  },[])

  if (loading){
    return <h4>Loading category...</h4>
  }
  else{
    var categoryList = '';
    categoryList = categorys.map(category =>{
      return (
        <div key={category.id} className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <Link to={`/collection/${category.name}`}>
                <h5>{category.name}</h5>
              </Link>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <Navbar />
      <div>

        <div className='py-3 bg-warning'>
          <div className='container'>
            <h6>Category page</h6>
          </div>
        </div>

        <div className='py-3'>
          <div className='container'>
            <div className='row'>
              {categoryList}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}