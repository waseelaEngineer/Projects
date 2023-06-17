import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context';
import Texts from '../Texts';

export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false);
    const { lang, setLang, setPage } = useContext(Context);
    const texts = Texts[lang];
    const navigate = useNavigate();

    function changeLang(){
        setShowSidebar(false)
        if (lang == 'en') setLang('ar');
        else setLang('en');
    }

    function navigateUrl(page){
        setShowSidebar(false)
        setPage(`${page}`);
    }

    return (
        <div className='header'>
            <div className='text-center'>
                <h3>{texts.logo}</h3>
                <h3 onClick={()=> navigateUrl("landing")}>{texts.logoName}</h3>
            </div>
            <i className="fa-solid fa-bars" onClick={()=> setShowSidebar(true)}></i>
            <ul className={`links-container ${showSidebar && 'showSidebar'}`} onClick={()=> setShowSidebar(false)}>
                <li onClick={()=> navigateUrl("landing")}>{texts.home}</li>
                <li onClick={()=> navigateUrl("cv")}>{texts.cv}</li>
                <li onClick={()=> navigateUrl("contact")}>{texts.contact}</li>
                <li onClick={changeLang}>{texts.lang}</li>
            </ul>
        </div>
    )
}