import React, { useContext } from 'react'
import CSS from './Bottom.module.css'
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Texts from '../../Texts';

export default function Bottom() {

    const { userDetails, Tab, setTab, subjects, time, lang } = useContext(UserContext);
    const navigate = useNavigate()
    let texts = Texts[lang]

    const stepOneCompleted = userDetails.country !== "" &&
        userDetails.city !== "" &&
        userDetails.type !== "" &&
        userDetails.prief !== "";

    const stepTwoCompleted = userDetails.certificate !== "" &&
        userDetails.specialization !== "" &&
        userDetails.experience !== "";

    const stepThreeCompleted = userDetails.student !== "" &&
        userDetails.price !== "" &&
        userDetails.teaching !== "" &&
        userDetails.stage !== "" &&
        subjects.length !== 0;

    let timeCompleted = 
        time.saturday.fromTime !== "" ||
        time.sunday.fromTime !== "" ||
        time.monday.fromTime !== "" ||
        time.tuesday.fromTime !== "" ||
        time.wednesday.fromTime !== "" ||
        time.thursday.fromTime !== "" ||
        time.friday.fromTime !== ""

    const stepFourCompleted = userDetails.order !== "" && timeCompleted

    function next() {
        if (Tab === "StepOne") { stepOneCompleted ? setTab("StepTwo") : alert("Please fill all details") }
        if (Tab === "StepTwo") { stepTwoCompleted ? setTab("StepThree") : alert("Please fill all details") }
        if (Tab === "StepThree") { stepThreeCompleted ? setTab("StepFour") : alert("Please fill all details") }
        if (Tab === "StepFour") { stepFourCompleted ? setTab("thanks") : alert("Please fill all details") }
        window.scrollTo(0, 0)
    }

    function previos() {
        if (Tab === "StepTwo") { setTab("StepOne") }
        if (Tab === "StepThree") { setTab("StepTwo") }
        if (Tab === "StepFour") { setTab("StepThree") }
        window.scrollTo(0, 0)
    }

    function skip() {
        setTab("main")
        navigate('/home')
        window.scrollTo(0, 0)
    }

    return (
        <div className={CSS.bottom}>
            <button onClick={previos} className={CSS.previos}>{texts.previos}</button>
            <button onClick={next} className={CSS.next}>{texts.next}</button>
            <button onClick={skip} className={CSS.skip}>{texts.skip}</button>
        </div>
    )
}
