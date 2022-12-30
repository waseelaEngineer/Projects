import React, { useContext, useState } from 'react'
import CSS from './Development.module.css'
import jed from '../../images/jed.jpg'
import ryd from '../../images/ryd.jpg'
import yon from '../../images/yon.jpg'
import tai from '../../images/tai.jpg'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function Development() {

  const { lang } = useContext(UserContext);
  const [placeSearch, setPlaceSearch] = useState("")
  const [topics, setTopics] = useState([])
  const [courses, setCourses] = useState([])
  const [showAddCourseForm, setShowAddCourseForm] = useState(false)
  const [showPlaceSuggesions, setshowPlaceSuggesions] = useState(false)
  const texts = Texts[lang];

  const [course, setCourse] = useState({
    name: "",
    teaching: "",
    hours: "",
    start: "",
    topic: "",
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
  ];

  const columnOne = [];
  const columnTwo = [];

  for (let i = 0; i < topics.length; i++) {
    i % 2 === 0
      ? columnOne.push(<div key={i} className={CSS.element}><p className={CSS.number}>{i + 1}</p><p>{topics[i]}</p></div>)
      : columnTwo.push(<div key={i} className={CSS.element}><p className={CSS.number}>{i + 1}</p><p>{topics[i]}</p></div>)
  }

  function courseTeaching(type) {
    setCourse({ ...course, teaching: type })
  }

  function teachingButtonClass(button) {
    return `${CSS.button} ${course.teaching === button && CSS.active}`
  }

  function header(type) {
    return <>
      <p className={CSS.main}>{texts.main}/{texts.development}</p>
      <div className={CSS[type]}>
        <h1>{texts.development}</h1>
        {type === 'addCourse' && <p>{texts.startMakingCourses}</p>}
        <button onClick={() => { setShowAddCourseForm(true) }}>{texts.addCourse}</button>
      </div>
    </>
  }

  function shareCourse() {
    let formInputsCompleted = course.name !== "" && course.teaching !== "" && course.hours !== "" && course.start !== "" && course.topic !== ""
    if (formInputsCompleted) {
      setCourses([...courses, {
        name: course.name,
        teaching: course.teaching,
        hours: course.hours,
        start: course.start
      }])
      window.scrollTo(0, 0)
      setShowAddCourseForm(false)
    }
    else {
      alert("Please fill all inputs")
    }
  }

  function showCourses() {
    return <div className={CSS.coursesContainer}>
      {courses.map(course => (
        <div key={courses.indexOf(course)} className={CSS.courseDiv}>
          <div className={CSS.priceHeader}>
            <h3>{course.name}</h3>
            <div className={CSS.price}>
              <h3>{Math.floor(Math.random() * 1000)} </h3>
              <p>{texts.sr}</p>
            </div>
          </div>
          <div className={CSS.priceDetails}>
            <div>
              <p>{texts.courseTime}</p>
              <div className={CSS.price}>
                <h4>{course.hours}</h4>
                <h4>{texts.hours}</h4>
              </div>
            </div>
            <div>
              <p>{texts.courseLocation}</p>
              <h4>{texts[course.teaching]}</h4>
            </div>
            <div>
              <p>{texts.startDate}</p>
              <h4>{course.start}</h4>
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
              setCourse({ ...course, place: { name: "", description: "", img: "", } })
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
          <p className={CSS.main}>{texts.main}/{texts.development}</p>
          <h1 className={CSS.title}>{texts.development}</h1>
          <div className={CSS.inputs}>
            <input placeholder={texts.courseName} defaultValue={course.name} onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} />

            <h3>{texts.courseLocation}</h3>
            <div className={CSS.details}>
              <button className={teachingButtonClass('remote')} onClick={() => { courseTeaching('remote') }}>{texts.remote}</button>
              <button className={teachingButtonClass('attend')} onClick={() => { courseTeaching('attend') }}>{texts.attend}</button>
            </div>
            {course.teaching === "attend" && handlePlaces()}

            <div className={CSS.details}>
              <input type="number" defaultValue={course.hours} placeholder={texts.courseHours} onChange={(e) => { setCourse({ ...course, hours: e.target.value }) }} />
              <input type="text" defaultValue={course.start} placeholder={texts.startDate} onChange={(e) => { setCourse({ ...course, start: e.target.value }) }} />
            </div>
            <div style={{ position: "relative" }}>
              <input placeholder={texts.topics} defaultValue={course.topic} onChange={(e) => { setCourse({ ...course, topic: e.target.value }) }} />
              <button className={`${CSS.add} ${lang === 'en' && CSS.addEN}`} 
                onClick={() => { course.topic !== "" && setTopics([...topics, course.topic]) }}>{texts.add}
              </button>
            </div>

            <div className={CSS.topics}>
              <div className={CSS.row}>{columnOne}</div>
              <div className={CSS.row}>{columnTwo}</div>
            </div>

          </div>
          <button className={CSS.share} onClick={shareCourse}>{texts.shareCourse}</button>

          <div className={`${CSS.placeContainer} ${showPlaceSuggesions && CSS.show}`}>
            <div className={CSS.placeDiv}>
              <h1>{texts.suggestionsList}</h1>
              <h1 className={CSS.exit} onClick={() => { setshowPlaceSuggesions(false) }}>X</h1>
            </div>
            <input className={CSS.placeSearch} defaultValue={placeSearch} placeholder={texts.search} onChange={(e) => { setPlaceSearch(e.target.value) }} />
            {showPlaces()}
          </div>
        </>)}
    </>
  )
} 