import React from 'react'
import { useState, createContext } from 'react';

export let MainContext = createContext();

const MainContextProvider = (props) => {
    const [currentDisplay, setCurrentDisplay] = useState([])
    const [toggle, setToggle] = useState("")
    const [catergories, setCaterogies] = useState([
      {name:"Home", url:""},
      {name:"HTML", url:"HTML"},
      {name:"CSS", url: "CSS"},
      {name:"JavaScript", url: "JavaScript"},
      {name:"React", url: "React"}
    ])
    // const [searchDisplay, setSearchDisplay] = useState("none")
    let contextObject ={
        catergories,
        setCaterogies,
        currentDisplay,
        setCurrentDisplay,
        toggle,
        setToggle,
        // searchDisplay,
        // setSearchDisplay
    }

  return (
    <MainContext.Provider value={contextObject}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider