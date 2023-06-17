import React from 'react'
import CSS from './Home.module.css'

//images
import wide from '../../../Images/wide.png'
import leftArrow from '../../../Images/leftArrow.png'
import play from '../../../Images/play.png'
import playShadow from '../../../Images/playShadow.png'
import landingShapLight from '../../../Images/landingShapLight.png'
import landingPath from '../../../Images/landingPath.png'
import report from '../../../Images/report.png'
import landingShapDark from '../../../Images/landingShapDark.png'
import plan from '../../../Images/plan.png'
import marketing from '../../../Images/marketing.png'
import rocket from '../../../Images/rocket.png'
import whoWeAre from '../../../Images/whoWeAreAR.png'
import crown from '../../../Images/crown.png'
import time from '../../../Images/time.png'
import scale from '../../../Images/scale.png'
import whoWeArePath from '../../../Images/whoWeArePath.png'
import learnMoreDark from '../../../Images/learnMoreDarkAR.png'
import leftArrowDark from '../../../Images/leftArrowDark.png'
import brand from '../../../Images/brand.png'
import readMoreLight from '../../../Images/readMoreLight.png'
import email from '../../../Images/email.png'
import graphics from '../../../Images/graphics.png'
import onlineMarketing from '../../../Images/onlineMarketing.png'
import payPerClick from '../../../Images/payPerClick.png'
import searchEngine from '../../../Images/searchEngine.png'
import socialMedia from '../../../Images/socialMedia.png'
import videoProduction from '../../../Images/videoProduction.png'
import webDesign from '../../../Images/webDesign.png'
import chooseShapeLight from '../../../Images/chooseShapeLight.png'
import chooseMarketing from '../../../Images/chooseMarketing.png'
import chooseArtist from '../../../Images/chooseArtist.png'
import chooseReport from '../../../Images/chooseReport.png'
import chooseBox from '../../../Images/chooseBox.png'
import questionsFaq from '../../../Images/questionsFaq.png'
import questionsShapeLight from '../../../Images/questionsShapeLight.png'
import questionArrowLeft from '../../../Images/questionArrowLeft.png'
import freeQuote from '../../../Images/freeQuoteAR.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    
    const navigate = useNavigate();

    function links(page){
        navigate(`/${page}`)
        window.scrollTo(0,0);
    }

    document.onclick = function(e){
        if (e.target.classList.contains('questionsArea') || e.target.closest('.questionsArea') !== null){
            if (e.target.classList.contains('activeQuestion') || e.target.closest('.questionsArea').classList.contains('activeQuestion')){
                const data = document.querySelectorAll('.questionsArea');
                data.forEach( item => {
                    item.classList.remove("activeQuestion");
                });
            }   
            else{
                const data = document.querySelectorAll('.questionsArea');
                data.forEach( item => {
                    item.classList.remove("activeQuestion");
                });
                
                if (e.target.classList.contains('questionsArea')){
                    e.target.classList.add("activeQuestion")
                }
                else {
                    e.target.closest('.questionsArea').classList.add("activeQuestion")
                }
            }
        }
    }

    return (
        <>
            <div className={CSS.landing} dir='rtl'>
                <div>
                    <img className='down' src={wide} style= {{paddingBottom: "20px", paddingTop: "60px"}} />
                    <h1 className='down' style={{fontWeight: "50"}}>وكالة التسويق الرقمي <br />في الرياض، المملكة العربية السعودية</h1>
                    <p className='up' style={{paddingBlock: "20px"}}>نحن وكالة التسويق الرقمي متكاملة الخدمات في الرياض تركز على النتائج والاستراتيجية والتكنولوجيا وتصميم الجودة والمحتوى.</p>
                    <div className={`${CSS.action} up`}>
                        <div onClick={()=> links('quote')} className={CSS.getStarted}>
                            <h4>احصل على عرض سعر</h4>
                            <img src={leftArrow} />
                            <div></div>
                        </div>
                        <div className={CSS.watchVideo}>
                            <div>
                                <img src={play} />
                                <img src={playShadow} />
                            </div>
                            <h4>شاهد الفيديو الخاص بنا</h4>
                        </div>
                    </div>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingShapLightImg} src={landingShapLight.png} />
                    <img className={CSS.landingPathImg} src={landingPath} />
                    <img className={CSS.landingReportImg} src={report} />
                    <img className={CSS.landingShapDarkImg} src={landingShapDark} />
                    <img className={CSS.landingPlanImg} src={plan} />
                    <img className={CSS.landingMarketingImg} src={marketing} />
                    <img className={CSS.landingRocketImg} src={rocket} />
                </div>
            </div>
            <div className={CSS.whoWeAre} dir='rtl'>
                <div className={CSS.whoWeAreTop}>
                    <img src={whoWeAre} />
                    <h1 id='up'>وكالة تسويق رقمية رائدة</h1>
                    <p id='down'>نحن وكالة التسويق الرقمي موثوقة وفعالة مع نتائج مثبتة. سنحقق زيادة ثابتة وثابتة في عائد استثمارك من خلال قوة استراتيجية تسويق رقمية قوية. عملك يستحق استراتيجية عالية الأداء ونتائج مهمة ، وليس الوعود والكلمات الفارغة. دع فريق الخبراء لدينا يحفز نموك وينقل علامتك التجارية إلى المستوى التالي.</p>
                </div>
                <div className={CSS.whoWeAreBottom}>
                    <div className={CSS.whoWeAreIcons}>
                        <div>
                            <img src={crown} />
                            <h4>خبراء التسويق عبر الإنترنت</h4>
                            <p id='up'>لدينا كل المهارات لإنشاء وتنفيذ حملات تسويق ناجحة عبر الإنترنت.</p>
                        </div>
                        <div style={{paddingInline: "50px"}}>
                            <img src={time} />
                            <h4>مواكبة للأفكار الإبداعية</h4>
                            <p id='up'>الإبداع اللامتناهي لمهنيينا جنبًا إلى جنب مع أحدث أساليب التسويق.</p>
                        </div>
                        <div>
                            <img src={scale} style={{paddingTop: "10px"}} />
                            <h4>تقديم خدمات مذهلة</h4>
                            <p id='up'>خدمات التسويق عبر الإنترنت المصممة لعملك وتسليمها في الوقت المحدد.</p>
                        </div>
                    </div>
                    <div className={CSS.whoWeAreBottomShap}></div>
                </div>
                <img src={whoWeArePath} className={CSS.whoWeArePathImg} />
                <img src={plan} className={CSS.whoWeArePlanImg} />
                <img src={rocket} className={CSS.whoWeAreRocketImg} />
            </div>
            <div onClick={()=> links('about')} className={CSS.whoWeAreMore}>
                <img src={leftArrowDark}  />
                <img src={learnMoreDark} />
            </div>
            <div className={CSS.ourServices}>
                <h1>خدماتنا</h1>
                <p id='up' style={{fontSize: "25px", paddingBottom: "20px"}}>ما نقدمه لعملائنا</p>
                <div className={CSS.servicesContainer}>
                    <div>
                        <img src={brand} />
                        <h3>Brand Development</h3>
                        <p>We help you define the organization’s products, services, and personality.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={email} />
                        <h3>Email Marketing</h3>
                        <p>We give you everything you need to run successful email marketing campaigns.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={graphics} style={{paddingTop: "10px", paddingBottom: "10px"}} />
                        <h3>Graphic Design</h3>
                        <p>We know how to take your advantages and turn the into efficient messages.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={onlineMarketing} style= {{paddingBottom: "10px"}} />
                        <h3>Online Marketing</h3>
                        <p>We offer professional and effective internet marketing services that build your online presence and brand viability.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={payPerClick} />
                        <h3>Pay-Per-Click Ads</h3>
                        <p>Our agency handles all the strategy management, design, copywriting, bid management, and optimization of your ads.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={searchEngine} />
                        <h3>Search Engine Optimization</h3>
                        <p>We will help your website climb the organic search rankings on search engines.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={socialMedia}/>
                        <h3>Social Media Marketing</h3>
                        <p>An experienced social media marketing agency offers SMM services to engage with your audience.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={videoProduction} />
                        <h3>Video Production</h3>
                        <p>We are a full-fledged creative video content production agency operating in Saudi Arabia.</p>
                        <img src={readMoreLight} />
                    </div>
                    <div>
                        <img src={webDesign} />
                        <h3>Web Design</h3>
                        <p>Work with one of the top-rated web development companies in KSA.</p>
                        <img src={readMoreLight} />
                    </div>
                </div>
            </div>
            <div className={CSS.choose}>
                <h1>؟ Wide لماذا تختار </h1>
                <img src={chooseShapeLight} />
                <div id='down' className={CSS.chooseContent}>
                    <div>
                        <img src={chooseMarketing} />
                        <h3>تسويق رقمي متكامل الخدمات</h3>
                        <p>نحن وكالة تسويق محترفة نقدم كل ما تحتاجه لزيادة الوعي بالعلامة التجارية ، </p>
                    </div>
                    <div>
                        <img src={chooseArtist} />
                        <h3>محترفون ذوو خبرة</h3>
                        <p>تتكون وكالتنا من خبراء التسويق والمصممين المحترفين والمطورين </p>
                    </div>
                    <div>
                        <img src={chooseReport} />
                        <h3>تقارير شفافة وواضحة</h3>
                        <p>سوف نرسل لك تقارير على أساس منتظم مع تحليل واضح وسهل الفهم للمواد التحليلية </p>
                    </div>
                    <div>
                        <img src={chooseBox} />
                        <h3>تسويق رقمي متكامل الخدمات</h3>
                        <p>نحن وكالة تسويق محترفة نقدم كل ما تحتاجه لزيادة الوعي بالعلامة التجارية ، </p>
                    </div>
                </div>
            </div>
            <div className={CSS.questions} dir='rtl'>
                <h1 style={{paddingTop: "70px"}}>الأسئلة الشائعة</h1>
                <img src={questionsFaq} className={CSS.questionsFaqImg} />
                <img src={questionsShapeLight} className={CSS.questionsShapeImg} />
                <div className={"questionsContainer"}>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>ما نوع الأعمال التي تعمل معها ؟</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>لا توجد اجابه حتى الان</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>هل التسويق عبر البريد الالكتروني فعال ؟</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>لا توجد اجابه حتى الان</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>ما هي قنوات التواصل الاجتماعي التي يجب علي اختيارها ؟</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>لا توجد اجابه حتى الان</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>هل يجب ان اقدم لك اي محتوى لموقعي على الويب آو وسائل التواصل الاجتماعي او تحسين محركات البحث؟</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>لا توجد اجابه حتى الان</p>
                    </div>
                </div>
            </div>
            <div className={CSS.freeQuote}>
                <h1>! هيا بنا نبدأ</h1>
                <p style={{paddingBlock: "50px"}}>احصل على استشارة مجانية وعرض مخصص اليوم ، لتجعل علامتك التجارية مرئية لملايين الأشخاص!</p>
                <img id='up' onClick={()=> links('quote')} src={freeQuote} />
            </div>
        </>
    )
}
