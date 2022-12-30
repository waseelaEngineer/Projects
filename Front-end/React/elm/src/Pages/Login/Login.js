import  { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from '../../Contexts/UserContext';
import CSS from "./Login.module.css"
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';
import Header from '../../Components/Header/Header';
import Texts from '../../Texts';

export default function Login() {

  const {activeUser, setAuth, lang} = useContext(UserContext);
  const texts = Texts[lang];
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({ phone: "", password: "", eye: "password",});

  function login(){
    let userVerification = inputValues.password === activeUser.password && inputValues.phone === activeUser.phone;
    if (userVerification){
      setAuth(true)
      navigate('/steps');
    }
    else{
      alert("Wrong phone number or password")
    }
  }

  return (
    <div className={CSS.loginContainer}>
      <Header />
      <div className={CSS.container}>
        <div className={`${CSS.formContainer} ${lang === 'en' && CSS.formContainerEN}`}>
          <div className={CSS.titleDiv}>
            <h1>{texts.signin}</h1>
            <p>{texts.dontHaveAccount} <Link to='/signup'>{texts.newAccount}</Link></p>
          </div>
          <PhoneInput inputValues={inputValues} setInputValues={setInputValues}/>
          <PasswordInput inputValues={inputValues} setInputValues={setInputValues}/>
          <p className={`${CSS.forgetPassword} ${lang === 'en' && CSS.forgetPasswordEN}`} onClick={() => { alert("Reset password") }}>{texts.forgetPassword}</p>
          <button className={CSS.signinButton} onClick={login}>{texts.signin}</button>
        </div>
      </div>
    </div>
  )
}