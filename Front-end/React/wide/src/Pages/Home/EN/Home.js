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
import whoWeAre from '../../../Images/whoWeAre.png'
import crown from '../../../Images/crown.png'
import time from '../../../Images/time.png'
import scale from '../../../Images/scale.png'
import whoWeArePath from '../../../Images/whoWeArePath.png'
import learnMoreDark from '../../../Images/learnMoreDark.png'
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
import freeQuote from '../../../Images/freeQuote.png'
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
            <div className={CSS.landing}>
                <div>
                    <img className='down' src={wide} style= {{paddingBottom: "20px", paddingTop: "60px"}} />
                    <h1 className='down' style={{fontWeight: "50"}}>Marketing Agency in Riyadh, KSA</h1>
                    <p className='up' style={{paddingBlock: "20px"}}>We are a full-service digital marketing agency in Riyadh focused on results, strategy, technology, quality design, and content.</p>
                    <div className={`${CSS.action} up`}>
                        <div onClick={()=> links('quote')} className={CSS.getStarted}>
                            <h4>Get Started</h4>
                            <img src={leftArrow} />
                            <div></div>
                        </div>
                        <div className={CSS.watchVideo}>
                            <div>
                                <img src={play} />
                                <img src={playShadow} />
                            </div>
                            <h4>Watch Our Video</h4>
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
            <div className={CSS.whoWeAre}>
                <div className={CSS.whoWeAreTop}>
                    <img src={whoWeAre} />
                    <h1 id='up'>Leading Digital Marketing Agency</h1>
                    <p id='down'>We are a digital marketing and advertising agency providing all services and integrated solutions. Our primary goal is not only to excel in your business and brand, but to provide valuable services to obtain and build a special relationship with your customers. Double your investment rate with record results, aimed at moving to the next stage of your business. Innovation and direct targeting of your customers is the key to our success.</p>
                </div>
                <div className={CSS.whoWeAreBottom}>
                    <div className={CSS.whoWeAreIcons}>
                        <div>
                            <img src={crown} />
                            <h4>Online marketing experts</h4>
                            <p id='up'>We have every skill to create and execute successful online marketing campaigns.</p>
                        </div>
                        <div style={{paddingInline: "50px"}}>
                            <img src={time} />
                            <h4>Up to date with creative ideas</h4>
                            <p id='up'>Never-ending creativity of our professionals combined with the latest marketing tactics.</p>
                        </div>
                        <div>
                            <img src={scale} style={{paddingTop: "10px"}} />
                            <h4>Deliver amazing services</h4>
                            <p id='up'>Online marketing services tailored to your business & delivered on time</p>
                        </div>
                    </div>
                    <div className={CSS.whoWeAreBottomShap}></div>
                </div>
                <img src={whoWeArePath} className={CSS.whoWeArePathImg} />
                <img src={plan} className={CSS.whoWeArePlanImg} />
                <img src={rocket} className={CSS.whoWeAreRocketImg} />
            </div>
            <a href="">
                <img onClick={()=> links('about')} src={learnMoreDark} className={CSS.whoWeAreMore} />
            </a>
            <div className={CSS.ourServices}>
                <h1>OUR SERVICES</h1>
                <p id='up' style={{fontSize: "25px", paddingBottom: "20px"}}>What We Offer To Our Costumers</p>
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
                <h1>Why Choose Wide</h1>
                <img src={chooseShapeLight} />
                <div id='down' className={CSS.chooseContent}>
                    <div>
                        <img src={chooseMarketing} />
                        <h3>Full-service digital marketing</h3>
                        <p>We are a professional marketing agency providing everything you </p>
                    </div>
                    <div>
                        <img src={chooseArtist} />
                        <h3>Experienced professionals</h3>
                        <p>professional designers, and talented developers who work</p>
                    </div>
                    <div>
                        <img src={chooseReport} />
                        <h3>Transparent and clear reports</h3>
                        <p>We will send you reports on a regular basis with a clear</p>
                    </div>
                    <div>
                        <img src={chooseBox} />
                        <h3>Full-service digital marketing</h3>
                        <p>increase brand awareness, generate leads, and grow your</p>
                    </div>
                </div>
            </div>
            <div className={"questions"}>
                <h1 style={{paddingTop: "70px"}}>Frequently Asked Questions</h1>
                <img src={questionsFaq} className={"questionsFaqImg"} />
                <img src={questionsShapeLight} className={"questionsShapeImg"} />
                <div className={"questionsContainer"}>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>What Kind of businesses do you work with?</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>We work with any organization, whether it’s a small or medium business or a large enterprise. Feel free to contact us or leave a quote despite the scale of your business.</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>Is email marketing effective?</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>We work with any organization, whether it’s a small or medium business or a large enterprise. Feel free to contact us or leave a quote despite the scale of your business.</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>What social media channels should l choose for SMM ?</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>We work with any organization, whether it’s a small or medium business or a large enterprise. Feel free to contact us or leave a quote despite the scale of your business.</p>
                    </div>
                    <div id='up' className={"questionsArea"}>
                        <div>
                            <a>Should l provide you with any content for  my website, Social media or SEO?</a>
                            <img src={questionArrowLeft} alt="" />
                        </div>
                        <p>We work with any organization, whether it’s a small or medium business or a large enterprise. Feel free to contact us or leave a quote despite the scale of your business.</p>
                    </div>
                </div>
            </div>
            <div className={CSS.freeQuote}>
                <h1>Let’s get started!</h1>
                <p style={{paddingBlock: "50px"}}>Get your free consultation and customized offer today, to make your brand seen by millions of people!</p>
                <img id='up' onClick={()=> links('quote')} src={freeQuote} />
            </div>
        </>
    )
}
