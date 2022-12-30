import React from 'react'

export default function Header() {
    
    return (
        <div className='header'>
            <div className='d-flex gap-4'>
                <h1>Meet
                    <span className='text-white'> Waseela</span>
                </h1>
                <h1 className='emoji'>&#128075;</h1>
            </div>


            <h3 className='mt-5 text-white-50'>
                Mohamed alwaseela ali alimam is a sudanese
                <span className='text-white'> Creative Developer </span>
                specialized in 
                <span className='text-white'> Web Development, </span>
                He has worked in many projects
                for clients to create interactive websites accessible to everyone from their browser.
                <br/><br/>
                Waseela has been working in web development and programming in various
                enterprises for 
                <span className='text-white'> more than 2 years, </span>
                making him an expert fullstack developer and programmer.
            </h3>
        </div>
    )
}