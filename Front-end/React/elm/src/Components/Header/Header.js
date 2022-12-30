import React, { useContext, useState } from 'react'
import CSS from './Header.module.css'
import Texts from '../../Texts'
import { UserContext } from '../../Contexts/UserContext'
import apple from '../../images/appleLogo.png'
import play from '../../images/playLogo.png'
import elmLogo from '../../images/smallLogo.png'

export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false)
    const { lang, setLang } = useContext(UserContext);
    const texts = Texts[lang];

    function menuToggle(){
        setShowSidebar(!showSidebar);
    }

    function chaneLanguage(){
        lang === "ar" ? setLang("en") : setLang("ar");
        setShowSidebar(false);
    }

    return (
        <div className={`${CSS.header} ${lang === 'en' && CSS.headerEN}`}>
            <div className={`${CSS.sidebar} ${showSidebar && CSS.show}`}>
                <div className={CSS.buttons}>
                    <p onClick={chaneLanguage}>{texts.lang}</p>
                    <img src={apple} className={CSS.apple} alt='logo'></img>
                    <img src={play} className={CSS.play} alt='logo'></img>
                </div>

                <div className={CSS.words}>
                    <p>{texts.policy}</p>
                    <p>{texts.terms}</p>
                    <p>{texts.contact}</p>
                </div>
            </div>

            <i id={CSS.sidebarBtn} className={`fa-solid fa-bars`} onClick={menuToggle}></i>

            <div className={CSS.logo}>
                <img src={elmLogo} alt='logo'></img>
            </div>

        </div>
    )
}