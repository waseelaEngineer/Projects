import React from 'react'
import CSS from './Footer.module.css'

// images
import logoLight from '../../../Images/logoLight.png'
import spaceLight from '../../../Images/spaceLight.png'
import facebookLight from '../../../Images/facebookLight.png'
import twitterLight from '../../../Images/twitterLight.png'
import linkedinLight from '../../../Images/linkedinLight.png'
import instagramLight from '../../../Images/instagramLight.png'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate();

    function links(page){
        navigate(`/${page}`)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className={CSS.footerContainer} dir='rtl'>
                <div className={CSS.footer}>
                    <div className={CSS.footerContent}>
                        <img src={logoLight} />
                        <h3 style={{paddingBlock: "20px"}}>وكالة التسويق الرقمي  في الرياض ، المملكة العربية السعودية</h3>
                        <p>نحن وكالة التسويق الرقمي متكاملة الخدمات في الرياض تركز على النتائج والاستراتيجية والتكنولوجيا وتصميم الجودة والمحتوى.</p>
                    </div>
                    <div className={CSS.footerDetails}>
                        <div className={CSS.footerLinks}>
                            <h3>روابط سريعة</h3>
                            <div>
                                <img src={spaceLight}/>
                                <a onClick={()=> links("about")}>من نحن</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a onClick={()=> links("service")}>تسويق الكتروني</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a onClick={()=> links("contact")}>تواصل معنا</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a onClick={()=> links("quote")}>احصل على عرض سعر</a>
                            </div>
                        </div>
                        <div className={CSS.footerContact}>
                            <h3>تابعنا على القنوات المختلفة</h3>
                            <div>
                                <img src={facebookLight} />
                                <img src={twitterLight} />
                                <img src={linkedinLight} />
                                <img src={instagramLight} />
                            </div>
                            <a href='tel: +966576344747'>8000 477 55  966+ </a>
                        </div>
                    </div>
                </div>
                <h4 className={CSS.rights} dir='ltr'>© 2023 WIDE. All Rights Reserved.</h4>
            </div>
        </>
    )
}
