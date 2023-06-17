import React from 'react'
import CSS from './About.module.css'

//images
import landingShapLight from '../../../Images/landingShapLight.png'
import landingPath from '../../../Images/landingPath.png'
import aboutusDarkShape from '../../../Images/aboutusDarkShape.png'
import aboutusMarketing from '../../../Images/aboutusMarketing.png'
import crownLight from '../../../Images/crownLight.png'
import timeLight from '../../../Images/timeLight.png'
import scaleLight from '../../../Images/scaleLight.png'

export default function About() {
    return (
        <div dir='rtl'>
            <div class={CSS.landing}>
                <div>
                    <h1 className='down' style={{paddingTop: "150px"}}>وكالة تسويق رقمية رائدة</h1>
                    <p className='up'>نحن وكالة تسويق وإعلان رقمي نقدم جميع الخدمات والحلول المتكاملة. هدفنا الأساسي ليس فقط التميز في عملك وعلامتك التجارية ، ولكن تقديم خدمات قيمة للحصول على علاقة خاصة مع عملائك وبناءها. ضاعف معدل استثمارك بنتائج قياسية تهدف إلى الانتقال إلى المرحلة التالية من عملك. الابتكار والاستهداف المباشر لعملائك هو مفتاح نجاحنا.</p>
                </div>
                <div class={CSS.landingShapes}>
                    <img class={CSS.landingShapLightImg} src={landingShapLight} />
                    <img class={CSS.landingPathImg} src={landingPath} />
                    <img class={CSS.aboutusDarkShapImg} src={aboutusDarkShape} />
                    <img class={CSS.aboutusMarketingImg} src={aboutusMarketing} />
                </div>
            </div>
            <div class={CSS.iconsContainer}>
                <div>
                    <img src={crownLight} />
                    <h4>خبراء التسويق عبر الإنترنت</h4>
                    <p id='up'>لدينا كل المهارات لإنشاء وتنفيذ حملات تسويق ناجحة عبر الإنترنت.</p>
                </div>
                <div style={{paddingInline: "50px"}}>
                    <img src={timeLight} />
                    <h4>مواكبة للأفكار الإبداعية</h4>
                    <p id='up'>الإبداع اللامتناهي لمهنيينا جنبًا إلى جنب مع أحدث أساليب التسويق.</p>
                </div>
                <div>
                    <img src={scaleLight} />
                    <h4>تقديم خدمات مذهلة</h4>
                    <p id='up'>خدمات التسويق عبر الإنترنت المصممة لعملك وتسليمها في الوقت المحدد.</p>
                </div>
            </div>
        </div>
    )
}
