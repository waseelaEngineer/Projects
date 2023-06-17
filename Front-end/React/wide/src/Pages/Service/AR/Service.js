import React from 'react'
import CSS from './Service.module.css'

//images
import featureLandingLightShape from '../../../Images/featureLandingLightShape.png'
import landingWeb from '../../../Images/landingWeb.png'
import hosting from '../../../Images/hosting.png'
import callCenter from '../../../Images/callCenter.png'
import webContent from '../../../Images/webContent.png'
import certificate from '../../../Images/certificate.png'
import offerServicePath from '../../../Images/offerServicePath.png'
import offerServiceMarketing from '../../../Images/offerServiceMarketing.png'
import offerServiceShapeLight from '../../../Images/offerServiceShapeLight.png'
import serviceFeaturesTag from '../../../Images/serviceFeaturesTag.png'
import complete from '../../../Images/complete.png'
import realState from '../../../Images/realState.png'
import blog from '../../../Images/blog.png'
import programming from '../../../Images/programming.png'
import news from '../../../Images/news.png'
import landingPage from '../../../Images/landingPage.png'
import personalWebsite from '../../../Images/personalWebsite.png'
import typesLeftShape from '../../../Images/typesLeftShape.png'
import typesLeftPath from '../../../Images/typesLeftPath.png'
import typesRightPath from '../../../Images/typesRightPath.png'
import typesRightShape from '../../../Images/typesRightShape.png'
import example1 from '../../../Images/example1.png'
import example2 from '../../../Images/example2.png'
import checkDark from '../../../Images/checkDark.png'
import checkLight from '../../../Images/checkLight.png'
import leftArrow from '../../../Images/leftArrow.png'
import getStartedDark from '../../../Images/leftArrowDark.png'
import work from '../../../Images/work.png'
import comunication from '../../../Images/comunication.png'
import precense from '../../../Images/precense.png'
import manegment from '../../../Images/manegment.png'
import budget from '../../../Images/budget.png'
import landingShapLight from '../../../Images/landingShapLight.png'
import landingPath from '../../../Images/landingPath.png'
import report from '../../../Images/report.png'
import landingShapDark from '../../../Images/landingShapDark.png'
import plan from '../../../Images/plan.png'
import marketing from '../../../Images/marketing.png'
import rocket from '../../../Images/rocket.png'
import { useNavigate } from 'react-router-dom'


export default function Service() {

    const navigate = useNavigate();

    return (
        <>
            <div className={CSS.landing} dir='rtl'>
                <div>
                    <h1 className='down'>شركة تصميم وتطوير المواقع السعودية</h1>
                    <p className='up'>اعمل مع إحدى افضل شركات تطوير مواقع الكترونية والأعلى تصنيفًا في المملكة العربية السعودية للحصول على أفضل تصميم مواقع الكترونية سهل الاستخدام ، ومحتوى ذي صلة ، وضجة في وسائل التواصل الاجتماعي.</p>
                    <button onClick={()=> navigate('/quote')} className={`${CSS.landingFreeQuote} up`}>احصل على عرض سعر</button>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.landingWebImg} src={landingWeb} />
                </div>
            </div>
            <div className={CSS.offerService} dir='rtl'>
                <div>
                    <h2 id='down' style={{paddingBlock: "50px"}}>نقدم لك في هذه الخدمه</h2>
                    <div className={CSS.offerServiceContent}>
                        <div>
                            <img src={hosting} />
                            <h5>استضافه لمده سنه</h5>
                            <p id='up'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        </div>
                        <div>
                            <img src={callCenter} />
                            <h5>دعم فني مجاني لمده سنه</h5>
                            <p id='up'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        </div>
                        <div>
                            <img src={webContent} />
                            <h5>شهاده امان</h5>
                            <p id='up'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        </div>
                        <div>
                            <img src={certificate} />
                            <h5>محتوى الموقع</h5>
                            <p id='up'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        </div>
                    </div>
                </div>
                <div className={CSS.offerServiceImages}>
                    <img className={CSS.offerServicePathImg} src={offerServicePath} />
                    <img className={CSS.offerServiceMarketingImg} src={offerServiceMarketing} />
                    <img className={CSS.offerServiceShapeImg} src={offerServiceShapeLight} />
                </div>
            </div>
            <div className={CSS.features} dir='rtl'>
                <div>
                    <h2 style={{paddingBlock: "50px"}}>ميزات الخدمة</h2>
                    <div className={CSS.serviceFeaturesTagContainer}>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p>تصميم مواقع بناء على دراسه السوق و المنافسين </p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up'>
                            <p> تصميم مواقع طبقا لمعايير ارشفه محركات البحث</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p>تصميم مواقع مبنيه على تبسيط رحله العميل</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up'>
                            <p>تصميم مواقع ذات لوحه تحكم سهله </p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p> تصميم مواقع متجاوبه مع كافه الشاشات </p>
                            <img src={serviceFeaturesTag} />
                        </div>
                    </div>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.featureCompleteImg} src={complete} />
                </div>
            </div>
            <div className={CSS.types} dir='rtl'>
                <h2>أنواع الخدمة</h2>
                <div className={CSS.typesContent}>
                    <div id='down'>
                        <img src={realState} alt="" />
                        <h4>تصميم موقع عقاري</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <div id='down'>
                        <img src={blog} alt="" />
                        <h4>مواقع تصميم المدونات</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <div id='down'>
                        <img src={programming} alt="" />
                        <h4>برمجة مواقع الشركات</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <div id='up'>
                        <img src={news} alt="" />
                        <h4>تصميم مواقع الأخبار</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <div id='up'>
                        <img src={landingPage} alt="" />
                        <h4>صفحة الهبوط</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <div id='up'>
                        <img src={personalWebsite} alt="" />
                        <h4>تصميم موقع شخصي</h4>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                </div>
                <img className={CSS.typesLeftShapeImg} src={typesLeftShape} alt="" />
                <img className={CSS.typesLeftPathImg} src={typesLeftPath} alt="" />
                <img className={CSS.typesRightPathImg} src={typesRightPath} alt="" />
                <img className={CSS.typesRightShapeImg} src={typesRightShape} alt="" />
            </div>
            <div className={CSS.ourServices} dir='rtl'>
                <h2>نماذج من أعمالنا</h2>
                <div id='down' className={CSS.servicesContent}>
                    <img src={example1} />
                    <img src={example2} />
                    <img src={example1} />
                    <img src={example2} />
                </div>
                <img src={featureLandingLightShape} />
            </div>
            <div className={CSS.packages} dir='rtl'>
                <h2>باقات الخدمه</h2>
                <div className={CSS.packagesContent}>
                    <div  id='down'>
                        <h4>الباقة الفضية</h4>
                        <h1>300 $</h1>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        <h5>مميزات الباقة</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStarted}>
                            <h3>إبدا الان</h3>
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                    <div id='up' className={CSS.packagesPrimary}>
                        <h4>الباقة الخاصة</h4>
                        <h1>احصل على عرض سعر</h1>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        <h5>مميزات الباقة</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStartedPrimary}>
                            <h3>إبدا الان</h3>
                            <img src={getStartedDark} alt="" />
                        </div>
                    </div>
                    <div id='down'>
                        <h4>الباقة الذهبية</h4>
                        <h1>400 $</h1>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                        <h5>مميزات الباقة</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>هذا النص هو مثال لنص</h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStarted}>
                            <h3>إبدا الان</h3>
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={CSS.work} dir='rtl'>
                <div>
                    <h2 style={{paddingBlock: "50px"}}>خطة العمل</h2>
                    <div className={CSS.workContent}>
                        <div className={CSS.workLeft}>
                            <div id='up'>
                                <p>1</p>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                            <div id='up'>
                                <p>3</p>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                            <div id='up'>
                                <p>5</p>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                        <div className={CSS.workRight}>
                            <div id='up'>
                                <p>2</p>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                            <div id='up'>
                                <p>4</p>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={CSS.workShapes}>
                    <img className={CSS.workShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.workCompleteImg} src={work} />
                </div>
            </div>
            <div className={CSS.useful} dir='rtl'>
                <div>
                    <h2>بما تفيدك الخدمه</h2>
                    <div className={CSS.usefulContent}>
                        <div id='up'>
                            <img src={comunication} alt="" />
                            <div>
                                <h4>التواصل مع العالم</h4>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <img src={precense} alt="" />
                            <div>
                                <h4>التواجد الدائم</h4>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                        <div id='up'>
                            <img src={manegment} alt="" />
                            <div>
                                <h4>الاداره من مركز العالم الانتشار</h4>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <img src={budget} alt="" />
                            <div>
                                <h4>انخفاض ميزانيه التسويق</h4>
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={CSS.usefulShapes}>
                    <img className={CSS.usefulShapLightImg} src={landingShapLight} />
                    <img className={CSS.usefulPathImg} src={landingPath} />
                    <img className={CSS.usefulReportImg} src={report} />
                    <img className={CSS.usefulShapDarkImg} src={landingShapDark} />
                    <img className={CSS.usefulPlanImg} src={plan} />
                    <img className={CSS.usefulMarketingImg} src={marketing} />
                    <img className={CSS.usefulRocketImg} src={rocket} />
                </div>
            </div>
        </>
    )
}
