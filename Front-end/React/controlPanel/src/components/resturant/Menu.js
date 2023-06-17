import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';

export default function ViewProduct() {

  const { url } = useParams();
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [variants, setVariants] = useState([]);
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  function fetchData() {
    axios.get(`/api/view-category/${url}`).then(res => {
      if (res.status === 200) {
        setCategorys(res.data.category)
      }
    });

    axios.get(`/api/view-product/${url}`).then(res => {
      if (res.data.status === 200) {
        setProducts(res.data.products);
      }
    });

    axios.get(`/api/view-variant/${url}`).then(res => {
      if (res.data.status === 200) {
        setVariants(res.data.variants);
      }
    });

    axios.get(`/api/view-addons/${url}`).then(res => {
      if (res.data.status === 200) {
        setAddons(res.data.addons);
      }
    });
  };

  function deleteCategory(e, id) {
    e.preventDefault();

    const btn = e.currentTarget;
    btn.innerText = 'Deleting';

    axios.delete(`/api/delete-category/${id}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        fetchData()
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        btn.innerText = 'Delete';
      }
    });
  }

  function deleteVariant(e, id) {
    e.preventDefault();

    const btn = e.currentTarget;
    btn.innerText = 'Deleting';

    axios.delete(`/api/delete-variant/${id}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        fetchData()
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        btn.innerText = 'Delete';
      }
    });
  }

  function deleteProduct(e, id) {

    var btn = e.currentTarget;
    btn.innerText = 'Deleteing';

    axios.delete(`/api/delete-product/${id}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        btn.closest('tr').remove();
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        btn.innerText = 'Delete';
      }
    })
  }

  function deleteAddon(e, id) {

    var btn = e.currentTarget;
    btn.innerText = 'Deleteing';

    axios.delete(`/api/delete-addon/${id}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        fetchData();
      }
      else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        btn.innerText = 'Delete';
      }
    })
  }

  return (

    <div className='m-4'>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="menu-tab" data-bs-toggle="tab" data-bs-target="#menu" type="button" role="tab" aria-controls="menu" aria-selected="true">Menu</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="addons-tab" data-bs-toggle="tab" data-bs-target="#addons" type="button" role="tab" aria-controls="addons" aria-selected="false">Add ons</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="variants-tab" data-bs-toggle="tab" data-bs-target="#variants" type="button" role="tab" aria-controls="variants" aria-selected="false">Variants</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">

        <div className="tab-pane mt-3 py-3 fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
          {/* menu */}
          <div className='mb-4 d-flex gap-3'>
            <Link to={`/admin/resturant/${url}/category/add`} className='btn btn-success col-sm-2'>Add category</Link>
            <Link to={`/admin/resturant/${url}/product/add`} className='btn btn-success col-sm-2'>Add product</Link>
          </div>

          {categorys.map(category => (
            <div key={category.id} className='card mb-3'>
              <div className='card-header'>
                <h4>{category.name}
                  <button type='button' onClick={e => deleteCategory(e, category.id)} className='btn btn-danger btn-sm float-end'>Delete</button>
                  <Link to={`/admin/resturant/${url}/category/edit/${category.id}`} className='btn btn-primary btn-sm float-end mx-2'>Edit</Link>
                </h4>
              </div>
              {products.length !== 0 && products.filter(product => {
                return parseInt(product.category_id) === category.id
              }).length !== 0 &&
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Image</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>

                        {products.length !== 0 && products.filter(product => {
                          return parseInt(product.category_id) === category.id
                        }).map(product => {
                          return (
                            <tr key={product.id}>
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>{product.price}</td>
                              <td>{product.status}</td>
                              <td><img src={`https://server.waseela.online/${product.image}`} width='50px' alt='Image' /></td>
                              <td><Link to={`/admin/resturant/${url}/product/edit/${product.id}`} className='btn btn-primary btn-sm'>Edit</Link></td>
                              <td><button type='button' onClick={e => deleteProduct(e, product.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                          )
                        })}

                      </tbody>
                    </table>
                  </div>
                </div>}
            </div>
          ))}
        </div>

        <div className="tab-pane mt-3 py-3 fade" id="addons" role="tabpanel" aria-labelledby="addons-tab">
          {/* addons */}
          <div className='mb-4 d-flex gap-3'>
            <Link to={`/admin/resturant/${url}/addons/add`} className='btn btn-success col-sm-2'>New add on</Link>
          </div>

          {addons.map(addon => (
            <div key={addon.id} className='card mb-3'>
              <div className='card-header'>
                <h4>{addon.name}
                  <Link to={`/admin/resturant/${url}/addons/assign/${addon.id}`} className='btn btn-success btn-sm float-end'>Assign</Link>
                  <button type='button' onClick={e => deleteAddon(e, addon.id)} className='btn btn-danger btn-sm float-end mx-2'>Delete</button>
                  <Link to={`/admin/resturant/${url}/addons/edit/${addon.id}`} className='btn btn-primary btn-sm float-end '>Edit</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="tab-pane mt-3 py-3 fade" id="variants" role="tabpanel" aria-labelledby="variants-tab">
          {/* variants */}
          <Link to={`/admin/resturant/${url}/variant/add`} className='btn btn-success col-sm-2'>Add variant</Link>

          <div className='table-responsive mt-3'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                {variants.length !== 0 && variants.map(variant => {
                  return (
                    <tr key={variant.id}>
                      <td>{variant.id}</td>
                      <td>{variant.product.name}</td>
                      <td>{variant.name}</td>
                      <td>{variant.price}</td>
                      <td><Link to={`/admin/resturant/${url}/variant/edit/${variant.id}`} className='btn btn-primary btn-sm'>Edit</Link></td>
                      <td><button type='button' onClick={e => deleteVariant(e, variant.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  )
}
