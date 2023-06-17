import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../layouts/frontend/Navbar'
import orderGif from '../../assets/frontend/images/order.gif'
import { UserContext } from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

export default function Home() {

  const { lang } = useContext(UserContext);
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    axios.get(`/api/view-resturants`).then(res => {
      if (res.status === 200) { setResturants(res.data.resturants) }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='home-header'>
        <div className='home-title'>
          {lang === 'ar'
            ? <h1 className='text-center'>مطعمك الإلكتروني على بعد خطوة واحدة</h1>
            : <h1 className='text-center'>Your Digital Resturant Is One Click Away</h1>
          }
          <a href={`https://wa.me/+249907812904?text=${lang === 'ar' ? 'مرحبا, اود التسجيل' : 'Hi, I would like to register'}`} target='_blank'>
            {lang === 'ar'
              ? <button className='get-started'>إبدا الان</button>
              : <button className='get-started'>Get start</button>
            }
          </a>
        </div>
        <img src={orderGif} className='order-gif' width='300px' alt='loading' />
      </div>


      <div className='clints row'>
        <h1 className='text-center py-5 border-bottom'>{lang === 'ar' ? 'عملائنا المميزون' : 'Our Beloved Clints'}</h1>
        {resturants.map(resturant => (
          <div key={resturant.id} className='col-sm-6 col-md-4 col-lg-3 pt-4 '>
            <Link className='decoration-none' target="_blank" to={`/${resturant.url}/menu`}>
              <div className='card shadow'>
                <div className='home-image-container'>
                  <img src={`https://server.waseela.online/${resturant.logo}`} alt='image' />
                </div>

                <div className='card-body'>
                  <h5 className='text-center'>{resturant.name}</h5>
                </div>

              </div>
            </Link>
          </div>
        ))}
      </div>

      <footer className="py-4 bg-dark mt-5">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; waseela 2022</div>
            <div>
              <a href={`https://wa.me/+249907812904?text=${lang === 'ar' ? 'مرحبا, اود التسجيل' : 'Hi, I would like to register'}`} target='_blank'>
                {lang === 'ar' ? 'سجل الان' : 'Register now'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}