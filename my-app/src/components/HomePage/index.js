import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className='MainPage'>
        <img src={require('../../Images/CoolGuy.PNG')}/>
        <div>
            <h1>Teacher Appreciation</h1>
            <p>
                This is my cool teacher from Per Scholas, he’s super radical
                 and has knowledge like you can’t believe! He’s born and
                raised in Texas (potentially a cowboy) and has sick coding
                skills. He taught us stuff in HTML, CSS and JavaScript. This
                page is gonna be focused on the topics he’s taught us as a
                tribute to his greatness. I have advanced beyond what I
                 thought was possible with my code in just a few months and
                  I couldn’t be more thankful. Keep up the good work!
            </p>
            <br/>
            <h1 className='Important'>
                If there is anyone non-chase viewer looking at this,
                be sure to utilize this page. Click on the hamburger 
                Icon to see the list of stuff to see!!
            </h1>
        </div>
        <h1 className='Important2'>
            If there is anyone non-chase viewer looking at this,
            be sure to utilize this page. Click on the hamburger 
            Icon to see the list of stuff to see!!
        </h1>
    </div>
  )
}

export default Home