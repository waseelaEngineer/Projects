import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import swal from 'sweetalert';

export default function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`/api/view-users`).then(res => {
      if (res.status === 200) {
        setUsers(res.data.users)
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h4>Loading users...</h4>
  }

  return (
    <div className='card mx-4 mt-4'>

      <div className='card-header'>
        <h4>Users list</h4>
      </div>

      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role as</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role_as}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}