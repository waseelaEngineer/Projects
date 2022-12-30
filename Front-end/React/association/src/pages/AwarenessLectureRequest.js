import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function AwarenessLectureRequest() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.awarenessLectureRequest}</h1>
      </div>
      <div className='content' style={{paddingInline: '300px'}}>
        <h4>وصف الخدمة:</h4>
        <p>تتيح هذه الخدمة طلب تنفيذ محاضرة توعوية في مجال العنف والايذاء والتشرد. </p>
        <br/>
        <h4>الفئة المستهدفة:</h4>
        <p>جهات حكومية وغير حكومية، شركات.</p>
        <br/>
        <h4>متطلبات الحصول على الخدمة:</h4>
        <p>
          <ul style={{paddingInline: '40px'}}>
            <li>ان يكون للجهة سجل تجاري</li>
            <li>خطاب من رئيس الجهة او صاحب الصلاحية بالموافقة على إقامة المحاضرة.</li>
            <li>تحديد المدينة، المكان،والتاريخ لاقامة المحاضرة مع ارفاق حجز للمكان او القاعة في حال كان خارج المؤسسة.</li>
            <li>تحديد الفئة المستهدفة.</li>
            <li>تحديد عدد المشاركين.</li>
            <li>يجب تقديم الطلب قبل شهر من تاريخ إقامة المحاضرة.</li>
          </ul>
        </p>
        <br/>
        <h4>إجراءات الحصول على الخدمة:</h4>
        <p>
          <ul style={{paddingInline: '40px'}}>
            <li>تقديم الطلب عبر الموقع الالكتروني او عن طريق ارفاق الخطاب في البريد الالكتروني.</li>
            <li>التواصل مع مقدم الطلب لاكمال إجراءات الطلب.</li>
          </ul>
        </p>
        <br/>
        <h4>معلومات التواصل:</h4>
        <p>البريد الالكتروني: <a href='mailto: info@vahpa.org.sa'>info@vahpa.org.sa</a></p>
      </div>
    </>
  )
}