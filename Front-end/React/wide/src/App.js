import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {UserContext} from './Contexts/UserContext';
import './App.css';

// pages
import Home from './Pages/Home/EN/Home';
import HomeAR from './Pages/Home/AR/Home'
import Quote from './Pages/Quote/EN/Quote';
import QuoteAR from './Pages/Quote/AR/Quote';
import Header from './Components/Header/EN/Header';
import HeaderAR from './Components/Header/AR/Header';
import Footer from './Components/Footer/EN/Footer';
import FooterAR from './Components/Footer/AR/Footer';
import About from './Pages/AboutUs/EN/About';
import AboutAR from './Pages/AboutUs/AR/About';
import Contact from './Pages/ContactUs/EN/Contact';
import ContactAR from './Pages/ContactUs/AR/Contact';
import Service from './Pages/Service/EN/Service';
import ServiceAR from './Pages/Service/AR/Service';

function App() {

  const {lang} = useContext(UserContext);

  window.addEventListener('scroll', reveal);

  function reveal(){
    var up = document.querySelectorAll('#up');
    var down = document.querySelectorAll('#down');

    var windowHeight = window.innerHeight;
    var revealPoint = 100;

    for (var i = 0; i < up.length; i++){
      var revealTop = up[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint){
        up[i].classList.add('up');
      }
    }

    for (var i = 0; i < down.length; i++){
      var revealTop = down[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint){
        down[i].classList.add('down');
      }
    }
    
  }

  return (
    <>
      {lang == 'ar' ? <HeaderAR/> : <Header />}
      <Routes>
        <Route path='/' element={lang == 'ar' ? <HomeAR/> : <Home />} />
        <Route path='/quote' element={lang == 'ar' ? <QuoteAR/> : <Quote />} />
        <Route path='/about' element={lang == 'ar' ? <AboutAR/> : <About />} />
        <Route path='/contact' element={lang == 'ar' ? <ContactAR/> : <Contact />} />
        <Route path='/service' element={lang == 'ar' ? <ServiceAR/> : <Service />} />
        <Route path='*' element={<Navigate to= "/"/>} />
      </Routes>
      {lang == 'ar' ? <FooterAR/> : <Footer />}
    </>
  );
}

export default App;