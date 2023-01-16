import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import ConflictOfInterestPolicyPDF from '../files/ConflictOfInterestPolicy.pdf'
import WhistleblowingPolicyPDF from '../files/WhistleblowingPolicy.pdf'
import OrganizingRelationshipWithBeneficiariesPDF from '../files/OrganizingRelationshipWithBeneficiaries.pdf'
import FundraisingPolicyPDF from '../files/FundraisingPolicy.pdf'
import DataPrivacyPolicyPDF from '../files/DataPrivacyPolicy.pdf'
import DocumentRetentionPolicyPDF from '../files/DocumentRetentionPolicy.pdf'
import AntiTerroristFinancingPolicyPDF from '../files/AntiTerroristFinancingPolicy.pdf'
import VolunteerManagementMechanismPDF from '../files/VolunteerManagementMechanism.pdf'
import MechanismToVerifyTheBeneficiariesPDF from '../files/MechanismToVerifyTheBeneficiarysEligibility.pdf'

export default function SystemsRegulations() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.systemsRegulations}</h1>
      </div>
      <div className='content d-flex flex-column gap-4 content-padding'>
        {texts.systemsRegulationsContent}
        <a href={ConflictOfInterestPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.conflictPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={WhistleblowingPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.whistleblowingPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={OrganizingRelationshipWithBeneficiariesPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.organizingRelationshipWithBeneficiaries}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={FundraisingPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.fundraisingPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={DataPrivacyPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.dataPrivacyPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={DocumentRetentionPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.documentRetentionPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={AntiTerroristFinancingPolicyPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.antiTerroristFinancingPolicy}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={VolunteerManagementMechanismPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.volunteerManagementMechanism}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
        <a href={MechanismToVerifyTheBeneficiariesPDF} className='decoration-none' download>
          <div className='download'>
            <h1>{texts.mechanismToVerifyTheBeneficiaries}</h1>
            <h1 class="fa-sharp fa-solid fa-download"></h1>
          </div>
        </a>
      </div>
    </>
  )
}