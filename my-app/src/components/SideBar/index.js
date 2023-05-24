import React from 'react'
import "./index.css"
import { MainContext } from '../../Context/MainContext'
import { useContext } from 'react'

const SideBar = () => {
    const { toggle, setToggle } = useContext(MainContext)
    const handleClose = () =>{
        setToggle("")
    }
  return (
    <div className={`sideBar ${toggle}`}>
        <i class="fa-sharp fa-solid fa-x" onClick={handleClose}></i>
        <h1>Subjects</h1>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JavaScript DOM</li>
            <li>REACT</li>
        </ul>
    </div>
  )
}

export default SideBar