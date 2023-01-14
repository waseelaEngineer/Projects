import React, { useContext, useState } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';

export default function CallUs() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  });

  const [sugErrors, setSugErrors] = useState([]);
  const [sugInput, setSugInput] = useState({
    name: '',
    email: '', 
    message: '',
  });

  async function submit() {

    setErrors([])
    input.name == '' && setErrors(errors => [...errors, 'الإسم'])
    input.email == '' && setErrors(errors => [...errors, 'البريد الإلكتروني'])
    input.phone == '' && setErrors(errors => [...errors, 'رقم الجوال'])
    input.title == '' && setErrors(errors => [...errors, 'العنوان'])
    input.message == '' && setErrors(errors => [...errors, 'الرسالة'])

    let pass =
    input.name != '' &&
    input.email != '' &&
    input.phone != '' &&
    input.title != '' &&
    input.message != '' 

    if (pass) {

      const formData = new FormData();
      formData.append('name', input.name);
      formData.append('email', input.email);
      formData.append('phone', input.phone);
      formData.append('title', input.title);
      formData.append('message', input.message);

      fetch("https://vahpa.org.sa/server/api/messages-add", {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 200) {
            alert('تم الإرسال بنجاح')
          }
          else {
            alert('حدث خطأ ما')
          }
        }
      )
    }

  }
 
  async function sugSubmit() {

    setSugErrors([])
    sugInput.name == '' && setSugErrors(sugErrors => [...sugErrors, 'الإسم'])
    sugInput.email == '' && setSugErrors(sugErrors => [...sugErrors, 'البريد الإلكتروني'])
    sugInput.message == '' && setSugErrors(sugErrors => [...sugErrors, 'الرسالة'])

    let pass =
    sugInput.name != '' &&
    sugInput.email != '' &&
    sugInput.message != '' 

    if (pass) {

      const formData = new FormData();
      formData.append('name', sugInput.name);
      formData.append('email', sugInput.email);
      formData.append('message', sugInput.message);

      fetch("https://vahpa.org.sa/server/api/suggestions-add", {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 200) {
            alert('تم الإرسال بنجاح')
          }
          else {
            alert('حدث خطأ ما')
          }
        }
      )
    }

  }

  return (
    <>
      <div className='page-title'>
        <h1>{texts.callUs}</h1>
      </div>
      <div className='content'>

        {/* call us  */}
        <div className='row justify-content-center text-end'>
          <div className='col-md-6'>

            <div className='card shadow-sm'>
              <div className='card-header d-flex justify-content-between'>
                <h4 className='text-black'>اتصل بنا</h4>
                <button onClick={()=>{navigate('/messages')}} className='btn btn-sm bg-dark text-white'>عرض الرسائل</button>
              </div>
              <div className='card-body'>
                <input name='name' className='form-control my-4' placeholder='الإسم الثلاثي' defaultValue={input.name} onChange={e => setInput({ ...input, name: e.target.value })}/>
                <input name='email' className='form-control my-4' placeholder='البريد الإلكتروني' defaultValue={input.email} onChange={e => setInput({ ...input, email: e.target.value })}/>
                <input name='number' className='form-control my-4' placeholder='رقم الجوال' defaultValue={input.phone} onChange={e => setInput({ ...input, phone: e.target.value })}/>
                <input name='adress' className='form-control my-4' placeholder='العنوان' defaultValue={input.title} onChange={e => setInput({ ...input, title: e.target.value })}/>
                <textarea className='form-control my-4' placeholder='الرسالة' defaultValue={input.message} onChange={e => setInput({ ...input, message: e.target.value })}></textarea>
                {errors.length != 0 && <label className='mt-5 d-block text-danger'>الرجاء تعبئة الحقول التالية: <br />{errors.map(e => ` ${e},`)}</label>}

                <button onClick={submit} className='btn btn bg-dark text-white float-start mt-5'>إرسال</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='row justify-content-center text-end'>
          <div className='col-md-6'>
            <button onClick={()=>{navigate('/messages')}} className='btn btn bg-dark text-white my-5'>عرض الرسائل</button>
          </div>
        </div> */}
   
   
   
        {/* suggestions  */}
        <div className='row justify-content-center text-end pt-5 mt-5'>
          <div className='col-md-6'>

            <div className='card shadow-sm'>
              <div className='card-header d-flex justify-content-between'>
                <h4 className='text-black'>الإقتراحات و الشكاوى</h4>
                <button onClick={()=>{navigate('/suggestions')}} className='btn btn-sm bg-dark text-white'>عرض الإقتراحات و الشكاوي</button>
              </div>
              <div className='card-body'>
                <input name='name' className='form-control my-4' placeholder='الإسم الثلاثي' defaultValue={sugInput.name} onChange={e => setSugInput({ ...sugInput, name: e.target.value })}/>
                <input name='email' className='form-control my-4' placeholder='البريد الإلكتروني' defaultValue={sugInput.email} onChange={e => setSugInput({ ...sugInput, email: e.target.value })}/>
                <textarea className='form-control my-4' placeholder='الرسالة' defaultValue={sugInput.message} onChange={e => setSugInput({ ...sugInput, message: e.target.value })}></textarea>
                {sugErrors.length != 0 && <label className='mt-5 d-block text-danger'>الرجاء تعبئة الحقول التالية: <br />{sugErrors.map(e => ` ${e},`)}</label>}

                <button onClick={sugSubmit} className='btn btn bg-dark text-white float-start mt-5'>إرسال</button>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className='row justify-content-center text-end'>
          <div className='col-md-6'>
            <button onClick={()=>{navigate('/messages')}} className='btn btn bg-dark text-white my-5'>عرض الإقتراحات و الشكاوي</button>
          </div>
        </div> */}
      </div>
    </>
  )
}