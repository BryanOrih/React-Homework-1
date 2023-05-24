import React from 'react'
import { useContext } from 'react'
import "./index.css"
import SideBar from '../SideBar'
import { MainContext } from '../../Context/MainContext'

const Header = () => {
  const { toggle, setToggle } = useContext(MainContext)

    const toggleClick = () =>{
        setToggle("open")
    }


  return (
    <>
    <SideBar/>
    <div className='header'>
        <i className="fa-solid fa-bars toggle" onClick={toggleClick}></i>
        <h1>Code Learned from Chase</h1>
        <div>
            <input type="text" className='search-input input'/>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
    </div>
    </>
  )
}

export default Header