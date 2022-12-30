import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function PlaningDevelopmentCommitte() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.planingDevelopmentCommitte}</h1>
      </div>
      <div className='content'>
        {texts.planingDevelopmentCommitteContent}
      </div>
    </>
  )
}