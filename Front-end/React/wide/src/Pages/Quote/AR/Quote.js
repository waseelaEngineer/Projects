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
            <div className={CSS.landing} dir='rtl'>
                <div >
                    <h1 className='down' style={{paddingTop: "50px"}}>احصل على عرض سعر</h1>
                    <p>قم بتعبئة البيانات للحصول على عرض سعر لمشروعك القادم</p>
                    <form className={CSS.contactForm}>
                        <div>
                            <p>الاسم</p>
                            <input placeholder="الرجاء ادخال الاسم" />
                        </div>
                        <div>
                            <p>البريد الإلكتروني</p>
                            <input placeholder="yourname@gmail.com" />
                        </div>
                        <div>
                            <p>رقم الهاتف</p>
                            <input placeholder="789 456 123 (966+)"/>
                        </div>
                        <div>
                            <p>الموضوع</p>
                            <input placeholder="موضوع الرسالة" />
                        </div>
                        <div>
                            <p>الرسالة</p>
                            <textarea placeholder="من فضلك اكتب رسالتك"></textarea>
                        </div>
                        <button>ارسال الرسالة</button>
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
