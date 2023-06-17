import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {

  const [ lang, setLang ] = useState("ar");
  const [Auth, setAuth] = useState(null);
  const [Tab, setTab] = useState("StepOne");
  const [activeUser, setActiveUser] = useState({});
  const [subjects, setSubjects] = useState([]);

  const [time, setTime] = useState({
    saturday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    sunday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    monday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    tuesday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    wednesday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    thursday: { fromTime: "", fromState: "", toTime: "", toState: "" },
    friday: { fromTime: "", fromState: "", toTime: "", toState: "" }
  })


  const [userDetails, setUserDetails] = useState({
    country: "",
    city: "",
    type: "",
    prief: "",
    certificate: "",
    specialization: "",
    experience: "",
    teaching: "",
    price: "",
    stage: "",
    student: "",
    reservation: "",
  });

  useEffect(() => {
    const storedActiveUser = JSON.parse(localStorage.getItem("activeUser"))
    const storedTab = JSON.parse(localStorage.getItem("Tab"))
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"))
    const storedAuth = JSON.parse(localStorage.getItem("Auth"))
    const storedTime = JSON.parse(localStorage.getItem("time"))
    const storedSubjects = JSON.parse(localStorage.getItem("subjects"))
    const storedLang = JSON.parse(localStorage.getItem("lang"))

    storedActiveUser && setActiveUser(storedActiveUser)
    storedTab && setTab(storedTab)
    storedUserDetails && setUserDetails(storedUserDetails)
    storedTime && setTime(storedTime)
    storedSubjects && setSubjects(storedSubjects)
    storedLang && setLang(storedLang)
    storedAuth && storedAuth ? setAuth(true) : setAuth(false)
  }, []);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser))
    localStorage.setItem("Tab", JSON.stringify(Tab))
    localStorage.setItem("Auth", JSON.stringify(Auth))
    localStorage.setItem("userDetails", JSON.stringify(userDetails))
    localStorage.setItem("time", JSON.stringify(time))
    localStorage.setItem("subjects", JSON.stringify(subjects))
    localStorage.setItem("lang", JSON.stringify(lang))
  }, [Auth, activeUser, Tab, userDetails, time, subjects, lang]);

  return (
    <UserContext.Provider value={{
      activeUser, setActiveUser,
      Auth, setAuth,
      Tab, setTab,
      userDetails, setUserDetails,
      time, setTime,
      subjects, setSubjects,
      lang, setLang
    }}>
      {children}
    </UserContext.Provider>
  )
}