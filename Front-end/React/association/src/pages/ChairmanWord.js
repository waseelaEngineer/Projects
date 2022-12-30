import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function ChairmanWord() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.chairmanWord}</h1>
      </div>
      <div className='content'>
        {texts.chairmanWordContent}
      </div>
    </>
  )
}