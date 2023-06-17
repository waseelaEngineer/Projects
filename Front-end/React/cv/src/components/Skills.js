import React from 'react'
import skills from '../images/skills.PNG'
import tech from '../images/techSkills.png'

export default function Skills() {

    return (
        <div className='slide section'>
            <div className='skills-container'>
                <div className='row gap-1 justify-content-between align-items-center op-0 reveal'>
                    <div className='col-8'>
                        <h1>Technical skills</h1>
                        <img src={tech} alt='img' />
                    </div>
                    <div className='col-3'>
                        <img src={skills} alt='img' />
                    </div>
                </div>

                <div className='op-0 reveal'>
                    <h1 className='mt-5'>Soft skills</h1>
                    <h2 className='text-black-50 mt-3'>- Great communication skills.</h2>
                    <h2 className='text-black-50'>- Complete teamwork tasks efficiently.</h2>
                    <h2 className='text-black-50'>- Discover and fix programming bugs.</h2>
                    <h2 className='text-black-50'>- Self learner, thinker and problem solver.</h2>
                </div>

            </div>
        </div>
    )
}