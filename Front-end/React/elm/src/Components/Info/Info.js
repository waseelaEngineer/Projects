import React, { useContext } from 'react'
import CSS from './Info.module.css'
import profile from '../../images/profile.jpg'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function Info() {

    const { userDetails, activeUser, lang, setTab } = useContext(UserContext);
    const allLinks = ["howYourFileShow", "inviteFriends", "enterCode", "terms", "policy", "technicalSupport"];
    const texts = Texts[lang];

    function time(time, type) {
        return <div>
            <h1>{time}</h1>
            <p>{texts[type]}</p>
        </div>
    }

    return (
        <div className={CSS.info}>

            <div className={CSS.balance}>
                <div className={CSS.price}>
                    <h1>6450.00</h1>
                    <p>{texts.sr} </p>
                </div>
                <p>{texts.totalBalance}</p>
                <button onClick={() => { setTab("savings"); }}>{texts.moneyTransactions}</button>
            </div>

            <h2>{texts.nextAppointment}</h2>
            <div className={CSS.date}>
                <div className={CSS.teacher}>
                    <img src={profile} alt='logo' />
                    <div>
                        <h3>{activeUser.name}</h3>
                        <p className={CSS.tag}>{texts[userDetails.teaching]}</p>
                    </div>
                </div>
                <div className={CSS.time}>
                    {time('36', 'minutes')}
                    {time('05', 'hours')}
                    {time('01', 'days')}
                </div>
                <button>{texts.lessonLink}</button>
            </div>

            <h2>{texts.quickLinks}</h2>
            <div className={`${CSS.links} ${lang === 'en' && CSS.linksEN}`}>
                {allLinks.map(link => (
                    <div key={link}><h4>{texts[link]}</h4></div>
                ))}
            </div>

        </div>
    )
}