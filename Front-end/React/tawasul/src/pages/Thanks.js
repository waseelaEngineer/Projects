import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Thanks() {

  const navigate = useNavigate();
  
  return (
    <div className='container py-5 text-center' dir='rtl'>
      <div className="title">
        <h2>تواصل</h2>
        <h2>تواصل</h2>
      </div>
      <div className='row justify-content-center text-end'>
        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-body text-center'>
              <h1>شكراً لك</h1>
              <p>
                هذا الموقع هو عبارة عن تجربة علمية ضمن مشروع بحث علمي يهدف إلى قياس الوعي بسياسة الخصوصية، وليس موقع تواصل اجتماعي حقيقي، إذا كنت ترغب في معرفة معلومات أكثر عن البحث العلمي الرجاء الضغط على الرابط التالي:
                <a className='pointer' onClick={()=>{navigate('/about')}}> https://tawasulapp.net/about</a>
              </p>
              <p>
                إذا كنت لا ترغب في مشاركة البيانات التي قمت بإدخالها سابقاً، الرجاء إرسال بريد الكتروني على العنوان التالي حتى يتم إلغاء كافة معلوماتك نهائياً وعدم الاطلاع عليها: 
                <a href='mailto: tawasulexperiment@gmail.com' target='_blank'> tawasulexperiment@gmail.com</a> 
                </p>
              <p className=''>مع تحيات فريق البحث،،،</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}