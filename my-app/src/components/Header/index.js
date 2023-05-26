import React, { useState } from 'react'
import { useContext, useRef } from 'react'
import "./index.css"
import SideBar from '../SideBar'
import { MainContext } from '../../Context/MainContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState("none")
  const [input, setInput] = useState("")
  const [focus, setFocus] = useState("")
  const {setToggle, catergories} = useContext(MainContext)

  const toggleClick = () =>{
        setToggle("open")
    }
  
  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  let catergoryFilter = catergories.filter((item)=>{
    let searchedItem = item.name.slice(0,input.length).toLowerCase()
    if(searchedItem.includes(input.toLowerCase())) return item
  })

  let catergoryItems = catergoryFilter.map((item, index)=>{
    return(
      <li key={index+item}>
        <Link className={"searchList"}to={`/${item.url}`}>{item.name}</Link>
      </li>
    )
  })
  const handleList = () =>{
    setSearchDisplay("block")
    setFocus("focus")
  }
  window.onmouseup = function(e) {
    if(e.target.className == "search-input input" || e.target.className == "searchList"){
    }else{
      setSearchDisplay("none")
      setFocus("")
      setToggle("")
    }
  }
  
  return (
    <>
    <SideBar/>
    <div className='header'>
        <i className="fa-solid fa-bars toggle" onClick={toggleClick}></i>
        <h1>Code Learned from Chase</h1>
        <div>
            <input type="text" id={focus} className='search-input input' value={input} onChange={handleChange} onMouseUp={handleList}/>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <div className='searchDisplay' style={{display: searchDisplay}}>
                {catergoryItems}
            </div>
        </div>
    </div>
    </>
  )
}

export default Header