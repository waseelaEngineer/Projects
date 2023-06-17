import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../Context';
import Texts from '../Texts';
//components
import Header from '../components/Header';
import Footer from '../components/Footer';
//pages
import Main from '../pages/Main';
import About from '../pages/About'; 
import GeneralAssociation from '../pages/GeneralAssociation'
import ChairmanWord from '../pages/ChairmanWord'
import OrganizationalStructure from '../pages/OrganizationalStructure'
import BoardDirectors from '../pages/BoardDirectors'
import ExecutiveCommittee from '../pages/ExecutiveCommittee'
import InvestmentCommitte from '../pages/InvestmentCommitte'
import PlaningDevelopmentCommitte from '../pages/PlaningDevelopmentCommitte'
import PolicyGovernanceReviewCommittee from '../pages/PolicyGovernanceReviewCommittee'
import InternalAuditReviewCommittee from '../pages/InternalAuditReviewCommittee'
import Voluntare from '../pages/Voluntare'
import AwarenessCornerRequest from '../pages/AwarenessCornerRequest'
import AwarenessLectureRequest from '../pages/AwarenessLectureRequest'
import AboutMembership from '../pages/AboutMembership'
import AssociationRegister from '../pages/AssociationRegister'
import AssociationCard from '../pages/AssociationCard'
import OurPrograms from '../pages/OurPrograms'
import News from '../pages/News'
import Images from '../pages/Images'
import Videos from '../pages/Videos'
import Reports from '../pages/Reports'
import SystemsRegulations from '../pages/SystemsRegulations'
import CallUs from '../pages/CallUs'
import Donate from '../pages/Donate'
import Subscripers from '../pages/Subscripers';
import Messages from '../pages/Messages';
import Suggestions from '../pages/Suggestions';

export default function Guest(props) {

    let {page} = props;
    const { lang } = useContext(Context);
    const texts = Texts[lang];
    const container = useRef();

    useEffect(() => {
        lang == 'ar'
        ? container.current.style.direction = 'rtl'
        : container.current.style.direction = 'ltr'
    }, [lang])

    return (
        <div ref={container} className='Container'>
            <Header />
            {page == '' && <Main />}
            {page == 'about' && <About />}
            {page == 'chairmanword' && <ChairmanWord />}
            {page == 'general-association' && <GeneralAssociation />}
            {page == 'organizational-structure' && <OrganizationalStructure />}
            {page == 'board-directors' && <BoardDirectors />}
            {page == 'executive-committee' && <ExecutiveCommittee />}
            {page == 'investment-committe' && <InvestmentCommitte />}
            {page == 'planing-development-committe' && <PlaningDevelopmentCommitte />}
            {page == 'policy-governance-review-committee' && <PolicyGovernanceReviewCommittee />}
            {page == 'internal-audit-review-committee' && <InternalAuditReviewCommittee />}
            {page == 'voluntare' && <Voluntare />}
            {page == 'awareness-corner-request' && <AwarenessCornerRequest />}
            {page == 'awareness-lecture-request' && <AwarenessLectureRequest />}
            {page == 'about-membership' && <AboutMembership />}
            {page == 'association-register' && <AssociationRegister />}
            {page == 'association-card' && <AssociationCard />}
            {page == 'our-programs' && <OurPrograms />}
            {page == 'news' && <News />}
            {page == 'images' && <Images />}
            {page == 'videos' && <Videos />}
            {page == 'reports' && <Reports />}
            {page == 'systems-regulations' && <SystemsRegulations />}
            {page == 'call-us' && <CallUs />}
            {page == 'donate' && <Donate />}
            {page == 'subscribers' && <Subscripers />}
            {page == 'messages' && <Messages />}
            {page == 'suggestions' && <Suggestions />}
            <Footer />
        </div>
    )
}