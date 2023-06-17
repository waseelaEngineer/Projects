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
        <>
            <div class={CSS.landing}>
                <div>
                    <h1 className='down' style={{paddingTop: "150px"}}>About Us</h1>
                    <p className='up'>We are a digital marketing and advertising agency providing all services and integrated solutions. Our primary goal is not only to excel in your business and brand, but to provide valuable services to obtain and build a special relationship with your customers. Double your investment rate with record results, aimed at moving to the next stage of your business. Innovation and direct targeting of your customers is the key to our success.</p>
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
                    <h4>Online marketing experts</h4>
                    <p id='up'>We have every skill to create and execute successful online marketing campaigns.</p>
                </div>
                <div style={{paddingInline: "50px"}}>
                    <img src={timeLight} />
                    <h4>Up to date with creative ideas</h4>
                    <p id='up'>Never-ending creativity of our professionals combined with the latest marketing tactics.</p>
                </div>
                <div>
                    <img src={scaleLight} />
                    <h4>Deliver amazing services</h4>
                    <p id='up'>Online marketing services tailored to your business & delivered on time</p>
                </div>
            </div>
        </>
    )
}
