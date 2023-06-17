import React, { useContext } from 'react'
import { Context } from '../Context';
import Texts from '../Texts';

export default function Cv() {

  const { lang, setLang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <div className='up text-white text-center w-100'>{texts.cv}</div>
  )
}