import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function GeneralAssociation() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.generalAssociation}</h1>
      </div>
      <div className='content content-padding'>
        <h4>أعضاء الجمعية العمومية:</h4>
        <p>
          {/* <ul style={{padding: '40px'}}>
            <li>الأستاذة ، امال بنت فيصل عطار ، رئيس مجلس إدارة</li>
            <li>الأستاذة ، دلال جميل علي فلمبان ، عضو عامل</li>
            <li>الأستاذ  ، عبدالله شايع سعد بن شفلوت، عضو عامل</li>
            <li>الأستاذ.، عوض احمد عوضه الزهراني، عضو عامل</li>
            <li>الأستاذ ، عبد الكافي بن نواب الدين بن غريب الدين آل نواب، </li>
            <li>الأستاذ ، فلاج عوده فلاح الشمري، </li>
            <li>الدكتور، علي بن زايد بن محمد الشهري، </li>
            <li>صاحب السمو، الأمير محمد بن سعد بن خالد آل سعود، </li>
            <li>الأستاذ، نجم مسعود نجم القثامي،</li>
            <li>الأستاذ، عبدالله بن ناجع بن محمد العجمي، عضو مجلس ادارة</li>
            <li>الأستاذ، فاضل مبارك محمد الدوسري، عضو مجلس إدارة نائب رئيس مجلس ادارة</li>
            <li>الأستاذ، عبدالعزيز يحيى حسن قحل، عضو مجلس إدارة مشرف مالي</li>
            <li>الأستاذ، مرعي عبدالهادي عبدالرحمن الشهري، عضو مجلس ادارة</li>
          </ul> */}
        </p>
        <br/>
        <h4>قرارات الجمعية العمومية:</h4>
      </div>
    </>
  )
}