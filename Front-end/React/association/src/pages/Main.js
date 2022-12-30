import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../Context';
import Texts from '../Texts';
import logoWhite from '../images/logoWhite.png';
import panner1 from '../images/panner1.jpg'
import panner2 from '../images/panner2.jpg'

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