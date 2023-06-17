import React, { useContext, useState } from 'react'
import CSS from './Subjects.module.css'
import { UserContext } from '../../Contexts/UserContext';
import Texts from '../../Texts';

export default function Subjects() {

  const { subjects, setSubjects, lang } = useContext(UserContext);
  const [showSubjects, setShowSubjects] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  let texts = Texts[lang];
  let allSubjects = [{name: texts.arabic}, {name: texts.english}, {name: texts.engineer}, {name: texts.science}, {name: texts.physics}, {name: texts.math}];  

  function addSubjects() {
    return (
      <div className={`${CSS.checkBoxContainer} ${showSubjects && CSS.show} ${lang === 'en' && CSS.checkBoxContainerEN}`}>
        {allSubjects.filter(subject => {
          return subject.name.includes(searchKey);
        }).map(subject => (
          <label key={subject.name}>{subject.name}
            <input checked={subjects.includes(subject.name)} type="checkBox" onChange={(e) => {
              if (e.target.checked) { setSubjects([...subjects, subject.name]) }
              else {
                let removeSubject = subjects.filter(newSubjects => {
                  return newSubjects !== subject.name;
                })
                setSubjects(removeSubject)
              }
            }}/>
          </label>
        ))}
      </div>
    )
  }

  function ShowSubjects(){
    if (subjects.length === 0){
      return <div className={CSS.extraSpace}></div>
    }
    else{
      return subjects.map(subject => {
        if (allSubjects.map(source =>{return source.name}).includes(subject)) {
          return <button key={subject} className={`${CSS.button} ${lang === 'en' && CSS.buttonEN}`}>{subject}</button>
        }
      })
    }
  }

  return (
    <>
      <div className={CSS.subjects}>
        <div className={CSS.selectBox} onClick={() => { setShowSubjects(!showSubjects) }}>
          <input type="text" value={searchKey} placeholder={texts.search}
            className={`${CSS.search} ${showSubjects && CSS.outline}`}
            onChange={(e) => { setSearchKey(e.target.value) }} />
          <label className={`${CSS.label} ${showSubjects && CSS.show} ${lang === 'en' && CSS.labelEN}`}>{texts.subjectsYouTeach}</label>
        </div>
        {addSubjects()}
      </div>
        {ShowSubjects()}
    </>
  )
}