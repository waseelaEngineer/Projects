import React from 'react'
import work from '../images/work.jpg'

export default function Work() {

    return (
        <div className='slide section'>
            <div className='work-container'>
                <div className='row align-items-center justify-content-between op-0 reveal'>
                    <div className='col-7'>
                        <h1>Qualifications</h1>
                        <h2 className='text-black-50 mt-3'>- Fullstack developer.</h2>
                        <h2 className='text-black-50'>- Registerd in Saudi Council of engineers membership No: 820502.</h2>
                        <h2 className='text-black-50'>- Languages: Arabic (Native), English (Fluent), Spanish (Beginner).</h2>                        
                    </div>
                    <div className='col-4'>
                        <img width='200px' src={work} alt='img'/> 
                    </div>
                </div>
    
                <div className='op-0 reveal'>
                    <h1 className='mt-5'>Experience</h1>
                    <h2 className='text-black-50 mt-5'>
                        Worked in Lvlup agency as a software engineer fullstack developer for one year which helped me 
                        gain the skills of: 
                    </h2>
                    <h2 className='text-black-50'>- Work effectivly as a team member</h2>
                    <h2 className='text-black-50'>- Daily meetings via zoom or google meet</h2>
                    <h2 className='text-black-50'>- Organize tasks using clickup or trello</h2>
                    <h2 className='text-black-50'>- Handle an expected problems</h2>
                    <h2 className='text-black-50'>- Complete tasks of higher priority first</h2>
                    <h2 className='text-black-50'>- Comunication with team members</h2>
                    <h2 className='text-black-50'>- Analyse websites performance, problems, bugs, diagnostics, </h2>
                    <h2 className='text-black-50'>
                        - Maintaining and improving existing codebase with team members via a public repository in Github.
                    </h2>
                </div>
            </div>
        </div>
      )
    }