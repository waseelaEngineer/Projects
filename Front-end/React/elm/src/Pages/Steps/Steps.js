import { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import CSS from './Steps.module.css'
import SidebarSteps from '../../Components/SidebarSteps/SidebarSteps';
import StepOne from '../../Components/StepOne/StepOne';
import StepTwo from '../../Components/StepTwo/StepTwo';
import StepThree from '../../Components/StepThree/StepThree';
import StepFour from '../../Components/StepFour/StepFour';
import Thanks from '../../Components/Thanks/Thanks';
import Bottom from '../../Components/Bottom/Bottom';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

export default function Steps() {

  const { Tab, lang } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    let homePage = Tab !== "StepOne" && Tab !== "StepTwo" && Tab !== "StepThree" && Tab !== "StepFour" && Tab !== "thanks";   
    homePage && navigate('/home')
  }, [])

  return (
    <>
      {Tab === "thanks"
        ? (<Thanks />)
        : (<div className={`${CSS.container} ${lang === 'en' && CSS.containerEN}`}>

          <Header />
          <div className={CSS.sidebarContainer}>
            <SidebarSteps />
          </div>
          <div className={CSS.content}>
            {Tab === "StepOne" && (<StepOne />)}
            {Tab === "StepTwo" && (<StepTwo />)}
            {Tab === "StepThree" && (<StepThree />)}
            {Tab === "StepFour" && (<StepFour />)}
            <Bottom />
          </div>
        </div>
      )}
    </>
  )
}