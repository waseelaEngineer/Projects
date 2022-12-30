import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import img from '../images/me.png'

export default function Register() {

    return (
        <div className='container py-5 text-center'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card shadow-sm'>
                        <div className='profile-section' >
                            <img className='profile-img' src={img} alt='profile'/>
                            <div>
                                <h2>@CodingWaseela</h2>
                                <div></div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='link-container'>
                                <i class="fa-brands fa-whatsapp"></i>
                                <h3>Whats app</h3>
                                <i class="fa-sharp fa-solid fa-download"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">
                <h2>waseela</h2>
                <h2>waseela</h2>
            </div>
        </div>
    )
}
