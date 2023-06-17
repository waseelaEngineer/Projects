import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import image from '../images/organizationalstructure.PNG'

export default function OrganizationalStructure() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.organizationalStructure}</h1>
      </div>
      <div className='content'>
        <img src={image} alt='image' style={{width: '100%'}}/>
      </div>
    </>
  )
}