import React, { useContext, useEffect, useRef, useState, Component } from 'react'
import { Context } from '../Context';
import Slider from "react-slick";
import Texts from '../Texts';
import logoWhite from '../images/logoWhite.png';
import panner1 from '../images/panner1.jpg'
import panner2 from '../images/panner2.jpg'
import logo1 from '../images/images/adidas.png'
import logo2 from '../images/images/facebook.png'
import logo3 from '../images/images/google.png'
import logo4 from '../images/images/instagram.png'
import logo5 from '../images/images/nike.png'
import logo6 from '../images/images/twitter.png'
import logo7 from '../images/images/uber.png'
import logo8 from '../images/images/youtube.png'

export default function Main() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];
  const [activeImg, setActiveImg] = useState('img1');

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  useEffect(()=>{
    img1();
  },[])

  function img1(){
    setActiveImg('img1')
    setTimeout(img2, 8000);
  }
  function img2(){
    setActiveImg('img2')
    setTimeout(img1, 8000);
  }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover:false,
    responsive: [{
        breakpoint: 768,
        setting: {
            slidesToShow:4
        }
    }, {
        breakpoint: 520,
        setting: {
            slidesToShow: 3
        }
    }]
  };

  return (
    <div className='body'>
      <img className='background-img' src={panner2} alt='panner' />
      <div className="Slideshow-container">
        <div className={`mySlides Fade ${activeImg == "img1" && 'ShowSlide'}`}>
          <img src={panner1} className='slide-img' />
        </div>
        <div className={`mySlides Fade ${activeImg == "img2" && 'ShowSlide'}`}>
          <img src={panner2} className='slide-img' />
        </div>
        
        <div className='slider-container'>
          <Slider {...settings}>
            <div className="slide"><img src={logo1} alt="logo"/></div>
            <div className="slide"><img src={logo2} alt="logo"/></div>
            <div className="slide"><img src={logo3} alt="logo"/></div>
            <div className="slide"><img src={logo4} alt="logo"/></div>
            <div className="slide"><img src={logo5} alt="logo"/></div>
            <div className="slide"><img src={logo6} alt="logo"/></div>
            <div className="slide"><img src={logo7} alt="logo"/></div>
            <div className="slide"><img src={logo8} alt="logo"/></div>
          </Slider>
        </div>

      </div>
      <div className='dot-container'>
        <span className={`dot ${activeImg == "img1" && 'activeDot'}`} onClick={() => { setActiveImg('img1') }}></span>
        <span className={`dot ${activeImg == "img2" && 'activeDot'}`} onClick={() => { setActiveImg('img2') }}></span>
      </div>
      <div className='news-container'>
        <h2>{texts.latestNews}</h2>
        <div className='post-container'>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
          <div className='post'>
            <img src={logoWhite} alt='img' />
            <div>
              <h1>23</h1>
              <p>2022 Oct</p>
            </div>
            <section></section>
            <p>{texts.post}</p>
          </div>
        </div>
      </div>
      <div className="twitter-container">
        <a className="twitter-timeline" data-width="530" data-height="400" href="https://twitter.com/VAHPA_SA?ref_src=twsrc%5Etfw">Tweets by VAHPA_SA</a>
      </div>
    </div>
  )
}