import React, { useContext, useState } from 'react'
import CSS from './Massages.module.css'
import one from '../../images/one.png'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function Massages() {

  const {lang} = useContext(UserContext);
  const [massages, setMassages] = useState([]);
  const [send, setSend] = useState("");
  const texts = Texts[lang];
  const chatTexts = [];

  for (let i = 0; i < massages.length; i++){
    i % 2 === 0 
    ? chatTexts.push(<div key={i} className={CSS.first}><p>{massages[i]}</p></div>) 
    : chatTexts.push(<div key={i} className={CSS.second}><p>{massages[i]}</p></div>) 
  }

  return (
    <>
      <p className={CSS.main}>{texts.main}/{texts.massages}</p>
      <h1 className={CSS.title}>{texts.chating}</h1>
      <div className={CSS.studentDiv}>
        <div className={CSS.student}>
          <img src={one} style={{ width: "50px" }} alt={"img"} />
          <h3>{texts.studentOneName}</h3>
        </div>
        <button>{texts.selectDate}</button>
      </div>
      <div className={CSS.massages}>
        {chatTexts} 
      </div>
      <div className={CSS.send}>
        <input className={CSS.chat} placeholder={texts.massageText} onChange={(e) => { setSend(e.target.value) }} />
        <button onClick={() => { send !== "" && setMassages([...massages, send]) }}>{texts.send}</button>
      </div>
    </> 
  )
}