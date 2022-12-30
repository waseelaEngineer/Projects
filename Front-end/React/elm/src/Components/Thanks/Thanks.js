import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from './Thanks.module.css'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts';


export default function Thanks() {

  const { setTab, lang } = useContext(UserContext);
  const navigate = useNavigate();
  const texts = Texts[lang]

  function acceptButton() {
    setTab("main")
    navigate('/home')
  }

  return (
    <div className={CSS.container}>
      <h1>{texts.thanksOrderRecieved}</h1>
      <p>{texts.administrationWillContactYou}</p>
      <div><button onClick={acceptButton}>{texts.accept}</button></div>
      <p>{texts.close}</p>
    </div>
  )
}