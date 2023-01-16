import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';

export default function AwarenessCornerRequest() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];

  return (
    <>
      <div className='page-title'>
        <h1>{texts.awarenessCornerRequest}</h1>
      </div>
      <div className='content content-padding'>
        <h4>وصف الخدمة:</h4>
        <p>تتيح هذه الخدمة طلب تنفيذ شراكة مجتمعية للتثقيف والتوعية في مجال العنف والايذاء والتشرد.</p>
        <br/>
        <h4>الفئة المستهدفة:</h4>
        <p>جهات حكومية وغير حكومية، شركات ومؤسسات.</p>
        <br/>
        <h4>متطلبات الحصول على الخدمة:</h4>
        <p>
          <ul style={{paddingInline: '40px'}}>
            <li>ان يكون للجهة سجل تجاري</li>
            <li>خطاب من رئيس الجهة او صاحب الصلاحية بالموافقة على تفعيل الشراكة المجتمعية وتحديد نوعها.</li>
            <li>تحديد المدينة، المكان، والتاريخ مع ارفاق حجز للمكان او القاعة في حال كان خارج المؤسسة.</li>
            <li>تحديد الفئة المستهدفة.</li>
            <li>تحديد عدد الزوار او المستفيدين.</li>
            <li>يجب تقديم الطلب قبل شهر من تاريخ إقامة الفعالية.</li>
          </ul>
        </p>
        <br/>
        <h4>إجراءات الحصول على الخدمة:</h4>
        <p>
          <ul style={{paddingInline: '40px'}}>
            <li>تقديم الطلب عن طريق ارفاق الخطاب في البريد الالكتروني.</li>
            <li>التواصل مع مقدم الطلب لاكمال إجراءات الطلب.</li>
          </ul>
        </p>
        <br/>
        <h4>معلومات التواصل:</h4>
        <p>البريد الالكتروني: <a href='mailto: info@vahpa.org.sa' target='_blank'>info@vahpa.org.sa</a></p>

      </div>
    </>
  )
}