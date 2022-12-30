import { Navigate, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Login from './pages/Login';
import Register from './pages/Register';
import Staff from './pages/Staff';
import StdDepartment from './pages/student/StdDepartment';
import StdSpecialization from './pages/student/StdSpecialization';
import StdDoctors from './pages/student/StdDoctors';
import StdDates from './pages/student/StdDates';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>

        <Route path='/staff' element={ <Staff/>}/>

        <Route path='/department' element={ <StdDepartment/>}/>
        <Route path='/specialization' element={ <StdSpecialization/>}/>
        <Route path='/doctors' element={ <StdDoctors/>}/>
        <Route path='/dates' element={ <StdDates/>}/>
      </Routes>
    </>
  );
}

export default App;
