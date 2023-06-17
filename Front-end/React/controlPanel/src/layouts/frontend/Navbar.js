import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import swal from 'sweetalert'

export default function Navbar() {

    const {lang, setLang} = useContext(UserContext);
    const collapse = useRef();

    function handleLang(){
        lang === 'ar'
        ? setLang('en')
        : setLang('ar')

        collapse.current.classList.remove('show');
    }
    
    function logoutSubmit(){
        
        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200){
                localStorage.removeItem( 'auth_token');
                localStorage.removeItem( 'auth_name');
                window.location.reload(false);
            }
        })
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">{lang === 'ar' ? 'تسجيل دخول' : 'Login'}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">{lang === 'ar' ? 'حساب جديد' : 'Register'}</Link>
                </li>
            </ul>
        )
    }
    else(
        AuthButtons = (
            <>
                <li className="nav-item">
                    <button type='button' onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">{lang === 'ar' ? 'تسجيل خروج' : 'Logout'}</button>
                </li>
            </>
        )
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
            <div className="container">

                <Link className="navbar-brand" to="/">Waseela</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div ref={collapse} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button type='button' onClick={handleLang} className="nav-link text-gray bg-dark border-0 px-3">{lang === 'ar' ? 'English' : 'عربي'}</button>
                        </li> 
                        {AuthButtons}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
