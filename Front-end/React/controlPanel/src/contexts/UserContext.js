import React, { useState } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {

  const [auth, setAuth] = useState(false);
  const [lang, setLang] = useState('ar');

  return (
    <UserContext.Provider value={{ auth, setAuth, lang, setLang}}>
      {children}
    </UserContext.Provider>
  )
}