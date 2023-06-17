import React, { useContext } from 'react'
import CSS from "./PhoneInput.module.css"
import Texts from '../../Texts'
import { UserContext } from '../../Contexts/UserContext'

export default function PhoneInput(props) {

  const { inputValues, setInputValues } = props;
  const {lang} = useContext(UserContext);
  const texts = Texts[lang];

  return (
    <div className={CSS.phoneDiv}>
      <input 
        className={`${CSS.phoneInput} ${lang === 'en' && CSS.phoneInputEN}`} 
        placeholder={texts.phoneNumber} 
        value={inputValues.phone} 
        onChange={e => setInputValues({...inputValues, phone: e.target.value})}
      ></input>
      <label className={`${CSS.phoneLabel} ${lang === 'en' && CSS.phoneLabelEN}`}>{texts.phoneNumber}</label>
      <select className={`${CSS.phoneSelect} ${lang === 'en' && CSS.phoneSelectEN}`}>
        <option value="+966">+966</option>
      </select>
    </div>
  )
}