import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from './Home.module.css'
import { UserContext } from '../../Contexts/UserContext'
import Main from '../../Components/Main/Main'
import Dates from '../../Components/Dates/Dates'
import Massages from '../../Components/Massages/Massages'
import Development from '../../Components/Development/Development'
import FreeLessons from '../../Components/FreeLessons/FreeLessons'
import Savings from '../../Components/Savings/Savings'
import SidebarMain from '../../Components/SidebarMain/SidebarMain'
import Info from '../../Components/Info/Info'
import Texts from '../../Texts'
import Header from '../../Components/Header/Header'

export default function Home() {

  const { Auth, activeUser, Tab, lang } = useContext(UserContext);
  const texts = Texts[lang];
  const navigate = useNavigate();

  let stepsPage = Tab !== "main" &&
    Tab !== "dates" &&
    Tab !== "massages" &&
    Tab !== "development" &&
    Tab !== "freeLessons" &&
    Tab !== "savings" &&
    Tab !== "settings";

  useEffect(() => {
    Auth && stepsPage && navigate('/steps')
  }, [Tab])

  return (
    <>
      {!Auth && (
        <div className={CSS.loginContainer}>
          <Header />
          <div className={CSS.buttonsContainer}>
            <button onClick={() => { navigate('/login') }} className={CSS.loginButton}>{texts.signin}</button>
            <button onClick={() => { navigate('/signup') }} className={CSS.signupButton}>{texts.signup}</button>
          </div>
        </div>
      )}

      {Auth && (
        <div className={`${CSS.container} ${lang === 'en' && CSS.containerEN}`}>
          <div className={CSS.contentContainer}>
            <SidebarMain />
            <div className={CSS.content}>
              <h3>{texts.welcome} {activeUser.name}</h3>
              {Tab === "main" && (<Main />)}
              {Tab === "dates" && (<Dates />)}
              {Tab === "massages" && (<Massages />)}
              {Tab === "development" && (<Development />)}
              {Tab === "freeLessons" && (<FreeLessons />)}
              {Tab === "savings" && (<Savings />)}
            </div>
          </div>
          <div className={CSS.info} ><Info /></div>
        </div>
      )}
    </>
  )
}