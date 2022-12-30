import React, { useContext, useEffect, useRef } from 'react'
import CSS from './SidebarSteps.module.css'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts';

export default function SidebarSteps() {

  const { Tab, lang } = useContext(UserContext);
  let texts = Texts[lang];

  function step(stepNumber, name, number) {
    let tabNumber = 0;

    switch (Tab){
      case "StepOne": tabNumber = 1; break;
      case "StepTwo": tabNumber = 2; break;
      case "StepThree": tabNumber = 3; break;
      case "StepFour": tabNumber = 4; break;
    }

    return <>
      <div className={`${CSS.steps} ${lang === 'en' && CSS.stepsEN}`}>
        <div className={`${tabNumber === number ? CSS.active :tabNumber > number ? CSS.done : CSS.number}`}>0{number}</div>
        <div>
          <p>{texts[stepNumber]}</p>
          <h3>{texts[name]}</h3>
        </div>
      </div>
      {number !== 4 &&<div className={`${CSS.line} ${lang === 'en' && CSS.lineEN}`}></div>}
    </>
  }

  return (
    <div className={CSS.sidebar}>
      <div>
        <h1>{texts.accountSetting}</h1><br />

        {step('firstStep', 'basicInfo', 1)}

        {step('secondStep', 'studyAndCertificate', 2)}

        {step('thirdStep', 'teachingSpecification', 3)}

        {step('finalStep', 'availableTime', 4)}

        <div className={`${CSS.help} ${lang === 'en' && CSS.helpEN}`}>
          <div className={CSS.helpNumber}>؟</div>
          <div>
            <p>{texts.havingChallenges}</p>
            <h4>{texts.contactUs}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}