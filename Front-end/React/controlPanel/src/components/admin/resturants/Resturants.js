import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import swal from 'sweetalert';

export default function Resturant() {

  const [resturants, setResturants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get(`/api/view-resturants`).then(res => {
      if (res.status === 200) {
        setResturants(res.data.resturants)
      }
      setLoading(false);
    });
  }, []);

  function deleteResturant(e, id){
    const btn = e.currentTarget;
    btn.innerText = 'Deleting';

    axios.delete(`/api/delete-resturant/${id}`).then(res=>{
      if (res.data.status === 200){
        swal('Success', res.data.message, 'success');
        btn.closest('tr').remove();
      }
      else if (res.data.status === 404){
        swal('Error', res.data.message, 'error');
        btn.innerText = 'Delete';
      }
    })
  }

  if (loading){
    return <h4>Loading resturants...</h4>
  }

  return (
    <div className='card mx-4 mt-4'>

      <div className='card-header'>
        <h4>Resturant list
          <Link to='/admin/resturants/add' className='btn btn-success btn-sm float-end mx-2'>Add resturant</Link>
        </h4>
      </div>

      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>URL</th>
                <th>Name</th>
                <th>Lang</th>
                <th>Status</th>
                <th>Logo</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Enter</th>
              </tr>
            </thead>
            <tbody>
              {resturants.map(resturant => (
                <tr key={resturant.id}>
                  <td>{resturant.id}</td>
                  <td>{resturant.url}</td>
                  <td>{resturant.name}</td>
                  <td>{resturant.layout}</td>
                  <td>{resturant.status}</td>
                  <td><img src={`https://server.waseela.online/${resturant.logo}`} alt='logo' width='50px' /></td>
                  <td><Link to={`/admin/resturants/edit/${resturant.id}`} className='btn btn-primary btn-sm'>Edit</Link></td>
                  <td><button onClick={(e)=> deleteResturant(e, resturant.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                  <td><Link to={`/admin/resturant/${resturant.url}/dashboard`} className='btn btn-success btn-sm'>Enter</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}