import React from 'react'
import CSS from './Quote.module.css'

// images
import landingPath from '../../../Images/landingPath.png'
import freeQuoteShapeLight from '../../../Images/freeQuoteShapeLight.png'
import landingShapDark from '../../../Images/landingShapDark.png'
import rocket from '../../../Images/rocket.png'
import freeQuoteStudy from '../../../Images/freeQuoteStudy.png'

export default function Quote() {
    return (
        <>
            <div className={CSS.landing}>
                <div >
                    <h1 className='down' style={{paddingTop: "50px"}}>Free Quote</h1>
                    <p>Fill out the form below and get a free quote for your upcoming project.</p>
                    <form className={CSS.contactForm}>
                        <div>
                            <p>NAME</p>
                            <input placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <p>EMAIL</p>
                            <input placeholder="Enter Your Email" />
                        </div>
                        <div>
                            <p>PHONE</p>
                            <input placeholder="(+966) 123 456 789" />
                        </div>
                        <div>
                            <p>SUBJECT</p>
                            <input placeholder="Enter The Subject" />
                        </div>
                        <div>
                            <p>MESSAGE</p>
                            <textarea placeholder="Enter Your Message"></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingPathImg} src={landingPath} />
                    <img className={CSS.landingShapLightImg} src={freeQuoteShapeLight} />
                    <img className={CSS.landingShapDarkImg} src={landingShapDark} />
                    <img className={CSS.landingRocketImg} src={rocket} />
                    <img className={CSS.landingStudyImg} src={freeQuoteStudy} />
                </div>
            </div>
        </>
    )
}
