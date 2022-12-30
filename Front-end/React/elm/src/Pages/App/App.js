import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';
import './App.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Steps from '../Steps/Steps';
import Home from '../Home/Home';
import TermsConditions from '../TermsConditions/TermsConditions';

export default function App(){

  const {Auth} = useContext(UserContext);
  
  return (
    <Routes> 
      {!Auth && (
        <>
          <Route path='/home' element={ <Home />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/termsconditions' element={<TermsConditions />}/>
        </>
      )}
      {Auth && (
        <>
          <Route path='/steps' element={ <Steps />}/>
          <Route path='/home' element={ <Home />}/>
        </>
      )}
      <Route path='*' element={<Navigate to={Auth ? "/steps" : "/home"}/>}/>
    </Routes>
  );
}