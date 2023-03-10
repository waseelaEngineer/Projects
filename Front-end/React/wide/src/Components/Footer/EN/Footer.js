import React from 'react'
import CSS from './Footer.module.css'

// images
import logoLight from '../../../Images/logoLight.png'
import spaceLight from '../../../Images/spaceLight.png'
import facebookLight from '../../../Images/facebookLight.png'
import twitterLight from '../../../Images/twitterLight.png'
import linkedinLight from '../../../Images/linkedinLight.png'
import instagramLight from '../../../Images/instagramLight.png'

export default function Footer() {
    return (
        <>
            <div className={CSS.footerContainer}>
                <div className={CSS.footer}>
                    <div className={CSS.footerContent}>
                        <img src={logoLight} />
                        <h3 style={{paddingBlock: "20px"}}>Marketing Agency in Riyadh, KSA</h3>
                        <p>We are a full-service digital marketing agency in Riyadh focused on results, strategy, technology, quality design, and content.</p>
                    </div>
                    <div className={CSS.footerDetails}>
                        <div className={CSS.footerLinks}>
                            <h3>Quick Links</h3>
                            <div>
                                <img src={spaceLight}/>
                                <a>About us</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a>Our Services</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a>Contact Us</a>
                            </div>
                            <div>
                                <img src={spaceLight}/>
                                <a>Free Quote</a>
                            </div>
                        </div>
                        <div className={CSS.footerContact}>
                            <h3>Connect with Us</h3>
                            <div>
                                <img src={facebookLight} />
                                <img src={twitterLight} />
                                <img src={linkedinLight} />
                                <img src={instagramLight} />
                            </div>
                            <p>Contact Us:</p>
                            <a href='tel: +966576344747'>+966 55 477 8000</a>
                        </div>
                    </div>
                </div>
                <h4 className={CSS.rights}>© 2023 WIDE. All Rights Reserved.</h4>
            </div>
        </>
    )
}
