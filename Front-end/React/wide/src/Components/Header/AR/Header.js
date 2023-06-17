import React, { useContext, useState } from 'react'
import CSS from './Header.module.css'
import { UserContext } from '../../../Contexts/UserContext'

//images
import facebook from '../../../Images/facebook.png'
import instagram from '../../../Images/instagram.png'
import twitter from '../../../Images/twitter.png'
import gmail from '../../../Images/gmail.png'
import linkedin from '../../../Images/linkedin.png'
import logo from '../../../Images/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();
    const { lang, setLang } = useContext(UserContext);
    const [showSidebar, setShowSidebar] = useState(false);

    function changLang(){
        if (lang == 'ar') setLang('en')
        else setLang('ar')
    }

    function links(page){
        navigate(`/${page}`)
        setShowSidebar(false)
        window.scrollTo(0, 0)
    }

    function menuToggle(){
        setShowSidebar(!showSidebar)
    }

    return (
        <>
            <div className={CSS.introContainer}>
                <div>
                    <p></p>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={gmail} />
                    <img src={linkedin} />
                </div>
                <div>
                    {/* <a href='tel: +966576344747'>+966 55 477 8000</a> */}
                    <a>فهد الشرهان</a>
                </div>
            </div>
            <div className={CSS.header}>
                <img style={{cursor: 'pointer'}} onClick={()=> links("")} src={logo} />
                <div>
                    <a onClick={()=> links("quote")}>عرض سعر</a>
                    <a onClick={()=> links("contact")}>تواصل معنا</a>
                    <a onClick={()=> links("service")}>تسويق الكتروني</a>
                    <a onClick={()=> links("about")}>من نحن</a>
                    <a onClick={()=> links("")} style={{color: "#3f39a9"}}>الرئيسية</a>
                </div>
                <a onClick={()=> changLang()}>English</a>
                <i id={CSS.sidebarBtn} className={showSidebar ? 'fa-sharp fa-solid fa-xmark' : `fa-solid fa-bars`} onClick={menuToggle}></i>
            </div>
            <div className={`${CSS.sidebar} ${showSidebar && CSS.show}`}>
                <a onClick={()=> links("")} style={{color: "#3f39a9"}}>الرئيسية</a>
                <a onClick={()=> links("about")}>من نحن</a>
                {/* <a onClick={()=> links("service")}>تسويق الكتروني</a> */}
                <a onClick={()=> links("contact")}>تواصل معنا</a>
                <a onClick={()=> links("quote")}>عرض سعر</a>
                <a onClick={()=> changLang()}>English</a>
            </div>
        </>
    )
}