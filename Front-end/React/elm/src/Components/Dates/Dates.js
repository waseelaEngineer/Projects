import React, { useContext, useState } from 'react'
import CSS from './Dates.module.css'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function Dates() {

  const { lang } = useContext(UserContext);
  const texts = Texts[lang];
  const [selectedStudent, setSelectedStudent] = useState("");
  const [showFilterForm, setShowFilterForm] = useState(false);
  const allStateButtons = ['coming', 'active', 'cancel', 'done']
  const allTeachButtons = ['attend', 'remote']

  const [studentFilter, setStudentFilter] = useState({
    attend: true,
    remote: true,
    coming: true,
    active: true,
    done: true,
    cancel: true,
  });

  const allStudents = [
    {
      name: 'studentOneName',
      date: 'dateOne',
      teaching: 'remote',
      status: 'coming',
      img: one,
    },
    {
      name: 'studentTwoName',
      date: 'dateTwo',
      teaching: 'attend',
      status: 'active',
      img: two,
    },
    {
      name: 'studentThreeName',
      date: 'dateThree',
      teaching: 'remote',
      status: 'cancel',
      img: three,
    },
    {
      name: 'studentFourName',
      date: 'dateFour',
      teaching: 'attend',
      status: 'done',
      img: four,
    },
    {
      name: 'studentFiveName',
      date: 'dateFive',
      teaching: 'attend',
      status: 'done',
      img: five,
    },
  ]

  function showStudents() {
    return allStudents.map(student => {
      if (studentFilter[student.teaching] && studentFilter[student.status]) {
        return <div key={student.name} className={CSS.student} onClick={() => { studentDetails(student) }}>
          <div className={CSS.profile}>
            <img src={student.img} alt={"logo"} />
            <div className={CSS.details}>
              <p>{texts[student.name]}</p>
              <h4>{texts[student.date]}</h4>
              <h4>{texts[student.teaching]}</h4>
            </div>
          </div>
          <div className={CSS[student.status]}>{texts[student.status]}</div>
        </div>
      }
    })
  }

  function studentDetails(student) {
    setSelectedStudent({
      name: student.name,
      date: student.date,
      teaching: student.teaching,
      status: student.status,
      img: student.img,
    })
  }

  function studentDetailsNewRow(firstValue, secondValue) {
    return (
      <div className={CSS.row}>
        <p>{firstValue}</p>
        <p className={`${secondValue === selectedStudent.status && CSS[selectedStudent.status]}`}>{[secondValue]}</p>
      </div>
    )
  }

  function changeStudentFilter(filter) {
    setStudentFilter({ ...studentFilter, [filter]: !studentFilter[filter] })
  }

  function filterButtonClass(filter) {
    return `${CSS.button} ${!studentFilter[filter] && CSS.disable}`
  }

  return (
    <>
      <p className={CSS.main}>{texts.main}/{texts.dates}</p>

      {selectedStudent === ""
        ? (
          <div>
            <div className={CSS.header}>
              <h1>{texts.dates}</h1>
              <button onClick={() => { setShowFilterForm(true) }}>{texts.filter}</button>
            </div>
            {showStudents()}
          </div>
        )

        : (
          <div>
            <h1 className={CSS.detailsTitle}>{texts.dateDetails}</h1>
            <div className={CSS.studentName}>
              <img src={selectedStudent.img} style={{ width: "50px" }} alt={"img"} />
              <h3>{texts[selectedStudent.name]}</h3>
            </div>

            <div className={CSS.detailsContainer}>
              <h3>{texts.reservationDetails}</h3>
              {studentDetailsNewRow(texts.dateState, texts[selectedStudent.status])}
              {studentDetailsNewRow(texts.lessonDate, texts[selectedStudent.date])}
              {studentDetailsNewRow(texts.reservationHours, `3 / ${texts.week}`)}
              {studentDetailsNewRow(texts.lessonTime, `30 ${texts.minute}`)}
              {studentDetailsNewRow(texts.lessonLocation, texts[selectedStudent.teaching])}
              <h3 style={{ marginTop: "10px" }}>{texts.reciept}</h3>
              {studentDetailsNewRow(texts.price, `482.00 ${texts.sr}`)}
              {studentDetailsNewRow(texts.additionalVat, `16.80 ${texts.sr}`)}
              <div className={CSS.line}></div>
              {studentDetailsNewRow(texts.totalPrice, `138.80 ${texts.sr}`)}
            </div>

            <div className={CSS.buttonDiv}>
              <button className={CSS.link} onClick={() => { setSelectedStudent("") }}>{texts.lessonLink}</button>
              <button className={CSS.send} onClick={() => { setSelectedStudent("") }}>{texts.massageStudent}</button>
            </div>
          </div>
        )
      }

      <div className={`${CSS.filter} ${showFilterForm && CSS.show}`}>
        <div className={CSS.title}>
          <h1>{texts.filter}</h1>
          <h1 className={CSS.close} onClick={() => { setShowFilterForm(false) }}>X</h1>
        </div>
        <h3>{texts.lessonLocation}</h3>

        <div>
          {allTeachButtons.map(button => (
            <button key={button} className={filterButtonClass(button)} onClick={() => { changeStudentFilter(button) }}>{texts[button]}</button>
          ))}
        </div>
        <h3>{texts.dateState}</h3>
        <div>
          {allStateButtons.map(button => (
            <button key={button} className={filterButtonClass(button)} onClick={() => { changeStudentFilter(button) }}>{texts[button]}</button>
          ))}
        </div>
        <div className={CSS.applyDiv}>
          <button className={CSS.apply} onClick={() => { setShowFilterForm(false) }}>{texts.apply}</button>
        </div>
      </div>
    </>
  )
}