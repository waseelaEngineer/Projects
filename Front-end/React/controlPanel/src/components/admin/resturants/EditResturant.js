import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios';

export default function EditResturant() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [logo, setLogo] = useState([])
  const [header, setHeader] = useState([])
  const [loading, setLoading] = useState(true);
  const [resturantInput, setResturantInput] = useState({});
  const [branches, setBranches] = useState([]);
  const [branchInput, setBranchInput] = useState({
    phone: '',
    address: '',
  });

  useEffect(() => {

    axios.get(`/api/edit-resturant/${id}`).then(res => {
      if (res.data.status === 200) {
        setResturantInput(res.data.resturant);
        setBranches(res.data.branches);
        setLoading(false);
        setError([]);
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        navigate('/admin/resturants');
      }
    });
  }, [id])

  if (loading){
    return <h4>Loading resturant edit...</h4>
  }

  function handleInput(e) {
    setResturantInput({ ...resturantInput, [e.target.name]: e.target.value });
  }

  function handleBranchInput(e){
    setBranchInput({...branchInput, [e.target.name]: e.target.value});
  }

  function handleLogo(e) {
    setLogo({ image: e.target.files[0] });
  }
  function handleHeader(e) {
    setHeader({ image: e.target.files[0] });
  }

  function handleStatusCheckbox() {
    resturantInput.status === 'active'
      ? setResturantInput({ ...resturantInput, status: 'closed' })
      : setResturantInput({ ...resturantInput, status: 'active' })
  }

  function handleLayoutCheckbox() {
    resturantInput.layout === 'en'
      ? setResturantInput({ ...resturantInput, layout: 'ar' })
      : setResturantInput({ ...resturantInput, layout: 'en' })
  }

  function addBranch(){
    if (branchInput.phone === '' || branchInput.address === ''){
      swal('Warnig', 'Phone and Address are required', 'warning');
    }
    else{
      const phoneExist = branches.some(branch => branch.phone === branchInput.phone);
      const addressExist = branches.some(branch => branch.address === branchInput.address);

      if (phoneExist && addressExist){
        swal('Warnig', 'already added', 'warning');
      }
      else{
        setBranches([...branches, {
          phone: branchInput.phone, 
          address: branchInput.address
        }]);
      }
    }
  }

  function deleteBranch(index){
    const newArray = branches.filter(branch => branch !== branches[index])
    setBranches(newArray);
  }

  function update(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('url', resturantInput.url);
    formData.append('name', resturantInput.name);
    formData.append('description', resturantInput.description);
    formData.append('currency', resturantInput.currency);
    formData.append('status', resturantInput.status);
    formData.append('layout', resturantInput.layout);
    formData.append('logo', logo.image);
    formData.append('header', header.image);

    branches.forEach((branch, idx) => {
      formData.append(`${idx}url`, resturantInput.url);
      formData.append(`${idx}phone`, branch.phone);
      formData.append(`${idx}address`, branch.address);
    });

    axios.post(`/api/update-resturant/${id}`, formData).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        setError([]);
        navigate('/admin/resturants')
      }
      else if (res.data.status === 422) {
        swal('Some fields are required', '', 'error');
        setError(res.data.errors);
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
      }
    });
  }

  return (
    <div className='container-fluid px-4'>
      <div className='card mt-4'>
        <div className='card-header'>
          <h4> Edit resturant
            <Link className='btn btn-primary btn-sm float-end' to='/admin/resturants'>Back</Link>
          </h4>
        </div>
        <div className='card-body'>
          <form onSubmit={update} encType='multipart/form-data'>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">Details</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="image-tab" data-bs-toggle="tab" data-bs-target="#image" type="button" role="tab" aria-controls="image" aria-selected="false">Image</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="branch-tab" data-bs-toggle="tab" data-bs-target="#branch" type="button" role="tab" aria-controls="branch" aria-selected="false">Branch</button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">

              <div className="tab-pane mt-3 fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                <div className='form-group row'>
                  <div className='col'>
                    <label>URL</label>
                    <input type='text' name='url' onChange={handleInput} value={resturantInput.url} className='form-control' />
                    <p className='text-danger'>{error.url}</p>
                  </div>
                  <div className='col'>
                    <label>Currency</label>
                    <input type='text' name='currency' onChange={handleInput} value={resturantInput.currency} className='form-control' />
                    <p className='text-danger'>{error.currency}</p>
                  </div>
                </div>
                <div className='form-group row'>
                    <label>Name</label>
                  <div className='col'>
                    <input type='text' name='name' onChange={handleInput} value={resturantInput.name} className='form-control' />
                    <p className='text-danger'>{error.name}</p>
                  </div>
                  <div className='col'>
                    <label>Arabic layout:</label>
                    <input type='checkbox' onChange={handleLayoutCheckbox} checked={resturantInput.layout === 'ar' ? true : false} className='mx-3' />
                    <label>Hide:</label>
                    <input type='checkbox' onChange={handleStatusCheckbox} checked={resturantInput.status === 'closed' ? true : false} className='mx-3' />
                  </div>
                </div>
              </div>

              <div className="tab-pane mt-3 fade" id="image" role="tabpanel" aria-labelledby="image-tab">
                <div className='form-group mt-4 mb-3'>
                  <label>Logo</label>
                  <input type='file' name='logo' onChange={handleLogo} className='form-control' />
                  {error.logo && <p className='text-danger'>{error.logo}</p>}
                </div>
                <div className='form-group mt-4 mb-3'>
                  <label>Header</label>
                  <input type='file' name='header' onChange={handleHeader} className='form-control' />
                  {error.header && <p className='text-danger'>Header is required</p>}
                </div>
                <div className='form-group mb-3'>
                  <label>Description</label>
                  <textarea name='description' onChange={handleInput} value={resturantInput.description || ''} className='form-control' />
                </div>
              </div>

              <div className="tab-pane mt-3 fade" id="branch" role="tabpanel" aria-labelledby="branch-tab">
                <div className='row'>
                  <div className='form-group mb-3 col'>
                    <label>Phone</label>
                    <input type='text' name='phone' onChange={handleBranchInput} className='form-control' />
                    <p className='text-danger'>{error.branch}</p>
                  </div>
                  <div className='col'>
                    <label>Adrress</label>
                    <div className='row'>
                      <div className='form-group mb-3 col-8'>
                        <input type='text' name='address' onChange={handleBranchInput} className='form-control' />
                      </div>
                      <div className='col'>
                        <div className='btn btn-primary' onClick={addBranch}>Add Branch</div>
                      </div>
                    </div>
                  </div>
                  {error[`0phone`] && <p className='text-danger'>Branch details are required</p>}
                </div>
                {branches.map( (branch, idx) => <div key={idx} className='row pb-4 px-2'>
                  <h5 className='col-6'>{branch.phone}</h5>
                  <h5 className='col-4 px-3'>{branch.address}</h5>
                  <div className='col btn btn-danger mx-4' onClick={()=> deleteBranch(idx)}>Delete</div>
                </div>)}
              </div>

            </div>

            <button type='submit' className='btn btn-primary px-4 mt-2'>Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}