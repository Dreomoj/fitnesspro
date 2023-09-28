import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logoc'>
            <img src="./assets/logo.svg" alt="" />
        </div>
        <div className="links">
            <a href="" className='link'>Home</a>
            <a href="" className='link'>Pricing</a>
            <a href="" className='link'>Downloads</a>
            <a href="" className='link'>Class</a>
            <a href="" className='link'>Lifestyle</a>
        </div>
        <div className="icons">
            <img src="./assets/instagram.svg" alt="" className='navicons'/>
            <img src="./assets/fb.svg" alt="" className='navicons'/>
            <img src="./assets/twitter.svg" alt="" className='navicons'/>
        </div>
        <div>
            <button className='butt1'>Get free trial</button>
        </div>

    </div>
  )
}

export default Navbar