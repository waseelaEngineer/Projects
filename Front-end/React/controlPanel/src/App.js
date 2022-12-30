import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import AdminLayout from './layouts/admin/AdminLayout.js'
import ResturantLayout from './layouts/resturant/ResturantLayout.js'
import Home from './components/frontend/Home'
import Login from './components/frontend/auth/Login'
import Contact from './components/frontend/Contact.js'
import Collection from './components/frontend/Collection.js'
import Product from './components/frontend/Product.js'
import ProductDetails from './components/frontend/ProductDetails.js'
import About from './components/frontend/About.js'
import Register from './components/frontend/auth/Register'
import AdminPrivateRoutes from './AdminPrivateRoutes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios';
import { UserContext } from './contexts/UserContext'
import Cart from './components/frontend/Cart.js'
import Checkout from './components/frontend/Checkout.js'
import Menu from './components/frontend/Menu.js'
import './App.css'

axios.defaults.baseURL = 'https://server.waseela.online/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {

  const { auth } = useContext(UserContext);
  const loggedin = localStorage.getItem('auth_token');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:url/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/collection/:name' element={<Product />} />
        <Route path='/collection/:category_name/:product_name' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/register' element={loggedin ? <Navigate to='/' /> : <Register />} />
        <Route path='/login' element={loggedin ? <Navigate to='/' /> : <Login />} />

        {auth && (
          <>
            {/* //admin */}
            <Route path='/admin' element={<Navigate to='/admin/dashboard' />} />
            <Route path='/admin/dashboard' element={<AdminLayout content = 'dashboard'/>} />
            <Route path='/admin/resturants' element={<AdminLayout content = 'resturants'/>} />
            <Route path='/admin/users' element={<AdminLayout content = 'users'/>} />
            <Route path='/admin/orders' element={<AdminLayout content = 'orders'/>} />
            <Route path='/admin/resturants/add' element={<AdminLayout content = 'resturantsAdd'/>} />
            <Route path='/admin/resturants/edit/:id' element={<AdminLayout content = 'resturantsEdit'/>} />

            {/* //resturant */}
            <Route path='/admin/resturant/:url/dashboard' element={<ResturantLayout content = 'dashboard'/>} />
            <Route path='/admin/resturant/:url/menu' element={<ResturantLayout content = 'menu'/>} />
            <Route path='/admin/resturant/:url/category/add' element={<ResturantLayout content = 'addCategory'/>} />
            <Route path='/admin/resturant/:url/category/edit/:id' element={<ResturantLayout content = 'editCategory'/>} />
            <Route path='/admin/resturant/:url/product/add' element={<ResturantLayout content = 'addProduct' />} />
            <Route path='/admin/resturant/:url/product/edit/:id' element={<ResturantLayout content = 'editProduct' />} />
            <Route path='/admin/resturant/:url/variant/add' element={<ResturantLayout content = 'addVariant' />} />
            <Route path='/admin/resturant/:url/variant/edit/:id' element={<ResturantLayout content = 'editVariant' />} />
            <Route path='/admin/resturant/:url/addons/add' element={<ResturantLayout content = 'newAddon' />} />
            <Route path='/admin/resturant/:url/addons/edit/:id' element={<ResturantLayout content = 'editAddon' />} />
            <Route path='/admin/resturant/:url/addons/assign/:id' element={<ResturantLayout content = 'assign' />} />
          </>
        )}

        <Route path='/admin/*' element={<AdminPrivateRoutes />} />
      </Routes>
    </div>
  );
}

export default App;