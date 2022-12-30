import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function About() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.aboutAssociation}</h1>
      </div>
      <div className='content'>
        <h4>نبذة عن الجمعية:</h4>        
        <p>تأسّست جمعية الوقاية من العنف والايذاء والتشرد بمدينة الرياض بموجب الترخيص رقم 1988 وتاريخ 02/05/1442هـ، وهي جمعية خيرية ذات شخصية اعتبارية تشمل خدماتها كافة مناطق المملكة العربية السعودية، وتعمل تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية والمركز الوطني لتنمية القطاع غير الربحي.</p>
        <br/>
        <div className='content-cards'>
          <div className=''>
            <i class="fa-sharp fa-solid fa-envelope-open-text"></i>
            <h4>الرسالة</h4>
            <p>أن تكون الجمعية قدوة وواجهة مشرفة في القطاع الخيري وممارسة النشاط الخيري والإنساني في أوسع أطره.</p>
            <br/>
          </div>
          <div className=''>
            <i class="fa-sharp fa-solid fa-eye"></i>
            <h4>الرؤية</h4>
            <p>أن نكون رائدين في العمل الخيري المستدام على المستوى المحلي والعالمي.</p>
            <br/>
          </div>
          <div className=''>
            <i class="fa-sharp fa-solid fa-bullseye"></i>
            <h4>الأهداف</h4>
            <p>
              <ul style={{paddingInline: '30px'}}>
                <li>تعزيز الوقاية من العنف والايذاء والتشرد على المستوى المحلي والاقليمي والدولي.</li>
                <li>مناقشة ومعالجة قضايا العنف والأسباب المؤدية لانتشاره. </li>
                <li>التوعية من مخاطر التشرد.</li>
                <li>تأمين مأوى لحالات التشرد.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}