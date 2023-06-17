import React from 'react'
import CSS from './Contact.module.css'

// images
import landingShapLight from '../../../Images/landingShapLight.png'
import landingPath from '../../../Images/landingPath.png'
import landingShapDark from '../../../Images/landingShapDark.png'
import rocket from '../../../Images/rocket.png'
import contactusMessage from '../../../Images/contactusMessage.png'

export default function Contact() {
    return (
        <>
            <div class={CSS.landing}>
                <div >
                    <h1 className='down'>Contact Us</h1>
                    <form class={CSS.contactForm}>
                        <div>
                            <p>NAME</p>
                            <input placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <p>EMAIL</p>
                            <input placeholder="Enter Your Email" />
                        </div>
                        <div>
                            <p>MESSAGE</p>
                            <textarea placeholder="Enter Your Message"></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div class={CSS.landingShapes}>
                    <img class={CSS.landingShapLightImg} src={landingShapLight} />
                    <img class={CSS.landingPathImg} src={landingPath} />
                    <img class={CSS.landingShapDarkImg} src={landingShapDark} />
                    <img class={CSS.landingRocketImg} src={rocket} />
                    <img class={CSS.landingMessageImg} src={contactusMessage} />
                </div>
            </div>
        </>
    )
}
