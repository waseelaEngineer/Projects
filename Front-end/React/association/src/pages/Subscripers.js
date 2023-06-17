import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Subscripers() {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [individualData, setIndividualData] = useState([]);
    const [facilityData, setFacilityData] = useState([]);
    const [individualDetails, setIndividualDetails] = useState(0);
    const [facilityDetails, setFacilityDetails] = useState(0);

    async function send() {
        if (password == '3VwWKzATJ45M'){
            let individualResult = await fetch("https://vahpa.org.sa/server/api/individual-view");
            individualResult = await individualResult.json();
            setIndividualData(individualResult)

            let facilityResult = await fetch("https://vahpa.org.sa/server/api/facility-view");
            facilityResult = await facilityResult.json();
            setFacilityData(facilityResult)
        }
        else{
            alert('كلمة المرور خاطئة')
        }
    }

    return (
        <div>
            <div className='page-title'>
                <h1>عرض جميع المشتركين</h1>
            </div>

            <div className='content'>

                <div className='row justify-content-center text-end'>
                    <div className='col-md-6'>
                        {facilityData.length == 0 && individualData.length == 0 ? (
                            <div className='card shadow-sm'>
                                <div className='card-header'>
                                    <h4 className='text-black'>ادخل كلمة السر لعرض المشتركين</h4>
                                </div>
                                <div className='card-body'>
                                    <input className='form-control my-4' placeholder='كلمة المرور' defaultValue={password} onChange={e => setPassword(e.target.value)} />
                                    <button className='btn btn bg-dark text-white float-start' onClick={send}>إرسال</button>
                                </div>
                            </div>
                        )
                            : (
                                <>
                                    <div className='card shadow-sm mb-5'>
                                        <div className='card-header'>
                                            <h4 className='text-black'>عضويات الأفراد</h4>
                                        </div>
                                        <div className='card-body'>

                                            {individualDetails != 0
                                                ? (
                                                    <div>
                                                        {individualData.filter(data => data.id == individualDetails).map(data => (
                                                            <div key={data.id}>
                                                                <p>رقم:</p>
                                                                <p className='text-center'>{data.id}</p>
                                                                <p>الاسم:</p>
                                                                <p className='text-center'>{data.name}</p>
                                                                <p>العمر:</p>
                                                                <p className='text-center'>{data.age}</p>
                                                                <p>الجنسية:</p>
                                                                <p className='text-center'>{data.nationality}</p>
                                                                <p>رقم الهوية:</p>
                                                                <p className='text-center'>{data.identityNo}</p>
                                                                <p>مصدر الهوية:</p>
                                                                <p className='text-center'>{data.identitySource}</p>
                                                                <p>تاريخ اصدار الهوية:</p>
                                                                <p className='text-center'>{data.identityDate}</p>
                                                                <p>مكان الميلاد:</p>
                                                                <p className='text-center'>{data.birthPlace}</p>
                                                                <p>تاريخ الميلاد:</p>
                                                                <p className='text-center'>{data.birthDate}</p>
                                                                <p>مكان الاقامة:</p>
                                                                <p className='text-center'>{data.residence}</p>
                                                                <p>المهنة:</p>
                                                                <p className='text-center'>{data.occupation}</p>
                                                                <p>رقم الجوال:</p>
                                                                <p className='text-center'>{data.phone}</p>
                                                                <p>رقم الهاتف:</p>
                                                                <p className='text-center'>{data.tel}</p>
                                                                <p>البريد الإلكتروني:</p>
                                                                <p className='text-center'>{data.email}</p>
                                                                <p>صندوق البريد:</p>
                                                                <p className='text-center'>{data.Postalbox}</p>
                                                                <p>الرمز البريدي:</p>
                                                                <p className='text-center'>{data.Postalcode}</p>
                                                                <p>المؤهل العلمي:</p>
                                                                <p className='text-center'>{data.qualification}</p>
                                                                <p>التخصص:</p>
                                                                <p className='text-center'>{data.specialization}</p>
                                                                <p>نوع العضوية:</p>
                                                                <p className='text-center'>{data.role}</p>
                                                                <p>وذلك لكوني:</p>
                                                                <p className='text-center'>{data.reason}</p>

                                                                <a href={`https://vahpa.org.sa/server/${data.endorsement}`} className='decoration-none' download target='_blank'>
                                                                    <div className='download-approval mt-5'>
                                                                        <li className="fa-sharp fa-solid fa-download"></li>
                                                                        <label>تحميل إقرار الجمعية</label>
                                                                    </div>
                                                                </a>
                                                                <a href={`https://vahpa.org.sa/server/${data.identityImg}`} className='decoration-none' download target='_blank'>
                                                                    <div className='download-approval'>
                                                                        <li className="fa-sharp fa-solid fa-download"></li>
                                                                        <label>تحميل صورة الهوية</label>
                                                                    </div>
                                                                </a>
                                                                <a href={`https://vahpa.org.sa/server/${data.nationalAddressImg}`} className='decoration-none' download target='_blank'>
                                                                    <div className='download-approval'>
                                                                        <li className="fa-sharp fa-solid fa-download"></li>
                                                                        <label>تحميل صورة العنوان الوطني</label>
                                                                    </div>
                                                                </a>
                                                                <a href={`https://vahpa.org.sa/server/${data.transferImg}`} className='decoration-none' download target='_blank'>
                                                                    <div className='download-approval'>
                                                                        <li className="fa-sharp fa-solid fa-download"></li>
                                                                        <label>تحميل صورة حوالة سداد الرسوم</label>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        ))}
                                                        <button onClick={() => setIndividualDetails(0)} className='btn btn bg-dark text-white my-5'>رجوع</button>
                                                    </div>

                                                )
                                                : (

                                                    <div className='table-responsive'>
                                                        <table className='table table-bordered table-striped'>
                                                            <thead>
                                                                <tr>
                                                                    <th>رقم</th>
                                                                    <th>الإسم</th>
                                                                    <th>ضبط</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {individualData.map(data => (
                                                                    <tr key={data.id}>
                                                                        <td>{data.id}</td>
                                                                        <td>{data.name}</td>
                                                                        <td>
                                                                            <button className='btn btn-sm bg-dark text-white' onClick={() => setIndividualDetails(data.id)}>عرض</button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                        </div>
                                    </div>
                                    <div className='card shadow-sm'>
                                        <div className='card-header'>
                                            <h4 className='text-black'>عضويات الجهات</h4>
                                        </div>
                                        <div className='card-body'>
                                            
                                            {facilityDetails != 0 
                                            ? (

                                                <div>
                                                    {facilityData.filter(data => data.id == facilityDetails).map(data => (
                                                        <div key={data.id}>
                                                            <p>رقم:</p>
                                                            <p className='text-center'>{data.id}</p>

                                                            <p>إسم الجهة:</p>
                                                            <p className='text-center'>{data.facilityName}</p>                                                                                                                        
                                                            <p>الجنسية / المقر:</p>
                                                            <p className='text-center'>{data.facilityPlace}</p>                                                                                                                        
                                                            <p>رقم التسجيل / الترخيص:</p>
                                                            <p className='text-center'>{data.facilityRegisterNo}</p>                                                                                                                        
                                                            <p>تاريخ إصدار الجهة:</p>
                                                            <p className='text-center'>{data.facilityIssueDate}</p>                                                                                                                        
                                                            <p>رقم جوال الجهة:</p>
                                                            <p className='text-center'>{data.facilityPhone}</p>                                                                                                                        
                                                            <p>رقم هاتف الجهة:</p>
                                                            <p className='text-center'>{data.facilityTel}</p>                                                                                                                        
                                                            <p>البريد الإلكتروني للجهة:</p>
                                                            <p className='text-center'>{data.facilityEmail}</p>                                                                                                                        
                                                            <p>صندوق بريد الجهة:</p>
                                                            <p className='text-center'>{data.facilityPostalBox}</p>                                                                                                                        
                                                            <p>الرمز البريدي للجهة:</p>
                                                            <p className='text-center'>{data.facilityPostalCode}</p>                                                                                                                        
                                                            <p>نوع عضوية الجهة:</p>
                                                            <p className='text-center'>{data.facilityRole}</p>                                                                                                                        
                                                            <p>الهدف من عضوية الجمعية:</p>
                                                            <p className='text-center'>{data.facilityGoal}</p>      
                                                            <p>الاسم:</p>
                                                            <p className='text-center'>{data.name}</p>
                                                            <p>العمر:</p>
                                                            <p className='text-center'>{data.age}</p>
                                                            <p>الجنسية:</p>
                                                            <p className='text-center'>{data.nationality}</p>
                                                            <p>رقم الهوية:</p>
                                                            <p className='text-center'>{data.identityNo}</p>
                                                            <p>مصدر الهوية:</p>
                                                            <p className='text-center'>{data.identitySource}</p>
                                                            <p>تاريخ اصدار الهوية:</p>
                                                            <p className='text-center'>{data.identityDate}</p>
                                                            <p>مكان الميلاد:</p>
                                                            <p className='text-center'>{data.birthPlace}</p>
                                                            <p>تاريخ الميلاد:</p>
                                                            <p className='text-center'>{data.birthDate}</p>
                                                            <p>مكان الاقامة:</p>
                                                            <p className='text-center'>{data.residence}</p>
                                                            <p>المهنة:</p>
                                                            <p className='text-center'>{data.occupation}</p>
                                                            <p>رقم الجوال:</p>
                                                            <p className='text-center'>{data.phone}</p>
                                                            <p>رقم الهاتف:</p>
                                                            <p className='text-center'>{data.tel}</p>
                                                            <p>البريد الإلكتروني:</p>
                                                            <p className='text-center'>{data.email}</p>
                                                            <p>صندوق البريد:</p>
                                                            <p className='text-center'>{data.Postalbox}</p>
                                                            <p>الرمز البريدي:</p>
                                                            <p className='text-center'>{data.Postalcode}</p>
                                                            <p>المؤهل العلمي:</p>
                                                            <p className='text-center'>{data.qualification}</p>
                                                            <p>التخصص:</p>
                                                            <p className='text-center'>{data.specialization}</p>
                                                            <p>نوع العضوية:</p>
                                                            <p className='text-center'>{data.role}</p>
                                                            <p>وذلك لكوني:</p>
                                                            <p className='text-center'>{data.reason}</p>

                                                            <a href={`https://vahpa.org.sa/server/${data.endorsement}`} className='decoration-none' download target='_blank'>
                                                                <div className='download-approval mt-5'>
                                                                    <li className="fa-sharp fa-solid fa-download"></li>
                                                                    <label>تحميل إقرار الجمعية</label>
                                                                </div>
                                                            </a>
                                                            <a href={`https://vahpa.org.sa/server/${data.identityImg}`} className='decoration-none' download target='_blank'>
                                                                <div className='download-approval'>
                                                                    <li className="fa-sharp fa-solid fa-download"></li>
                                                                    <label>تحميل صورة الهوية</label>
                                                                </div>
                                                            </a>
                                                            <a href={`https://vahpa.org.sa/server/${data.registerImg}`} className='decoration-none' download target='_blank'>
                                                                <div className='download-approval'>
                                                                    <li className="fa-sharp fa-solid fa-download"></li>
                                                                    <label>تحميل صورة السجل</label>
                                                                </div>
                                                            </a>
                                                            <a href={`https://vahpa.org.sa/server/${data.nationalAddressImg}`} className='decoration-none' download target='_blank'>
                                                                <div className='download-approval'>
                                                                    <li className="fa-sharp fa-solid fa-download"></li>
                                                                    <label>تحميل صورة العنوان الوطني</label>
                                                                </div>
                                                            </a>
                                                            <a href={`https://vahpa.org.sa/server/${data.transferImg}`} className='decoration-none' download target='_blank'>
                                                                <div className='download-approval'>
                                                                    <li className="fa-sharp fa-solid fa-download"></li>
                                                                    <label>تحميل صورة حوالة سداد الرسوم</label>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                    <button onClick={() => setFacilityDetails(0)} className='btn btn bg-dark text-white my-5'>رجوع</button>
                                                </div>

                                            )
                                            : (

                                                <div className='table-responsive'>
                                                    <table className='table table-bordered table-striped'>
                                                        <thead>
                                                            <tr>
                                                                <th>رقم</th>
                                                                <th>الإسم</th>
                                                                <th>ضبط</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {facilityData.map(data => (
                                                                <tr key={data.id}>
                                                                    <td>{data.id}</td>
                                                                    <td>{data.name}</td>
                                                                    <td>
                                                                        <button className='btn btn-sm bg-dark text-white' onClick={() => setFacilityDetails(data.id)}>عرض</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}


                                        </div>
                                    </div>
                                </>
                            )}
                    </div>
                </div>

                <div className='row justify-content-center text-end'>
                    <div className='col-md-6'>
                        <button onClick={() => navigate('/association-register')} className='btn btn bg-dark text-white my-5'>رجوع</button>
                    </div>
                </div>
            </div>
        </div>
    )
}