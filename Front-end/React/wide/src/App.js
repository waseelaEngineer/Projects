import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/EN/Home';
import Quote from './Pages/Quote/EN/Quote';
import Header from './Components/Header/EN/Header';
import Footer from './Components/Footer/EN/Footer';
import About from './Pages/AboutUs/EN/About';
import Contact from './Pages/ContactUs/EN/Contact';
import Service from './Pages/Service/EN/Service';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<Navigate to= "/"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;