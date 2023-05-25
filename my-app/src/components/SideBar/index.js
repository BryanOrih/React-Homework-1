import React from 'react'
import "./index.css"
import { MainContext } from '../../Context/MainContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const { toggle, setToggle, catergories } = useContext(MainContext)
    const handleClose = () =>{
        setToggle("")
    }

    let catergoryItems = catergories.map((item, index)=>{
      return(
        <li key={index}>
          <Link to={`/${item.url}`}>{item.name}</Link>
        </li>
      )
    })
  return (
    <div className={`sideBar ${toggle}`}>
        <i className="fa-sharp fa-solid fa-x" onClick={handleClose}></i>
        <h1>Subjects</h1>
        <hr/>
        <ul id='Catergories'>
            {catergoryItems}
        </ul>
    </div>
  )
}

export default SideBar