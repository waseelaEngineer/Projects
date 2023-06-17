import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from './SidebarMain.module.css';
import { UserContext } from '../../Contexts/UserContext';
import profile from '../../images/profile.jpg'
import Texts from '../../Texts';
import elmLogo from '../../images/smallLogo2.jpg'

export default function SidebarMain() {

    const { Tab, setAuth, setTab, activeUser, userDetails, lang, setLang } = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false)
    const allButtons = ["main", "dates", "massages", "development", "freeLessons", "savings"]
    const texts = Texts[lang]
    const navigate = useNavigate()

    function menuToggle() {
        setShowMenu(!showMenu)
        window.scrollTo(0, 0)
    }

    function SidebarButtons(tab) {
        setTab(tab)
        tab === "StepOne" && navigate('/steps')
        if (window.innerWidth < 950) { setShowMenu(false) }
    }

    function languageButton(){
        lang === "ar" ? setLang("en") : setLang("ar")
        setShowMenu(false)
    }

    return (
        <>
            <div  className={`${CSS.sidebar} ${showMenu && CSS.show} ${lang === 'en' && CSS.sidebarEN}`}>
                <div className={CSS.profile}>
                    <img src={profile} alt='logo' />
                    <p className={CSS.name}>{activeUser.name}</p>
                    <p>{texts[userDetails.certificate]} {texts[userDetails.specialization]} </p>
                </div>
                {allButtons.map(Button => (
                    <button key={Button} className={`${CSS.button} ${Tab === Button ? CSS.active : ""}`}
                        onClick={() => { SidebarButtons(Button) }}> {texts[Button]} </button>
                ))}
                <button className={CSS.button} onClick={() => { SidebarButtons("StepOne") }}>{texts.settings}</button>
                <button className={`${CSS.button} ${CSS.exit}`} onClick={() => { setAuth(false) }}>{texts.signout}</button>
                <button className={CSS.button} onClick={languageButton}>{texts.lang}</button>
                <h2>{texts.customAccount}</h2>
            </div>
            <div className={CSS.header}>
                <img src={elmLogo} alt='logo'></img>
                <i id={CSS.sidebarBtn} className={`fa-solid fa-bars`} onClick={menuToggle}></i>
            </div>
        </>
    )
}