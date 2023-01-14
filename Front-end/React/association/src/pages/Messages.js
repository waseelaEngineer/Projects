import React, { useContext } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Messages() {

    const { lang } = useContext(Context);
    const texts = Texts[lang];
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [details, setDetails] = useState(0);
    const [password, setPassword] = useState('');

    async function send() {
        if (password == '3VwWKzATJ45M') {
            let res = await fetch("https://vahpa.org.sa/server/api/messages-view");
            res = await res.json();
            setData(res);
        }
        else {
            alert('كلمة المرور خاطئة')
        }
    }

    return (
        <>
            <div className='page-title'>
                <h1>{texts.messages}</h1>
            </div>
            <div className='content'>
                <div className='row justify-content-center text-end'>
                    <div className='col-md-6'>
                        {data.length == 0
                            ? (
                                <div className='card shadow-sm'>
                                    <div className='card-header d-flex justify-content-between'>
                                        <h4 className='text-black'>ادخل كلمة السر لعرض الرسائل</h4>
                                        <button onClick={() => navigate('/call-us')} className='btn btn-sm bg-dark text-white'>رجوع</button>
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
                                            <h4 className='text-black'>الرسائل</h4>
                                        </div>
                                        <div className='card-body'>

                                            {details != 0
                                                ? (
                                                    <div>
                                                        {data.filter(data => data.id == details).map(data => (
                                                            <div key={data.id}>
                                                                <p>الإسم:</p>
                                                                <p className='text-center'>{data.name}</p>
                                                                <p>البريد الإلكتروني:</p>
                                                                <p className='text-center'>{data.email}</p>
                                                                <p>الجوال:</p>
                                                                <p className='text-center'>{data.phone}</p>
                                                                <p>العنوان:</p>
                                                                <p className='text-center'>{data.title}</p>
                                                                <p>الرسالة:</p>
                                                                <p className='text-center'>{data.message}</p>

                                                            </div>
                                                        ))}
                                                        <button onClick={() => setDetails(0)} className='btn btn bg-dark text-white my-5'>رجوع</button>
                                                    </div>

                                                )
                                                : (

                                                    <div className='table-responsive'>
                                                        <table className='table table-bordered table-striped'>
                                                            <thead>
                                                                <tr>
                                                                    <th>رقم</th>
                                                                    <th>الإسم</th>
                                                                    <th>العنوان</th>
                                                                    <th>ضبط</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data.map(data => (
                                                                    <tr key={data.id}>
                                                                        <td>{data.id}</td>
                                                                        <td>{data.name}</td>
                                                                        <td>{data.title}</td>
                                                                        <td>
                                                                            <button className='btn btn-sm bg-dark text-white' onClick={() => setDetails(data.id)}>عرض</button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}