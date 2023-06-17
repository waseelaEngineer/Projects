import React, { useContext } from 'react'
import { Context } from '../Context';
import Texts from '../Texts';

export default function ContactUs() {

  const { lang, setLang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <div className='card-container up contact-container'>
      <div className='card shadow-sm'>
        <div className='card-header'>
          <h4>{texts.contact}</h4>
        </div>
        <div className='card-body'>
          <input name='name' className='form-control my-3' placeholder={texts.name} />
          <input name='email' className='form-control my-3' placeholder={texts.email} />
          <input name='phone' className='form-control my-3' placeholder={texts.phone} />
          <textarea className='form-control my-3' placeholder={texts.message} ></textarea>
          <input type='file' className='form-control my-3' placeholder={texts.phone} />
          <div className='contact-info'>
            <button>{texts.send}</button>
            <section>
              <p>{texts.address}</p><br/>
              <p>{texts.email2}<a href='mailto: sultan@althaaly.com' className='px-1'>{texts.sultanEmail}</a></p>
              <p>{texts.telephone}<a href='tel: +966114623362' target='_blank' className='px-1'>{texts.sultanTelephone}</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
