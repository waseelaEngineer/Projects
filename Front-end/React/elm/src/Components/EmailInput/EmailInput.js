import React, { useContext } from 'react'
import CSS from "./EmailInput.module.css"
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function EmailInput(props) {

  const { lang } = useContext(UserContext);
  const { inputValues, setInputValues } = props;
  const texts = Texts[lang];

  return (
    <div className={CSS.emailDiv}>
      <input 
        className={`${CSS.emailInput} ${lang === 'en' && CSS.emailInputEN}`} 
        placeholder={texts.email}
        value={inputValues.email} 
        onChange={e => setInputValues({...inputValues, email: e.target.value})}
      ></input>
      <label className={`${CSS.emailLabel} ${lang === 'en' && CSS.emailLabelEN}`}>{texts.email}</label>            
    </div>
  )
}