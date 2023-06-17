import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {

  const [ lang, setLang ] = useState("ar");

  useEffect(() => {
    const storedLang = JSON.parse(localStorage.getItem("lang"))
    storedLang && setLang(storedLang)
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang))
  }, [lang]);

  return (
    <UserContext.Provider value={{ lang, setLang }}>
      {children}
    </UserContext.Provider>
  )
}