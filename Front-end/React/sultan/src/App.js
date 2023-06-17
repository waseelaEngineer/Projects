import './App.css';
import { Navigate, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Header from './components/Header';
import { Context } from './Context';
import { useContext } from 'react';

function App() {

  const { lang } = useContext(Context);  

  return (
    <div dir={lang == "ar" ? 'rtl' : 'ltr'}>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to={"/"}/>}/>
        <Route path='/' element={ <Home />}/>
      </Routes>
    </div>
  );
}

export default App;
