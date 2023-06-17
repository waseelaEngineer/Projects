import React, { useContext } from 'react'
import CSS from './StepOne.module.css'
import profile from '../../images/profile.jpg'
import { UserContext } from '../../Contexts/UserContext';
import Texts from '../../Texts';

export default function StepOne() {

  const { activeUser, userDetails, setUserDetails, lang } = useContext(UserContext);
  let texts = Texts[lang];

  function setTeacherType(teacherType) {
    setUserDetails({ ...userDetails, type: teacherType })
  }

  function teacherTypeButtonClass(teacherType) {
    return `${CSS.button} ${userDetails.type === teacherType && CSS.active}`
  }

  function newSelect(name, options) {
    return <div key={name} className={CSS[name]}>
      <select defaultValue={userDetails[name]} onChange={e => { setUserDetails({ ...userDetails, [name]: e.target.value }) }} >
        <option value="" disabled hidden>{texts[name]}</option>
        {options.map(city => (<option key={city} value={city}>{texts[city]}</option>))}
      </select>
      <label>{texts[name]}</label>
    </div>
  }

  return (
    <>
      <h1>{texts.welcome}{activeUser.name}</h1>
      <h4>{texts.fastSteps}</h4>
      <div className={`${CSS.profileContainer} ${lang === 'en' && CSS.profileContainerEN}`}>
        <img src={profile} alt='logo'></img>
        <div>
          <p className={CSS.link}>{texts.changeImg}</p>
          <p>{texts.recommendedImgSize}</p>
          <p>120x120</p>
        </div>
      </div>

      <div className={`${CSS.selectDiv} ${lang === 'en' && CSS.selectDivEN}`}>
        {newSelect('country', ['saudi'])}
        {newSelect('city', ['jed', 'ryd'])}    
      </div>

      <h4>{texts.teacherType}</h4>
      <div className={CSS.buttonsContainer}>
        <button className={teacherTypeButtonClass("acadimy")} onClick={() => { setTeacherType("acadimy") }} >{texts.academy}</button>
        <button className={teacherTypeButtonClass("profition")} onClick={() => { setTeacherType("profition") }} >{texts.profession}</button>
        <input type='textbox' defaultValue={userDetails.prief} placeholder={texts.bio} onChange={e => {
          setUserDetails({ ...userDetails, prief: e.target.value })
        }} ></input>
      </div>
      <p className={CSS.allowed}>{texts.allowedBio}</p>
    </>
  )
}