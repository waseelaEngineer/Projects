import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function OurPrograms() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.ourPrograms}</h1>
      </div>
      <div className='content'>
        {/* {texts.ourPrograms} */}
      </div>
    </>
  )
}