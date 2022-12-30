import React from 'react'

export default function About() {

  return (
    <div className='container py-5 text-center' dir='rtl'>
      <div className="title">
        <h2>تواصل</h2>
        <h2>تواصل</h2>
      </div>
      <div className='row justify-content-center text-end'>
        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-header'>
              <h4>معلومات عن البحث العلمي</h4>
            </div>
            <div className='card-body'>
              <p>
                يقوم الفريق البحثي بعمل دراسة على مستخدمي وسائل التواصل الاجتماعي في منطقة الشرق الأوسط وشمال أفريقيا بهدف قياس وعي ومعرفة مستخدمي وسائل التواصل الاجتماعي بسياسية الخصوصية على الانترنت. ولقياس ذلك قام الفريق البحثي بعمل مجموعة من الإجراءات والطرق البحثية التي تقيس نظرياً وعملياً القدرة المعرفية لمستخدمي وسائل التواصل بخصوصية البيانات على الانترنت.<br/>
                علماً بأن كافة البيانات سيتم استخدامها لأغراض البحث العلمي فقط ولن يتم الكشف عن هوية المستخدمين أو عن أي بيانات تؤدي الى التعرف عليهم ولن يتم مشاركتها مع أي جهة اخرى<br/>
                لمزيد من المعلومات حول البحث نرجو التواصل عبر البريد الإلكتروني التالي: 
                <a href='mailto: tawasulexperiment@gmail.com' target='_blank'> tawasulexperiment@gmail.com</a>
              </p>
              <p className='text-center d-block'>مع تحيات فريق البحث،،،</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
