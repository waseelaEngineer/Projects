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
            <div class={CSS.landing} dir='rtl'>
                <div >
                    <h1 className='down'>كن على تواصل دائم معنا</h1>
                    <form class={CSS.contactForm}>
                        <div>
                            <p>الاسم</p>
                            <input placeholder="الرجاء ادخال الاسم" />
                        </div>
                        <div>
                            <p>البريد الإلكتروني</p>
                            <input placeholder="yourname@gmail.com" />
                        </div>
                        <div>
                            <p>الرسالة</p>
                            <textarea placeholder="من فضلك اكتب رسالتك"></textarea>
                        </div>
                        <button>ارسال الرسالة</button>
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
