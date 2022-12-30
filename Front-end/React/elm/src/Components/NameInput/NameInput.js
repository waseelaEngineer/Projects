import React, { useContext } from 'react'
import Texts from '../../Texts'
import CSS from "./NameInput.module.css"
import { UserContext } from '../../Contexts/UserContext';

export default function NameInput(props) {

  const {lang} = useContext(UserContext);
  const { inputValues, setInputValues } = props;  
  let texts = Texts[lang];

  return (
    <div className={CSS.nameDiv}>
      <input 
        className={`${CSS.nameInput} ${lang === 'en' && CSS.nameInputEN}`}
        placeholder={texts.name}
        value={inputValues.name} 
        onChange={e => setInputValues({...inputValues, name: e.target.value})}
      ></input>
      <label className={`${CSS.nameLabel} ${lang === 'en' && CSS.nameLabelEN}`}>{texts.name}</label>
    </div>
  )
}