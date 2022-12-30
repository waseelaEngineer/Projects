import React from 'react'
import project1 from '../images/project1.PNG'
import project2 from '../images/project2.PNG'
import project3 from '../images/project3.PNG'
import qr from '../images/qr.png'
import resturant from '../images/resturant.png'
import me from '../images/me.PNG'
import elm from '../images/elm.png'

export default function Projects() {

  return (
    <div className='slide section'>
        {/* resturants business project  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>Resturant business project</h1>
                <h3>
                    Made a control panel that makes resturants menu pages includes
                    resturant details, categorys, products, QR code for each menu,
                    technologies used: laravel for backend, react in frontend,
                    mysql as database.
                </h3>
                <a target='_blank' href="https://waseela.online">https://waseela.online</a>
            </div>
            <img src={resturant} alt="img"/>
        </div>
        {/* elm  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>Alemni</h1>
                <h3>
                    Made a complex interfaces using CSS only, responsive, has Arabic and 
                    English languages and change layouts according to language
                </h3>
                <a target='_blank' href="https://waseela-app.github.io/appfixed/#/home">https://waseela-app.github.io/appfixed/#/home</a>
            </div>
            <img src={elm} alt="img"/>
        </div>
        {/* qr code generator  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>QR code generator</h1>
                <h3>
                    Made a simple page for generating QR code by typing
                    the URL only, then you could download the QR code, built using react.
                </h3>
                <a target='_blank' href="https://qrcode.waseela.online">https://qrcode.waseela.online</a>
            </div>
            <img src={qr} alt="img"/>
        </div>
        {/* english level test  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>English Level Test</h1>
                <h3>
                    Built Node.js application, Server with API and 
                    Database store the users data and show results live in scores page.
                </h3>
                <a target='_blank' href="https://waseela-english-level-test.glitch.me">https://waseela-english-level-test.glitch.me</a>
            </div>
            <img src={project1} alt="img"/>
        </div>
        {/* 3D space warp  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>3D space warp</h1>
                <h3>
                    Built Three.js application and created objects in space that rotates according 
                    to x,y,z coordinates when click event on screen occurs.
                </h3>
                <a target='_blank' href="https://mohamedd210.github.io/waseela3Deffect">https://mohamedd210.github.io/waseela3Deffect</a>
            </div>
            <img src={project2} alt="img"/>
        </div>
        {/* to do list  */}
        <div className='project-container reveal'>
            <div className='d-flex flex-column'>
                <h1 className='colorful'>To Do List</h1>
                <h3>Built Vanilla js application for storing daily tasks of users in their personal device browser LocalStorage.</h3>
                <a target='_blank' href="https://waseelaproject.github.io/to-do-list">https://waseelaproject.github.io/to-do-list</a>
            </div>
            <img src={project3} alt="img"/>
        </div>

        <div className='row justify-content-center my-5 reveal'>
            <img className='col-8' src={me} alt="img"/>
        </div>
    </div>
  )
}