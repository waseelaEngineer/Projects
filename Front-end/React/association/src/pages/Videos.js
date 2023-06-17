import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function Videos() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.videos}</h1>
      </div>
      <div className='content'>
        {texts.videos}
      </div>
    </>
  )
}