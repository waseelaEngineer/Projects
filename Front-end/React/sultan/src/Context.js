import React, { useEffect, useState } from 'react'

export const Context = React.createContext({});

export default function ContextProvider({ children }) {

    const [activeImg, setActiveImg] = useState(1);
    const [play, setPlay] = useState(true);
    const [page, setPage] = useState("landing");
    const [ lang, setLang ] = useState("ar");

  return (
    <Context.Provider value={{ page, setPage, lang, setLang, activeImg, setActiveImg, play, setPlay }}>
      {children}
    </Context.Provider>
  )
}