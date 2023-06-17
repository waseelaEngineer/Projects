import React, { useContext } from 'react'
import CSS from './Main.module.css'
import Info from '../Info/Info'
import Texts from '../../Texts'
import { UserContext } from '../../Contexts/UserContext'

export default function Main() {

    const { lang } = useContext(UserContext);
    const texts = Texts[lang];
    let emptySpace = [];
    const allHours = ['08:00', '09:00', '10:00', '11:00', '12:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'];
    const morningHours = ['08:00', '09:00', '10:00', '11:00']
    const allCourses = [
        { name: 'mohamedAbdullrabman', type: 'privateLesson' },
        { name: 'improveSearchEngines', type: 'developmentCourse' },
        { name: 'abdullrahmanKhatry', type: 'privateLesson' },
    ];

    for (let i = 0; i < 4; i++) {
        emptySpace.push(<div key={i} className={CSS.empty}></div>)
    }

    function showNumbers(name, number) {
        return <div>
            <h4>{texts[name]}</h4>
            <h1>{number}</h1>
        </div>
    }

    function showCourses() {
        return allCourses.map(course => {
            return (
                <div key={course.name} className={CSS.courses}>
                    <div className={CSS.emptyDiv}>
                        {emptySpace}
                    </div>
                    <div className={`${CSS.private} ${texts[course.type] === texts.developmentCourse && CSS.course}`}>
                        <div>
                            <p>{texts[course.type]}</p>
                            <h3>{texts[course.name]}</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>{texts.lessonLink}</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <p className={CSS.main}>{texts.main}</p>
            <div className={CSS.score}>
                {showNumbers('teachingHours', '723810')}
                {showNumbers('studentsTeached', '9321')}
                {showNumbers('profileViews', '437102')}
            </div>

            <div className={CSS.selectDate}>
                <div>
                    <h3>{texts.dates}</h3>
                    <p>{texts.march} 2022</p>
                </div>
                <div className={CSS.buttonsContainer}>
                    <button className={CSS.on}>{texts.today}</button>
                    <button className={CSS.off}>{texts.weakly}</button>
                    <button className={CSS.off}>{texts.monthly}</button>
                </div>
            </div>

            <div className={CSS.lesson}>
                <div className={CSS.hours}>
                    {allHours.map(hour => (
                        <button key={hour}>{hour} {morningHours.includes(hour) ? texts.am : texts.pm}</button>
                    ))}
                </div>

                <div className={CSS.coursescontainer}>
                    {showCourses()}
                </div>
            </div>
            <span className={CSS.info}><Info /></span>
        </>
    )
}