import React, { useContext } from 'react'
import Texts from '../Texts';
import {Context} from '../Context';

export default function Footer() {
    
    const {lang} = useContext(Context);
    const texts = Texts[lang];

  return (
    <div className='Footer'>
        <p>{texts.identity}</p>
        <div>
            <p>{texts.callUs}:</p>
            <a href='mailto: info@vahpa.org.sa ' target='_blank'>
                <i className="fa-solid fa-envelope"></i>
            </a>
            <a href='https://twitter.com/VAHPA_SA' target='_blank'>
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href='https://www.linkedin.com/in/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D9%82%D8%A7%D9%8A%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%B9%D9%86%D9%81-%D9%88%D8%A7%D9%84%D8%A5%D9%8A%D8%B0%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D8%AF-b04072255/' target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href='https://wa.me/+966?text=Hi' target='_blank'>
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href='https://www.instagram.com/vahpa_sa/ ' target='_blank'>
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href='https://t.me' target='_blank'>
                <i className="fa-brands fa-telegram"></i>
            </a>
            <a href='tel: +966'>
                <i className="fa-solid fa-phone"></i>
            </a>
        </div>
    </div>
  )
}