import React, { useContext, useRef, useState } from 'react'
import CSS from './Schedule.module.css';
import { UserContext } from '../../Contexts/UserContext';
import Texts from '../../Texts';

export default function Schedule() {

    const { time, setTime, lang } = useContext(UserContext);
    const [to, setTo] = useState({ time: "", state: "am" });
    const [from, setFrom] = useState({ time: "", state: "am" });
    const [selectedDay, setSelectedDay] = useState("");
    const allDays = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    const unavailableCheckbox = useRef();
    const texts = Texts[lang] 

    function saveDayEdit() {
        if (from.time !== "" && to.time !== "") {
            setTime({
                ...time, [selectedDay]: {
                    fromTime: from.time,
                    fromState: from.state,
                    toTime: to.time,
                    toState: to.state
                }
            })
        }
        else { setTime({ ...time, [selectedDay]: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        setSelectedDay("")
    }

    function handleDayEdit(day) {
        setSelectedDay(day)
        setTo({ ...to, time: "" })
        setFrom({ ...from, time: "" })
        window.scrollTo(0, 0)
        unavailableCheckbox.current.checked = false;
    }

    return (
        <>
            <div className={CSS.timeContainer}>
                {allDays.map( day => (
                    <div key={day} className={`${CSS.time} ${ time[day].toTime !== "" && CSS.timeActive} `}>
                        <div>
                            <h4>{texts[day]}</h4>
                            <p className={CSS.edit} onClick={() => { handleDayEdit(day) }}>{texts.edit}</p>
                        </div>
                        {time[day].toTime === ""
                            ? (<p>{texts.unavailable}</p>)
                            : (<p>{time[day].fromTime} {texts[time[day].fromState]} {texts.to} {time[day].toTime} {texts[time[day].toState]}</p>)
                        }
                    </div>
                ))}
            </div>

            <div className={`${CSS.enterTime} ${selectedDay !== "" && CSS.show}`}>
                <div className={`${CSS.header} ${lang === 'en' && CSS.headerEN }`}>
                    <h1>{texts.selectAvailableTime}</h1>
                    <h2 onClick={() => { setSelectedDay("") }}>x</h2>
                </div>
                <p>{texts[selectedDay]}</p>
                <div className={`${CSS.input} ${lang === 'en' && CSS.inputEN}`}>
                    <div style={{ position: "relative" }}>
                        <input type="number" placeholder={texts.from} value={from.time} onChange={(e) => { setFrom({ ...from, time: e.target.value }) }}></input>
                        <select className={CSS.timeSelect} defaultValue={from.state} onChange={(e) => { setFrom({ ...from, state: e.target.value }) }}>
                            <option value="am">{texts.am}</option>
                            <option value="pm">{texts.pm}</option>
                        </select>
                    </div>
                    <div style={{ position: "relative" }}>
                        <input type="number" placeholder={texts.to} value={to.time} onChange={(e) => { setTo({ ...to, time: e.target.value }) }}></input>
                        <select className={CSS.timeSelect} defaultValue={to.state} onChange={(e) => { setTo({ ...to, state: e.target.value }) }}>
                            <option value="am">{texts.am}</option>
                            <option value="pm">{texts.pm}</option>
                        </select>
                    </div>
                </div>
                <div className={CSS.header}>
                    <label><input type="checkbox" ref={unavailableCheckbox} onClick={(e)=>{e.target.checked && saveDayEdit()}}/>{texts.unavailable}</label>
                    <button onClick={saveDayEdit}>{texts.save}</button>
                </div>
            </div>
        </>
    )
}