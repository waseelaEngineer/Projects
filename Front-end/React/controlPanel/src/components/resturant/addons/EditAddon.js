import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function EditAddon() {

  const navigate = useNavigate();
  const { id, url } = useParams();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [addonInput, setAddonInput] = useState({});

  useEffect(() => {
    axios.get(`/api/edit-addon/${id}`).then(res => {
      if (res.data.status === 200) {
        setAddonInput(res.data.addon);
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        navigate(`/admin/resturant/${url}/menu`);
      }
      setLoading(false)
    });

  }, [])

  // useEffect(()=>{
  //   console.log(addonInput);
  // },[addonInput])

  function handleInput(e) {
    setAddonInput({ ...addonInput, [e.target.name]: e.target.value });
  }

  function handleCheckbox() {
    addonInput.status === 'available'
      ? setAddonInput({ ...addonInput, status: 'hidden' })
      : setAddonInput({ ...addonInput, status: 'available' })
  }

  function submitAddon(e) {
    e.preventDefault();

    const data = addonInput;

    axios.post(`api/update-addon/${id}`, data).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        navigate(`/admin/resturant/${url}/menu`);
      }
      else if (res.data.status === 422) {
        swal('Field is required', '', 'error');
        setErrors(res.data.errors);
      }
      else if (res.data.statue === 404) {
        swal('Error', res.data.message, 'error');
        navigate(`/admin/resturant/${url}/menu`);
      }
    });
  }

  if (loading) {
    return <h4>Loading edit addon...</h4>
  }

  return (
    <div className='container-fluid px-4'>

      <div className='card mt-4'>

        <div className='card-header'>
          <h4>Edit addon
            <Link to={`/admin/resturant/${url}/menu`} className='btn btn-primary btn-sm float-end'>Back</Link>
          </h4>
        </div>

        <div className='card-body'>

          <form onSubmit={submitAddon}>

            <div className='form-group mb-3 pt-4'>
              <label>Name</label>
              <input type='text' name='name' onChange={handleInput} value={addonInput.name} className='form-control' />
              {/* <p className='text-danger'>{addonInput.error_list.name}</p> */}
            </div>
            <div className='form-group mb-3'>
              <label>Price</label>
              <input name='price' onChange={handleInput} value={addonInput.price} className='form-control' />
              {/* <p className='text-danger'>{addonInput.error_list.price}</p> */}
            </div>
            <div className='form-group mb-3'>
              <label>Hide:</label>
              <input type='checkbox' checked={addonInput.status === 'hidden' && true} name='status' onChange={handleCheckbox} className='mx-3' />
            </div>

            <button type='submit' className='btn btn-primary px-4 float-end'>Update</button>
          </form>
        </div>
      </div>

    </div>
  )
}