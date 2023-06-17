import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import image from '../images/boarddirectors.PNG'

export default function BoardDirectors() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.boardDirectors}</h1>
      </div>
      <div className='content'>
        {/* {texts.boardDirectorsContent} */}
        <img src={image} alt='image' style={{width: '100%'}}/>
      </div>
    </>
  )
}