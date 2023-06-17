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
import getStartedDark from '../../../Images/getStartedDark.png'
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
            <div className={CSS.landing}>
                <div>
                    <h1 className='down'>Web Design And <br /> Development Company KSA</h1>
                    <p className='up'>Work with one of the top-rated web development companies in KSA to have the best design, user-friendly website, relevant content, and buzz in social media.</p>
                    <button onClick={()=> navigate('/quote')} className={`${CSS.landingFreeQuote} up`}>Free Quote</button>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.landingWebImg} src={landingWeb} />
                </div>
            </div>
            <div className={CSS.offerService}>
                <div>
                    <h2 id='down' style={{paddingBlock: "50px"}}>We offer you this service</h2>
                    <div className={CSS.offerServiceContent}>
                        <div>
                            <img src={hosting} />
                            <h5>Hosted for a year</h5>
                            <p id='up'>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                        </div>
                        <div>
                            <img src={callCenter} />
                            <h5>Free technical support for one year</h5>
                            <p id='up'>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                        </div>
                        <div>
                            <img src={webContent} />
                            <h5>Website content</h5>
                            <p id='up'>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                        </div>
                        <div>
                            <img src={certificate} />
                            <h5>Security certificate</h5>
                            <p id='up'>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                        </div>
                    </div>
                </div>
                <div className={CSS.offerServiceImages}>
                    <img className={CSS.offerServicePathImg} src={offerServicePath} />
                    <img className={CSS.offerServiceMarketingImg} src={offerServiceMarketing} />
                    <img className={CSS.offerServiceShapeImg} src={offerServiceShapeLight} />
                </div>
            </div>
            <div className={CSS.features}>
                <div>
                    <h2 style={{paddingBlock: "50px"}}>Service features</h2>
                    <div className={CSS.serviceFeaturesTagContainer}>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p>Website design according to search engine archiving standards</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up'>
                            <p>Website design according to search engine archiving standards</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p>Website design according to search engine archiving standards</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up'>
                            <p>Website design according to search engine archiving standards</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <p>Website design according to search engine archiving standards</p>
                            <img src={serviceFeaturesTag} />
                        </div>
                    </div>
                </div>
                <div className={CSS.landingShapes}>
                    <img className={CSS.landingShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.featureCompleteImg} src={complete} />
                </div>
            </div>
            <div className={CSS.types}>
                <h2>Service types</h2>
                <div className={CSS.typesContent}>
                    <div id='down'>
                        <img src={realState} alt="" />
                        <h4>Real estate website design</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                    <div id='down'>
                        <img src={blog} alt="" />
                        <h4>Blog design websites</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                    <div id='down'>
                        <img src={programming} alt="" />
                        <h4>Programming corporate websites</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                    <div id='up'>
                        <img src={news} alt="" />
                        <h4>News websites design</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                    <div id='up'>
                        <img src={landingPage} alt="" />
                        <h4>landing page</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                    <div id='up'>
                        <img src={personalWebsite} alt="" />
                        <h4>Personal website design</h4>
                        <p>Lorem ipsum dolor sit amet,  Est quia esse id laboriosam .</p>
                    </div>
                </div>
                <img className={CSS.typesLeftShapeImg} src={typesLeftShape} alt="" />
                <img className={CSS.typesLeftPathImg} src={typesLeftPath} alt="" />
                <img className={CSS.typesRightPathImg} src={typesRightPath} alt="" />
                <img className={CSS.typesRightShapeImg} src={typesRightShape} alt="" />
            </div>
            <div className={CSS.ourServices}>
                <h2>Examples of our work</h2>
                <div id='down' className={CSS.servicesContent}>
                    <img src={example1} />
                    <img src={example2} />
                    <img src={example1} />
                    <img src={example2} />
                </div>
                <img src={featureLandingLightShape} />
            </div>
            <div className={CSS.packages}>
                <h2>Service packages</h2>
                <div className={CSS.packagesContent}>
                    <div id='up'>
                        <h4>The Silver plan</h4>
                        <h1>300 $</h1>
                        <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                        <h5>What’s Inside</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStarted}>
                            <h3>Get Started</h3>
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                    <div id='down' className={CSS.packagesPrimary}>
                        <h4>The Silver plan</h4>
                        <h1>300 $</h1>
                        <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                        <h5>What’s Inside</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkLight} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStartedPrimary}>
                            <img src={getStartedDark} alt="" />
                        </div>
                    </div>
                    <div id='up'>
                        <h4>The Silver plan</h4>
                        <h1>300 $</h1>
                        <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                        <h5>What’s Inside</h5>
                        <div className={CSS.packagesDetails}>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                            <div>
                                <img src={checkDark} alt="" />
                                <h5>Lorem ipsum dolor sit amet. </h5>
                            </div>
                        </div>
                        <div className={CSS.packagesGetStarted}>
                            <h3>Get Started</h3>
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={CSS.work}>
                <div>
                    <h2 style={{paddingBlock: "50px"}}>Work Plan</h2>
                    <div className={CSS.workContent}>
                        <div className={CSS.workLeft}>
                            <div id='up'>
                                <p>1</p>
                                <p>Lorem ipsum dolor sit amet. Et vitae nulla vel vitae sunt</p>
                            </div>
                            <div id='up'>
                                <p>3</p>
                                <p>Lorem ipsum dolor sit amet. Et vitae nulla vel vitae sunt</p>
                            </div>
                            <div id='up'>
                                <p>5</p>
                                <p>Lorem ipsum dolor sit amet. Et vitae nulla vel vitae sunt</p>
                            </div>
                        </div>
                        <div className={CSS.workRight}>
                            <div id='up'>
                                <p>2</p>
                                <p>Lorem ipsum dolor sit amet. Et vitae nulla vel vitae sunt</p>
                            </div>
                            <div id='up'>
                                <p>4</p>
                                <p>Lorem ipsum dolor sit amet. Et vitae nulla vel vitae sunt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={CSS.workShapes}>
                    <img className={CSS.workShapeImg} src={featureLandingLightShape} />
                    <img className={CSS.workCompleteImg} src={work} />
                </div>
            </div>
            <div className={CSS.useful}>
                <div>
                    <h2>What is useful to you</h2>
                    <div className={CSS.usefulContent}>
                        <div id='up'>
                            <img src={comunication} alt="" />
                            <div>
                                <h4>Communication with the world</h4>
                                <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                            </div>
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <img src={precense} alt="" />
                            <div>
                                <h4>permanent presence</h4>
                                <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                            </div>
                        </div>
                        <div id='up'>
                            <img src={manegment} alt="" />
                            <div>
                                <h4>Management from the middle of the spread world</h4>
                                <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
                            </div>
                        </div>
                        <div id='up' style={{alignSelf: "end"}}>
                            <img src={budget} alt="" />
                            <div>
                                <h4>Low marketing budget</h4>
                                <p>Lorem ipsum dolor sit amet, Est quia esse id laboriosam .</p>
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
