import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import FirstQuote from './components/quotes/FirstQuote';
import SecondQuote from './components/quotes/SecondQuote';
import ThirdQuote from './components/quotes/ThirdQuote';
import Work from './components/Work';
import Bottom from './components/Bottom';
import Downloads from './components/Downloads';

export default function App() {

  const tags = ['Projects', 'Education', 'Skills', 'Work', 'Downloads', 'Contact'];

  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++){

      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 100;
      
      if (revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('slide-up');
      }
    }
  }

  window.addEventListener('scroll', nuch);

  function nuch(){
    var sections = document.querySelectorAll('.section');
    
    for (var i = 0; i < sections.length; i++){

      var windowHeight = window.innerHeight;
      var sectionTop = sections[i].getBoundingClientRect().top;
      var sectionPoint = 150;
      
      if (sectionTop < windowHeight - sectionPoint){
        document.getElementById("tag").innerHTML = tags[i];
      }
    }
  }

  return (
    <>
      <div id='tag' className='tag'>Projects</div>
      <Header />
      <Projects />
      <FirstQuote />
      <Education />
      <SecondQuote />
      <Skills />
      <ThirdQuote />
      <Work />
      <Downloads />
      <Bottom />
    </>
  );
}