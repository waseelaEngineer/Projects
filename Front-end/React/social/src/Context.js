import React, { useState, useEffect } from 'react'

export const Context = React.createContext({});

export default function ContextProvider({ children }) {

  const [ user, setUser ] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    gender: '',
    education: '',
    date: '',
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    op5: false,
    op6: false,
    op7: false,
    terms: false,
    policy: false,
    registerTime: 0,
    termsTime: 0,
    policyTime: 0,
    termsClicks: 0,
    policyClicks: 0,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    storedUser && setUser(storedUser)
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}