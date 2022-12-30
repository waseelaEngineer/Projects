import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context';

export default function Register() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(Context);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setUser({ ...user, registerTime: user.registerTime + 1 })
        }, 1000);

        return () => clearInterval(interval);
    }, [user])

    function links(page){
        if (page == "policy") setUser({...user, policyClicks: user.policyClicks + 1})
        if (page == "terms") setUser({...user, termsClicks: user.termsClicks + 1})
        navigate(`/${page}`)
        window.scrollTo(0,0);
    }

    async function submit(){

        setErrors([])
        user.fname == '' && setErrors( errors => [...errors, 'الإسم الأول'])
        user.lname == '' && setErrors( errors => [...errors, 'الإسم الأخير'])
        if (user.email == '' || !(user.email.includes("@") || (/^\d+$/.test(user.email) && user.email.length === 10))){
            setErrors( errors => [...errors, 'الإيميل او رقم الجوال'])  
        }
        user.password == '' && setErrors( errors => [...errors, 'كلمة السر'])
        user.gender == '' && setErrors( errors => [...errors, 'الجنس'])
        user.education == '' && setErrors( errors => [...errors, 'المستوى التعليمي'])
        user.date == '' && setErrors( errors => [...errors, 'تاريخ الميلاد'])
        user.policy == false && setErrors( errors => [...errors, 'سياسة الخصوصية'])
        user.terms == false && setErrors( errors => [...errors, 'شروط الإستخدام'])

        let emailPass = user.email.includes("@") || (/^\d+$/.test(user.email) && user.email.length === 10)
        
        let pass = 
        user.fname != '' &&
        user.lname != '' &&
        emailPass &&
        user.password != '' &&
        user.gender != '' &&
        user.education != '' &&
        user.date != '' &&
        user.policy == true &&
        user.terms == true 

        if (pass){

            let fname = user.fname;
            let lname = user.lname;
            let email = user.email;
            let password = user.password;
            let gender = user.gender;
            let education = user.education;
            let date = user.date;
            let op1 = user.op1;
            let op2 = user.op2;
            let op3 = user.op3;
            let op4 = user.op4;
            let op5 = user.op5;
            let op6 = user.op6;
            let op7 = user.op7;
            let policyClicks = user.policyClicks;
            let termsClicks = user.termsClicks;
            let policyTime = user.policyTime;
            let termsTime = user.termsTime;
            let registerTime = user.registerTime;

            let items = {fname, lname, email, password, gender, education, date, op1, op2, op3, op4, op5, op6, op7, policyClicks, termsClicks, policyTime, termsTime, registerTime};
            let result = await fetch("https://server.tawasulapp.net/api/register",{
                method:'POST',
                body:JSON.stringify(items),
                headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
                }
            })
            result = await result.json()
            localStorage.clear();
            links('thanks')
        }
    }

    return (
        <div className='container py-5 text-center' dir='rtl'>
            <div className="titleee" dir='ltr'>
                <h2>تواصل</h2>
                <h2>تواصل</h2>
            </div>
            <div className='row justify-content-center text-end'>
                <div className='col-md-6'>
                    <div className='card shadow-sm'>
                        <div className='card-header'>
                            <h4>إنشاء حساب جديد</h4>
                        </div>
                        <div className='card-body'>
                            <input name='name' className='form-control my-4' placeholder='الاسم الأول' defaultValue={user.fname} onChange={e => setUser({...user, fname: e.target.value})}/>
                            <input name='name' className='form-control my-4' placeholder='الاسم الأخير' defaultValue={user.lname} onChange={e => setUser({...user, lname: e.target.value})}/>
                            <input name='email' className='form-control my-4' placeholder='الإيميل او رقم الجوال' defaultValue={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                            <input name='password' defaultValue={user.password} className='form-control my-4' placeholder='كلمة السر' onChange={e => setUser({...user, password: e.target.value})}/>
                            <select className='form-control my-4 text-secondary' defaultValue={user.gender} onChange={e => setUser({...user, gender: e.target.value})}>
                                <option hidden>إختر الجنس</option>
                                <option value='male'>ذكر</option>
                                <option value='female'>أنثى</option>
                            </select>
                            <select className='form-control my-4 text-secondary' defaultValue={user.education} onChange={e => setUser({...user, education: e.target.value})}>
                                <option hidden>إختر المستوى التعليمي</option>
                                <option value='notEducated'>غير متعلم</option>
                                <option value='elementrySchool'>المرحلة الإبتدائية</option>
                                <option value='middleSchool'>المرحلة المتوسطة</option>
                                <option value='highSchool'>المرحلة الثانوية</option>
                                <option value='university'>المرحلة الجامعية</option>
                                <option value='Postgraduate'>دراسات عليا</option>
                            </select>
                            <label>ادخل تاريخ الميلاد</label>
                            <input type='date' className='form-control text-secondary' defaultValue={user.date} onChange={e => setUser({...user, date: e.target.value})}/>

                            <label className='mt-5'>هل توافق على:</label>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>مشاركة المنشورات فقط مع الاشخاص المضافين كأصدقاء</label>
                                <input className="form-check-input" type="checkbox" checked={user.op1} onChange={()=>{setUser({...user, op1: !user.op1})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>اظهار البيانات الشخصية للجميع</label>
                                <input className="form-check-input" type="checkbox" checked={user.op2} onChange={()=>{setUser({...user, op2: !user.op2})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>استلام تذكير لتغير كلمة مروري كل ستة أشهر</label>
                                <input className="form-check-input" type="checkbox" checked={user.op3} onChange={()=>{setUser({...user, op3: !user.op3})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>استلام تذكير بتغيير ومراجعة إعدادات الخصوصية كل ستة أشهر  </label>
                                <input className="form-check-input" type="checkbox" checked={user.op4} onChange={()=>{setUser({...user, op4: !user.op4})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>السماح بالوصول الى حسابك من جوجل </label>
                                <input className="form-check-input" type="checkbox" checked={user.op5} onChange={()=>{setUser({...user, op5: !user.op5})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>السماح للأخرين بإضافتك دون اشعارك</label>
                                <input className="form-check-input" type="checkbox" checked={user.op6} onChange={()=>{setUser({...user, op6: !user.op6})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label>استلام بريد الكتروني تنبيهي في حالة تم الدخول على حسابك</label>
                                <input className="form-check-input" type="checkbox" checked={user.op7} onChange={()=>{setUser({...user, op7: !user.op7})}}/>
                            </div>

                            <label className='mt-5'>بالنقر فوق تسجيل، فإنك توافق على: </label>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label><a className='pointer' onClick={()=>{links('policy')}}>سياسة الخصوصية</a> الخاصة بموقع تواصل </label>
                                <input className="form-check-input" type="checkbox" checked={user.policy} onChange={()=>{setUser({...user, policy: !user.policy})}}/>
                            </div>
                            <div className="d-flex justify-content-end my-2 gap-3" dir='ltr'>
                                <label><a className='pointer' onClick={()=>{links('terms')}}>شروط الاستخدام</a> الخاصة بموقع تواصل </label>
                                <input className="form-check-input" type="checkbox" checked={user.terms} onChange={()=>{setUser({...user, terms: !user.terms})}}/>
                            </div>
                            {errors.length != 0 && <label className='mt-5 d-block text-danger'>الرجاء تعبئة الحقول التالية: <br/>{errors.map( e => ` ${e},`)}</label>}
                            
                            <button onClick={submit} className='btn btn-primary float-start mt-5'>التسجيل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
