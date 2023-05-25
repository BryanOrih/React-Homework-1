import React, { useState } from 'react'
import { useContext } from 'react'
import "./index.css"
import SideBar from '../SideBar'
import { MainContext } from '../../Context/MainContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const {setToggle, catergories } = useContext(MainContext)
  const [input, setInput] = useState("")
    const toggleClick = () =>{
        setToggle("open")
    }
  
  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  let catergoryItems = catergories.map((item, index)=>{
    return(
      <li key={index+item}>
        <Link to={`/${item.url}`}>{item.name}</Link>
      </li>
    )
  })

  return (
    <>
    <SideBar/>
    <div className='header'>
        <i className="fa-solid fa-bars toggle" onClick={toggleClick}></i>
        <h1>Code Learned from Chase</h1>
        <div>
            <input type="text" className='search-input input' value={input} onChange={handleChange}/>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <div className='searchDisplay'>
              <ul>
                {catergoryItems}
              </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header