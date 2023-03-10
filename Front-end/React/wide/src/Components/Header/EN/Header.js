import React from 'react'
import CSS from './Header.module.css'

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

    return (
        <>
            <div className={CSS.introContainer}>
                <div>
                    <p>Follow Us</p>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={gmail} />
                    <img src={linkedin} />
                </div>
                <div>
                    <p>Fahad Alsharhan:</p>
                    <a href='tel: +966576344747'>+966 55 477 8000</a>
                </div>
            </div>
            <div className={CSS.header}>
                <img src={logo} />
                <div>
                    <a onClick={()=> navigate("/")} style={{color: "#3f39a9"}}>Home</a>
                    <a onClick={()=> navigate("/about")}>About Us</a>
                    <a onClick={()=> navigate("/service")}>Online Marketing</a>
                    <a onClick={()=> navigate("/contact")}>Contact Us</a>
                    <a onClick={()=> navigate("/quote")}>Free Quote</a>
                </div>
                <a href="">العربية</a>
            </div>
        </>
    )
}