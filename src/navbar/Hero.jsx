import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div>
        <div className='border'>
        <div className='boxing-text'>
            <p className='ptext'>TRAIN SMARTER. GET STRONGER</p>
            <h1>Simple fitness <br /> experience for <br /> everyone.</h1>
            <p className='pt'>Track your workouts, get better results, and be the best <br /> version of you. Less thinking, more lifting.</p>
            <div className='but1'>
                <button className='button'><span>Download App</span></button>
                <button className='button3'><span>Book a Class</span></button>
            </div>
            <img src="./assets/circle-button.svg" alt="" className='circleb'/>
            
        </div>
        <div className='imaged'>
            <img src="./assets/Dark.png" alt="" className='img1'/>
        </div>
        
        </div>
        <div>
            <p className='clientt'>We work with people from over the world</p>
        <div className='clients'>
            <img src="./assets/logo 01.svg" alt="" />
            <img src="./assets/logo 02.svg" alt="" />
            <img src="./assets/logo 03.svg" alt="" />
            <img src="./assets/logo 04.svg" alt="" />
            <img src="./assets/logo 05.svg" alt="" />
            <img src="./assets/logo 06.svg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hero