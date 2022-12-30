import  { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from '../../Contexts/UserContext';
import CSS from './Signup.module.css'
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';
import NameInput from '../../Components/NameInput/NameInput';
import EmailInput from '../../Components/EmailInput/EmailInput';
import Header from '../../Components/Header/Header';
import Texts from '../../Texts';


export default function Signup() {

  const { setActiveUser, setAuth, lang} = useContext(UserContext);
  const texts = Texts[lang];
  const navigate = useNavigate();
  const [warningsList, setWarningsList] = useState([]); 

  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",    
    email: "",
    password: "",    
    eye: "password",
    gender: "null",
    termsConditions: false,
  });

  function setGender(gender){
    setInputValues({ ...inputValues, gender: gender})
  } 

  function acceptTermsConditions(){
    setInputValues({ ...inputValues, termsConditions: !inputValues.termsConditions})    
  }

  function warning(warning){
    let showWarning = warningsList.includes(warning)
    if (showWarning) {
      return <p className={CSS.warning}>{texts[warning]}</p>
    } 
  }

  function genderButtonClass(gender){
    return `${CSS.Button} ${inputValues.gender === gender && CSS.activeButton}`
  }

  function signup(){

    let namePass = inputValues.name !== ""
    let phonePass = /^\d+$/.test(inputValues.phone) && inputValues.phone.length === 9;
    let emailPass = inputValues.email.includes("@");
    let genderPass = inputValues.gender !== "null"
    let termsConditionsPass = inputValues.termsConditions
    let passwordPass = 
      /[A-Z]/.test(inputValues.password) &&
      /[a-z]/.test(inputValues.password) &&
      /(?=.*[!@#$%^&*])/.test(inputValues.password) &&
      inputValues.password.length > 7;
    let userInputsComplete = namePass && phonePass && emailPass && genderPass && passwordPass && termsConditionsPass

    if ( userInputsComplete ){
      setActiveUser({
        name: inputValues.name,
        phone: inputValues.phone,
        email: inputValues.email,
        gender: inputValues.gender,
        password: inputValues.password
      })
      setAuth(true)
      navigate('/steps');
    }
    else {
      setWarningsList([]);
      !namePass && setWarningsList( warning => [...warning, "nameWarning"]);
      !phonePass && setWarningsList( warning => [...warning, "phoneWarning"]); 
      !emailPass && setWarningsList( warning => [...warning, "emailWarning"]);
      !genderPass && setWarningsList( warning => [...warning, "genderWarning"]);
      !passwordPass && setWarningsList( warning => [...warning, "passwordWarning"]); 
      !termsConditionsPass && setWarningsList( warning => [...warning, "termsWarning"]);
    }
  }

  return (
    <div className={CSS.signupContainer}>
      <Header /> 
      <div className={CSS.container}>
        
        <div className={`${CSS.formContainer} ${lang == 'en' && CSS.formContainerEN}`}>
          <h1>{texts.newAccount}</h1>
          <p>{texts.dontHaveAccount} <Link to='/login'>{texts.signin}</Link></p>

          <NameInput inputValues={inputValues} setInputValues={setInputValues}/>
          {warning("nameWarning")}

          <PhoneInput inputValues={inputValues} setInputValues={setInputValues}/>
          {warning("phoneWarning")}

          <EmailInput inputValues={inputValues} setInputValues={setInputValues}/>
          {warning("emailWarning")}

          <div className={CSS.buttonDiv}>
            <button className={genderButtonClass("female")} onClick={()=>{setGender("female")}}>{texts.female}</button>
            <button className={genderButtonClass("male")} onClick={()=>{setGender("male")}}>{texts.male}</button>
          </div>
          {warning("genderWarning")}

          <PasswordInput inputValues={inputValues} setInputValues={setInputValues}/>
          {warning("passwordWarning")}

          <div className={`${CSS.termsConditionsDiv} ${lang == 'en' && CSS.termsConditionsDivEN}`}>
            <p >{texts.acceptTerms} <Link style={{marginInline: '5px'}} to='/termsconditions'>{texts.terms}</Link></p>
            <input type="checkbox"  onChange={acceptTermsConditions} />
          </div>
          {warning("termsWarning")}

          <button className={CSS.signupButton} onClick={signup}>{texts.signup}</button>
        </div>
      </div>
    </div>
  )
}