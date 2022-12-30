import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;