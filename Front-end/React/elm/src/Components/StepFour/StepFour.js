import React, {useContext, useEffect, useRef} from 'react'
import CSS from './StepFour.module.css'
import {UserContext} from '../../Contexts/UserContext'
import Schedule from '../Schedule/Schedule';
import Texts from '../../Texts';

export default function StepFour() {

    const {userDetails, setUserDetails, lang} = useContext(UserContext);
    let texts = Texts[lang];

    function reservation(type){
        setUserDetails({...userDetails, reservation: type })
    }

    function reservationTypeClass(type){
        return `${CSS.order} ${userDetails.reservation === type && CSS.active}`
    }

  return (
    <>
        <p>{texts.finalStep}</p>
        <h1 className={CSS.title}>{texts.availableTime}</h1>
        <h4>{texts.reservationType}</h4>

        <div className={CSS.orderContainer}>
            <div>
                <div className={reservationTypeClass("date")} onClick={()=>{reservation("date")}}>
                    <h4>{texts.reservationBySchedule}</h4>
                    <p>{texts.dateSelectionBySchedule}</p> 
                </div>
            </div>
            <div>
                <div className={reservationTypeClass("chat")} onClick={()=>{reservation("chat")}}>
                    <h4>{texts.reservationByMassaging}</h4>
                    <p>{texts.dateSelectionByMassaging}</p>                    
                </div>
            </div>
        </div>

        <h4>{texts.personalSchedule}</h4>

        <Schedule />
    </>
  )
}