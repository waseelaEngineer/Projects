import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function CallUs() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.callUs}</h1>
      </div>
      <div className='content'>
      <div className='row justify-content-center text-end'>
              <div className='col-md-6'>

                <div className='card shadow-sm'>
                  <div className='card-header'>
                    <h4 className='text-black'>اتصل بنا</h4>
                  </div>
                  <div className='card-body'>
                    <input name='name' className='form-control my-4' placeholder='الإسم الثلاثي' />
                    <input name='email' className='form-control my-4' placeholder='البريد الإلكتروني' />
                    <input name='number' className='form-control my-4' placeholder='رقم الجوال' />
                    <input name='adress' className='form-control my-4' placeholder='العنوان' />
                    <textarea className='form-control my-4' placeholder='الرسالة'></textarea>

                    <button className='btn btn bg-dark text-white float-start mt-5'>إرسال</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}