import React from 'react'
import graduate from '../images/graduate.PNG'
import tech from '../images/tech.png'

export default function Education() {
  return (
    <div className='slide section'>
      <div className='education-container'>
        <div className='row justify-content-between op-0 reveal'>
          <div className='col-8'>
            <h1>BSc. (Hons) In Mechatronics Engineering.</h1>
            <h2 className='text-black-50 mt-3'>The Future Univerrsity - Sudan - Khartoum 2016 - 2021 Relevant course work:</h2>
            <img src={tech} alt='img' />
          </div>
          <div className='col-4'>
            <img src={graduate} alt='img' />
          </div>
        </div>

        <div className='op-0 reveal'>
          <h1>Courses</h1>
          <h2 className='text-black-50 mt-3'>- PLC at petrol technical center- sudan.</h2>
          <h2 className='text-black-50'>- Classic control at technical center.</h2>
          <h2 className='text-black-50'>- CNC at turkish teaching center.</h2>
          <h2 className='text-black-50'>- MicroController at turkish teaching center - sudan - khartoum.</h2>
        </div>
      </div>

    </div>
  )
}