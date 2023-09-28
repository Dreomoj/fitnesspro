import React from 'react'
import "./book.css"

const Book = () => {
  return (
    <div className='cont'>
       
            <img src="./assets/darkly.png" alt="" className='cont1'/>
       
        <div className='cont2'>
            <div className="subcont">
            <h1 className='bclass'>Book a class</h1>
            <p className='workout'>Track your workouts, get better results, and be the best <br />version of you. Less thinking, more lifting.</p>
            <div>
            <div className='bbutt'>
                <div><img src="./assets/icon1.svg" alt="" /></div>
                <div>
                <h4>For the beginners</h4>
                    <h5>You never workout before, it’s now a <br /> good start</h5>
                </div>
            </div>
            <div className='bbutt2'>
               <div> <img src="./assets/icon2.svg" alt="" /></div>
                <div className='buttt'>
                <h4>Advanced classes</h4>
                    <h5>You never workout before, it’s now a <br /> good start</h5>
                </div>
            </div>
            <div className='bbutt'>
               <div> <img src="./assets/icon3.svg" alt="" /></div>
               <div>
                    <h4>Premium (limited)</h4>
                    <h5>You never workout before, it’s now a <br /> good start</h5>
               </div>
            </div>
            </div>
            <p className='disc'><span className='whitef'>10% Discount</span> if you’re already using the <span className='whitee'> Fitness Pro</span> on App Store</p>
        </div>
            <button className='buttonx'><span className='butc'>Book a class</span><span className='buic'><img src="./assets/Line.svg" alt="" /></span></button>
    </div>
    </div>
  )
}

export default Book