import React, { useContext } from 'react'
import CSS from './StepThree.module.css'
import { UserContext } from '../../Contexts/UserContext'
import Subjects from '../Subjects/Subjects';
import Texts from '../../Texts';

export default function StepThree() {

    const { userDetails, setUserDetails, lang } = useContext(UserContext);
    const allStages = ["intermedate", "highschool", "university"];
    let texts = Texts[lang];

    function teachingType(type) {
        setUserDetails({ ...userDetails, teaching: type })
    }

    function teachingtypeDivClass(type){
        return `${CSS.teachingType} ${userDetails.teaching === type && CSS.active}`
    }

    function teachingtypeInputClass(type){
        return `${CSS.price} ${userDetails.teaching === type && CSS.show}`
    }

    function studentType(gender) {
        setUserDetails({ ...userDetails, student: gender })
    }

    function studentTypeButtonClass(gender) {
        return `${CSS.button} ${lang === 'en' && CSS.buttonEN} ${userDetails.student === gender && CSS.active}`
    }

    function studentStage(stage){
        setUserDetails({ ...userDetails, stage: stage })
    }

    function studentStageButtonClass(stage) {
        return `${CSS.button} ${lang === 'en' && CSS.buttonEN} ${userDetails.stage === stage && CSS.active}`
    }

    return (
        <>
            <p>{texts.thirdStep}</p>
            <h1 className={CSS.title}>{texts.teachingSpecification}</h1>
            <h4>{texts.teachingTypes}</h4>

            <div className={CSS.typesContainer}>
                
                <div className={teachingtypeDivClass("attend")} onClick={()=>{teachingType("attend")}}>
                    <div className={CSS.type}>
                        <h4>{texts.attend}</h4>
                        <p>{texts.chooseAttendPlace}</p>
                    </div>
                    <div>
                        <div className={teachingtypeInputClass("attend")}>
                            <input
                                type='number'
                                defaultValue={userDetails.price}
                                placeholder={texts.hourPrice}
                                onChange={(e) => (setUserDetails({ ...userDetails, price: e.target.value }))} >
                            </input>
                            <button>{texts.sr}</button>
                        </div>
                    </div>
                </div>

                <div className={teachingtypeDivClass("remote")} onClick={()=>{teachingType("remote")}}>
                    <div className={CSS.type}>
                        <h4>{texts.remote}</h4>
                        <p>{texts.makeOnZoom}</p>
                    </div>
                    <div>
                        <div className={teachingtypeInputClass("remote")}>
                            <input
                                type='number'
                                defaultValue={userDetails.price}
                                placeholder={texts.hourPrice}
                                onChange={(e) => (setUserDetails({ ...userDetails, price: e.target.value }))} >
                            </input>
                            <button>{texts.sr}</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={CSS.typesContainer}>
                <div>
                    <h3>{texts.studentType}</h3>
                    <button className={studentTypeButtonClass("male")} onClick={()=>{studentType("male")}}>{texts.men}</button>
                    <button className={studentTypeButtonClass("female")} onClick={()=>{studentType("female")}}>{texts.women}</button>
                </div>
                <div>
                    <h3>{texts.studentStage}</h3>
                    {allStages.map(stage =>(
                        <button key={stage} className={studentStageButtonClass(stage)} onClick={()=>{studentStage(stage)}}>{texts[stage]}</button>
                    ))}
                </div>
            </div>

            <Subjects />
        </>
    )
}