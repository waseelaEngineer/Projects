import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../Context';
import Texts from '../Texts';

import p1 from '../images/1.png'
import p2 from '../images/2.png'
import p3 from '../images/3.png'
import p4 from '../images/4.png'
import p5 from '../images/5.png'
import p6 from '../images/6.png'
import p7 from '../images/7.png'
import p8 from '../images/8.png'
import p9 from '../images/9.png'
import p10 from '../images/10.png'
import p11 from '../images/11.png'
import p12 from '../images/12.png'
import p13 from '../images/13.png'
import p14 from '../images/14.png'
import p15 from '../images/15.png'
import p16 from '../images/16.png'
import p17 from '../images/17.png'
import p18 from '../images/18.png'
import p19 from '../images/19.png'
import p20 from '../images/20.png'
import p21 from '../images/21.png'
import p22 from '../images/22.png'
import p23 from '../images/23.png'
import p24 from '../images/24.png'
import p25 from '../images/25.png'
import p26 from '../images/26.png'
import p27 from '../images/27.png'
import p28 from '../images/28.png'
import p29 from '../images/29.png'
import arrowLeft from '../images/arrow-left.png'
import arrowRight from '../images/arrow-right.png'

export default function ImagesSlide() {

    const { lang, setLang, activeImg, setActiveImg, page, play, setPlay } = useContext(Context);
    const texts = Texts[lang];

    function runPlay(){
        setPlay(true) 
        activeImg < 29 && setActiveImg(activeImg + 1)
    }
    
    return (
        <div className='images-container up'>
            <div className="Slideshow-container">
                <div className={`mySlides Fade ${activeImg == 1 && 'ShowSlide'}`}>
                    <img src={p1} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 2 && 'ShowSlide'}`}>
                    <img src={p2} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 3 && 'ShowSlide'}`}>
                    <img src={p3} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 4 && 'ShowSlide'}`}>
                    <img src={p4} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 5 && 'ShowSlide'}`}>
                    <img src={p5} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 6 && 'ShowSlide'}`}>
                    <img src={p6} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 7 && 'ShowSlide'}`}>
                    <img src={p7} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 8 && 'ShowSlide'}`}>
                    <img src={p8} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 9 && 'ShowSlide'}`}>
                    <img src={p9} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 10 && 'ShowSlide'}`}>
                    <img src={p10} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 11 && 'ShowSlide'}`}>
                    <img src={p11} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 12 && 'ShowSlide'}`}>
                    <img src={p12} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 13 && 'ShowSlide'}`}>
                    <img src={p13} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 14 && 'ShowSlide'}`}>
                    <img src={p14} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 15 && 'ShowSlide'}`}>
                    <img src={p15} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 16 && 'ShowSlide'}`}>
                    <img src={p16} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 17 && 'ShowSlide'}`}>
                    <img src={p17} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 18 && 'ShowSlide'}`}>
                    <img src={p18} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 19 && 'ShowSlide'}`}>
                    <img src={p19} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 20 && 'ShowSlide'}`}>
                    <img src={p20} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 21 && 'ShowSlide'}`}>
                    <img src={p21} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 22 && 'ShowSlide'}`}>
                    <img src={p22} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 23 && 'ShowSlide'}`}>
                    <img src={p23} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 24 && 'ShowSlide'}`}>
                    <img src={p24} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 25 && 'ShowSlide'}`}>
                    <img src={p25} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 26 && 'ShowSlide'}`}>
                    <img src={p26} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 27 && 'ShowSlide'}`}>
                    <img src={p27} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 28 && 'ShowSlide'}`}>
                    <img src={p28} className='slide-img' />
                </div>
                <div className={`mySlides Fade ${activeImg == 29 && 'ShowSlide'}`}>
                    <img src={p29} className='slide-img' />
                </div>
            </div>
            {lang == 'ar' 
            ?
                <div className='images-buttons-container'>
                    <i onClick={() => activeImg < 29 && setActiveImg(activeImg + 1)} class="fa-sharp fa-solid fa-arrow-right"></i>
                    {play ? <i onClick={() => setPlay(false)} class="fa-sharp fa-solid fa-pause"></i> : <i onClick={() => runPlay()} class="fa-sharp fa-solid fa-play"></i>}
                    <i onClick={() => activeImg > 1 && setActiveImg(activeImg - 1)} class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
            :
                <div className='images-buttons-container'>
                    <i onClick={() => activeImg > 1 && setActiveImg(activeImg - 1)} class="fa-sharp fa-solid fa-arrow-left"></i>
                    {play ? <i onClick={() => setPlay(false)} class="fa-sharp fa-solid fa-pause"></i> : <i onClick={() => runPlay()} class="fa-sharp fa-solid fa-play"></i>}
                    <i onClick={() => activeImg < 29 && setActiveImg(activeImg + 1)} class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            }
        </div>
    )
}
