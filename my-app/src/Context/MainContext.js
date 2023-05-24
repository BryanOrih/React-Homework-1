import React from 'react'
import { useState, createContext } from 'react';

export let MainContext = createContext();

const MainContextProvider = (props) => {
    const [currentDisplay, setCurrentDisplay] = useState([])
    const [toggle, setToggle] = useState("")

    let contextObject ={
        currentDisplay,
        setCurrentDisplay,
        toggle,
        setToggle
    }

  return (
    <MainContext.Provider value={contextObject}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider