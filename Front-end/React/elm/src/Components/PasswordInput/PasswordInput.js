import React, { useContext } from 'react'
import CSS from "./PasswordInput.module.css"
import { UserContext } from '../../Contexts/UserContext';
import Texts from '../../Texts';

export default function PasswordInput(props) {

  const { inputValues, setInputValues } = props;
  const { lang } = useContext(UserContext);
  const texts = Texts[lang];

  function eye() {
    inputValues.eye === "password"
      ? setInputValues({ ...inputValues, eye: 'text' })
      : setInputValues({ ...inputValues, eye: 'password' })
  }

  return (
    <div className={CSS.passwordDiv}>
      <input
        type={inputValues.eye}
        className={`${CSS.passwordInput} ${lang === 'en' && CSS.passwordInputEN}`}
        placeholder={texts.password}
        value={inputValues.password}
        onChange={e => setInputValues({ ...inputValues, password: e.target.value })}
      ></input>
      <label className={`${CSS.passwordLabel} ${lang === 'en' && CSS.passwordLabelEN}`}>{texts.password}</label>
      <li id={`${lang === 'en' ? CSS.eyeEN : CSS.eye}`} className="fa-solid fa-eye" onClick={eye}></li>
    </div>
  )
}