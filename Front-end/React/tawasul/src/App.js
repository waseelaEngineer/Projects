import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './pages/Register';
import About from './pages/About';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import Thanks from './pages/Thanks';
import Download from './pages/Download';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/terms' element={<Terms/>} />
      <Route path='/Policy' element={<Policy/>} />
      <Route path='/thanks' element={<Thanks/>} />
      <Route path='/download' element={<Download/>} />
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;