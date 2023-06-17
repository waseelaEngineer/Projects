import React, { useContext, useState } from 'react'
import logo from '../images/logo.png';
import title from '../images/title.png';
import Texts from '../Texts';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';

export default function Header(changeLang) {

  const { lang, setLang } = useContext(Context);
  const texts = Texts[lang];
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function changeLang() {
    lang == 'ar'
      ? setLang('en')
      : setLang('ar')
  }

  function links(page){
    window.scrollTo(0, 0);
    navigate(page)
  }

  return (
    <div className='Header'>
      <div className='banner'>
        <img src={logo} className='logo-img' alt='logo' />
        <img src={title} className='title-img' alt='title' />
      </div>

      <i className='fa-solid fa-bars hamburger' onClick={()=>setShowMenu(!showMenu)}></i>

      <div className={`Navbar ${showMenu ? 'showMenu' : ''}`}>
        <div>
          <button onClick={()=>{links('/')}}>{texts.mainPage}</button>
        </div>
        <div>
          <button>{texts.about}<i className="fa-sharp fa-solid fa-caret-down"></i></button>
          <ul>
            <li onClick={()=>{links('/about')}}>{texts.aboutAssociation}</li>
            <li onClick={()=>{links('/chairmanword')}}>{texts.chairmanWord}</li>
            <li onClick={()=>{links('/general-association')}}>{texts.generalAssociation}</li>
            <li onClick={()=>{links('/organizational-structure')}}>{texts.organizationalStructure}</li>
            <li onClick={()=>{links('/board-directors')}}>{texts.boardDirectors}</li>
            <li onClick={()=>{links('/executive-committee')}}>{texts.executiveCommittee}</li>
            <li onClick={()=>{links('/investment-committe')}}>{texts.investmentCommitte}</li>
            <li onClick={()=>{links('/planing-development-committe')}}>{texts.planingDevelopmentCommitte}</li>

            <li onClick={()=>{links('/policy-governance-review-committee')}}>{texts.policyGovernanceReviewCommittee}</li>
            <li onClick={()=>{links('/internal-audit-review-committee')}}>{texts.internalAuditReviewCommittee}</li>
          </ul>
        </div>
        <div>
          <button>{texts.services} <i className="fa-sharp fa-solid fa-caret-down"></i></button>
          <ul>
            <a className='decoration-none text-white' href='https://nvg.gov.sa' target='_blank'>
              <li>{texts.voluntare}</li>
            </a>
            <li onClick={()=>{links('/awareness-corner-request')}}>{texts.awarenessCornerRequest}</li>
            {/* <li onClick={()=>{links('/awareness-lecture-request')}}>{texts.awarenessLectureRequest}</li> */}
          </ul>
        </div>
        <div>
          <button>{texts.membership} <i className="fa-sharp fa-solid fa-caret-down"></i></button>
          <ul>
            <li onClick={()=>{links('/about-membership')}}>{texts.aboutMembership}</li>
            <li onClick={()=>{links('/association-register')}}>{texts.associationRegister}</li>
            <li onClick={()=>{links('/association-card')}}>{texts.associationCard}</li>
          </ul>
        </div>
        <div>
          <button onClick={()=>{links('/our-programs')}}>{texts.ourPrograms}</button>
        </div>
        <div>
          <button onClick={()=>{links('/news')}}>{texts.news}</button>
        </div>
        <div>
          <button>{texts.library} <i className="fa-sharp fa-solid fa-caret-down"></i></button>
          <ul>
            <li onClick={()=>{links('/images')}}>{texts.images}</li>
            <li onClick={()=>{links('/videos')}}>{texts.videos}</li>
            <li onClick={()=>{links('/reports')}}>{texts.reports}</li>
            <li onClick={()=>{links('/systems-regulations')}}>{texts.systemsRegulations}</li>
          </ul>
        </div>
        <div>
          <button onClick={()=>{links('/call-us')}}>{texts.callUs}</button>
        </div>
        <div className='donate-div'>
          <button onClick={()=>{links('/donate')}}>{texts.donate}</button>
        </div>
        <div>
          <button onClick={changeLang}>{texts.lang}</button>
        </div>
      </div>
    </div>
  )
}