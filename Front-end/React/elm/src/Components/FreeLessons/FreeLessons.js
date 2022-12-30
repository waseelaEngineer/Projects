import React, { useState, useContext } from 'react'
import CSS from './FreeLessons.module.css'
import jed from '../../images/jed.jpg'
import ryd from '../../images/ryd.jpg'
import yon from '../../images/yon.jpg'
import tai from '../../images/tai.jpg'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function FreeLessons() {

  const { lang } = useContext(UserContext);
  const [placeSearch, setplaceSearch] = useState("")
  const [courses, setCourses] = useState([])
  const [showAddCourseForm, setShowAddCourseForm] = useState(false)
  const [showPlaceSuggesions, setshowPlaceSuggesions] = useState(false)
  const texts = Texts[lang];


  const [course, setCourse] = useState({
    name: "",
    teaching: "",
    date: "",
    time: {
      hours: "",
      state: "am"
    },
    available: "",
    place: {
      name: "",
      description: "",
      img: "",
    }
  })

  const allPlaces = [
    {
      name: "jed",
      description: "jedDiscription",
      img: jed
    },
    {
      name: "ryd",
      description: "rydDiscription",
      img: ryd
    },
    {
      name: "yon",
      description: "yonDiscription",
      img: yon
    },
    {
      name: "tif",
      description: "tifDiscription",
      img: tai
    },
  ]

  function shareCourse() {
    let formInputsCompleted = course.name !== "" && course.teaching !== "" && course.date !== "" && course.time !== "" && course.available !== "";
    if (formInputsCompleted) {
      setCourses([...courses, {
        name: course.name,
        teaching: course.teaching,
        available: course.available,
        time: {
          hours: course.time.hours,
          state: course.time.state,
        }
      }])
      window.scrollTo(0, 0)
      setShowAddCourseForm(false)
    }
    else {
      alert("Please fill all inputs")
    }
  }

  function courseTeaching(type) {
    setCourse({ ...course, teaching: type })
  }

  function teachingButtonClass(button) {
    return `${CSS.button} ${course.teaching === button && CSS.active}`
  }

  function header(type) {
    return <>
      <p className={CSS.main}>{texts.main}/{texts.freeLessons}</p>
      <div className={CSS[type]}>
        <h1>{texts.freeLessons}</h1>
        {type === 'addCourse' && <p>{texts.freeLessonsIncreaseYourExplore}</p>}
        <button onClick={() => { setShowAddCourseForm(true) }}>{texts.addFreeLesson}</button>
      </div>
    </>
  }

  function showCourses() {
    return <div className={CSS.coursesContainer}>
      {courses.map(item => (
        <div key={courses.indexOf(item)}>
          <div className={CSS.courseDiv}>
            <div className={CSS.priceHeader}>
              <h3>{item.name}</h3>
              <h3 className={CSS.lessonLink}>{texts.lessonLink}</h3>
            </div>
            <div className={CSS.priceDetails}>
              <div>
                <p>{texts.allowedNumber}</p>
                <div className={CSS.price}>
                  <h4>{item.available}</h4>
                  <h4>{texts.student}</h4>
                </div>
              </div>
              <div>
                <p>{texts.reservedNumber}</p>
                <div className={CSS.price}>
                  <h4>{Math.floor(Math.random() * item.available)}</h4>
                  <h4>{texts.student}</h4>
                </div>
              </div>
              <div>
                <p>{texts.lessonDate}</p>
                <h4>{item.time.hours}{item.time.state}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  }

  function handlePlaces() {
    return course.place.name === ""
      ? (<div className={CSS.places} onClick={() => { setshowPlaceSuggesions(true) }}>
        <h3>{texts.suggestionsList}</h3>
        <h3>{">"}</h3>
      </div>)
      : (<div className={CSS.placeDiv2}>
        <div className={CSS.imgDiv}>
          <img src={course.place.img} className={CSS.img} alt="img" />
          <div className={CSS.cityDiv}>
            <h3>{texts[course.place.name]}</h3>
            <p>{texts[course.place.description]}</p>
            <p className={CSS.delete} onClick={() => {
              setCourse({
                ...course, place: {
                  name: "",
                  description: "",
                  img: "",
                }
              })
            }}>{texts.deleteLocation}</p>
          </div>
        </div>
        <h4 className={CSS.edit} onClick={() => { setshowPlaceSuggesions(true) }}>{texts.edit}</h4>
      </div>)
  }

  function showPlaces() {
    return allPlaces.filter(place => {
      return texts[place.name].includes(placeSearch);
    }).map(city => (
      <div key={city.name} className={CSS.placeDiv}>
        <div className={CSS.imgDiv}>
          <img src={allPlaces[allPlaces.indexOf(city)].img} style={{ width: "100px" }} alt="img" />
          <div className={CSS.cityDiv}>
            <h3>{texts[allPlaces[allPlaces.indexOf(city)].name]}</h3>
            <p>{texts[allPlaces[allPlaces.indexOf(city)].description]}</p>
            <button>{texts.showOnMap}</button>
          </div>
        </div>
        <input className={CSS.check} name="city" type="radio" onClick={() => {
          setCourse({
            ...course, place: {
              name: allPlaces[allPlaces.indexOf(city)].name,
              description: allPlaces[allPlaces.indexOf(city)].description,
              img: allPlaces[allPlaces.indexOf(city)].img
            }
          })
        }}></input>
      </div>
    ))
  }

  return (
    <>
      {!showAddCourseForm
        ? (<>
          {courses.length === 0
            ? header('addCourse')
            : <>{header('coursesHeader')}  {showCourses()}</>
          }
        </>)

        : (<>
          <p className={CSS.main}>{texts.main}/{texts.freeLessons}</p>
          <h1 className={CSS.title}>{texts.addLesson}</h1>
          <div className={CSS.inputs}>
            <input placeholder={texts.lessonTopic} defaultValue={course.name} onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} />

            <h3>{texts.courseLocation}</h3>
            <div className={CSS.details}>
              <button className={teachingButtonClass('attend')} onClick={() => { courseTeaching('attend') }}>{texts.attend}</button>
              <button className={teachingButtonClass('remote')} onClick={() => { courseTeaching('remote') }}>{texts.remote}</button>
            </div>
            {course.teaching === "attend" && handlePlaces()}

            <input placeholder={texts.lessonDate} defaultValue={course.date} onChange={(e) => { setCourse({ ...course, date: e.target.value }) }} />

            <div style={{ position: "relative" }}>
              <input placeholder={texts.lessonHour} defaultValue={course.time.hours} onChange={(e) => { setCourse({ ...course, time: { ...course.time, hours: e.target.value } }) }} />
              <select className={`${CSS.timeSelect} ${lang === 'en' && CSS.timeSelectEN}`} defaultValue={course.time.state} 
                onChange={(e) => { setCourse({ ...course, time: { ...course.time, state: e.target.value } }) }}>
                <option value="am">{texts.am}</option>
                <option value="pm">{texts.pm}</option>
              </select>
            </div>

            <input placeholder={texts.maxStudent} type="number" defaultValue={course.available} onChange={(e) => { setCourse({ ...course, available: e.target.value }) }} />
          </div>
          <button className={CSS.share} onClick={shareCourse}>{texts.shareLesson}</button>

          <div className={`${CSS.placeContainer} ${showPlaceSuggesions && CSS.show}`}>
            <div className={CSS.placeDiv}>
              <h1>{texts.suggestionsList}</h1>
              <h1 className={CSS.exit} onClick={() => { setshowPlaceSuggesions(false) }}>X</h1>
            </div>
            <input className={CSS.placeSearch} defaultValue={placeSearch} placeholder={texts.search} onChange={(e) => { setplaceSearch(e.target.value) }} />

            {showPlaces()}
          </div>

        </>)}
    </>
  )
} 