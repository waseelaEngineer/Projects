import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Guest from './layouts/Guest';

function App() {

  return (
    <Routes>
      <Route path='*' element={<Navigate to={"/"}/>}/>
      <Route path='/' element={ <Guest page=''/>}/>
      <Route path='/about' element={ <Guest page='about'/>}/>
      <Route path='/chairmanword' element={ <Guest page='chairmanword'/>}/>
      <Route path='/general-association' element={ <Guest page='general-association'/>}/>
      <Route path='/organizational-structure' element={ <Guest page='organizational-structure'/>}/>
      <Route path='/board-directors' element={ <Guest page='board-directors'/>}/>
      <Route path='/executive-committee' element={ <Guest page='executive-committee'/>}/>
      <Route path='/investment-committe' element={ <Guest page='investment-committe'/>}/>
      <Route path='/planing-development-committe' element={ <Guest page='planing-development-committe'/>}/>
      <Route path='/policy-governance-review-committee' element={ <Guest page='policy-governance-review-committee'/>}/>
      <Route path='/internal-audit-review-committee' element={ <Guest page='internal-audit-review-committee'/>}/>
      <Route path='/voluntare' element={ <Guest page='voluntare'/>}/>
      <Route path='/awareness-corner-request' element={ <Guest page='awareness-corner-request'/>}/>
      <Route path='/awareness-lecture-request' element={ <Guest page='awareness-lecture-request'/>}/>
      <Route path='/about-membership' element={ <Guest page='about-membership'/>}/>
      <Route path='/association-register' element={ <Guest page='association-register'/>}/>
      <Route path='/association-card' element={ <Guest page='association-card'/>}/>
      <Route path='/our-programs' element={ <Guest page='our-programs'/>}/>
      <Route path='/news' element={ <Guest page='news'/>}/>
      <Route path='/images' element={ <Guest page='images'/>}/>
      <Route path='/videos' element={ <Guest page='videos'/>}/>
      <Route path='/reports' element={ <Guest page='reports'/>}/>
      <Route path='/systems-regulations' element={ <Guest page='systems-regulations'/>}/>
      <Route path='/call-us' element={ <Guest page='call-us'/>}/>
      <Route path='/donate' element={ <Guest page='donate'/>}/>
      <Route path='/subscribers' element={ <Guest page='subscribers'/>}/>
      <Route path='/messages' element={ <Guest page='messages'/>}/>
      <Route path='/suggestions' element={ <Guest page='suggestions'/>}/>
    </Routes>
  );
}
export default App;