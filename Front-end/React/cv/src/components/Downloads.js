import React from 'react'
import cvPDF from '../files/CV.pdf'
import cvPNG from '../files/CV.jpg'
import scePDF from '../files/SCE.pdf'
import scePNG from '../files/SCE.PNG'
import certificates from '../files/Certificate.pdf'
import courses from '../files/Courses.pdf'

export default function Downloads() {
    return (
        <div className='slide section'>
            <a href={cvPDF} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>CV.pdf</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>

            <a href={cvPNG} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>CV.png</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>
            
            <a href={scePDF} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>SCE.pdf</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>
            
            <a href={scePNG} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>SCE.png</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>
            
            <a href={certificates} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>University certificates</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>
            
            <a href={courses} className='decoration-none' download>
                <div className='download reveal'>
                    <h1>Courses certificates</h1>
                    <h1 class="fa-sharp fa-solid fa-download border-start"></h1>
                </div>
            </a>
        
        </div>
    )
}
