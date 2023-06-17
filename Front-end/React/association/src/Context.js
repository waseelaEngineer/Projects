import React, { useState, useEffect } from 'react'

export const Context = React.createContext({});

export default function ContextProvider({ children }) {

  const [ lang, setLang ] = useState("ar");

//   useEffect(() => {
//     const storedLang = JSON.parse(localStorage.getItem("lang"))
//     storedLang && setLang(storedLang)
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("lang", JSON.stringify(lang))
//   }, [lang]);

  return (
    <Context.Provider value={{ lang, setLang }}>
      {children}
    </Context.Provider>
  )
}