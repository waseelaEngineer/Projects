import React, { useContext, useEffect, useState } from 'react'
import CSS from './StepTwo.module.css'
import { UserContext } from '../../Contexts/UserContext';
import Texts from '../../Texts';

export default function Step2() {

  const [images, setImages] = useState([]);
  const { userDetails, setUserDetails, lang } = useContext(UserContext);
  let texts = Texts[lang];

  function newSelect(name, options) {
    return <div key={name} className={CSS[name]}>
      <select defaultValue={userDetails[name]} onChange={e => { setUserDetails({ ...userDetails, [name]: e.target.value }) }} >
        <option value="" disabled hidden>{texts[name]}</option>
        {options.map(city => (<option key={city} value={city}>{texts[city]}</option>))}
      </select>
      <label>{texts[name]}</label>
    </div>
  }

  function handleImage(e) {
    images.length < 3 && setImages([...images, e.target.files[0]]);
  }

  function deleteImage(name){
    let newImages = 
    images.filter(image =>{
      return image.name !== name;
    })
    setImages(newImages)
  }

  return (
    <>
      <p>{texts.secondStep}</p>
      <h1>{texts.studyAndCertificate}</h1>

      <div className={`${CSS.selects} ${lang === 'en' && CSS.selectsEN}`}>
        {newSelect('certificate', ['bachelor', 'diploma'])}
        {newSelect('specialization', ['arabic', 'english', 'engineer', 'science', 'physics', 'algebra'])}
        {newSelect('experience', ['fromOneToThreeYears', 'fromThreeToFiveYears'])}
      </div>

      <p>{texts.certificatesYouGot}</p>

      <div className={CSS.imageContainer}>
        <div className={CSS.import}>
          <p>{texts.certificateImg}</p>
          <input type='file' className={CSS.imageInput} onChange={handleImage} />
        </div>

        {images.length !== 0 && (
          <div className={CSS.delete}>
            {images.map(image => (
              <div key={image.name}>
                <p >{image.name}</p>
                <button onClick={ ()=> deleteImage(image.name)}>{texts.delete}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}