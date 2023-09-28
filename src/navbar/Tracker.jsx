import React from 'react'
import "./tracker.css"

const Tracker = () => {
  return (
    <div>
        <div className="newfit">
            <p className='newfitp'>New workouts added every week</p>
            <h2 className='newfith'>A new fitness experience <br />for everyone</h2>
        </div>
        <div className="threed">
            <div className="threedcont">
            <img src="./assets/track.svg" alt="" />
            <p className='threedp'>Keep track of calories and <br/> macros</p>
            <p className='threedp2'>Fitness Pro helps track your workouts, <br /> get better results, and be the best <br /> version of you. Less thinking!</p>
        </div>
            <div className="threedcont">
            <img src="./assets/track2.svg" alt="" />
            <p className='threedp'>Access all premium class of <br/> Fitness Pro</p>
            <p className='threedp2'>Fitness Pro helps track your workouts, <br /> get better results, and be the best <br /> version of you. Less thinking!</p>
        </div>
            <div>
            <img src="./assets/track3.svg" alt="" />
            <p className='threedp'>Keep track of calories and <br/> macros</p>
            <p className='threedp2'>Fitness Pro helps track your workouts, <br /> get better results, and be the best <br /> version of you. Less thinking!</p>
        </div>
        </div>
        <div className="simple">
            <div className="split">
                <p className='splitp'>Fitness Pro</p>
                <div className='spllitt1'>
                    <h2 className='splithh'>Simple, powerful, <br/> easy-to-use</h2>
                    <p className='splithp'>Track your workouts, get better results, and be the best <br/>version of you. Less thinking, more lifting.</p>
                </div>
            </div>
        </div>
        <div className="mainsplit">
            <div className='split2'>
                <div className="splitcont1">
                    <p className='ncolor'>1</p>
                    <p className='split2p'>Intuitive and clean design</p>
                    <p  className='slitt2p'>Track your workouts, get better <br/> results, and be the best <br/> version of you.</p>
                </div>
                <div className="splitcont1">
                    <p className='ncolor1'>2</p>
                    <p className='split2p'>An exercise in simplicity</p>
                    <p  className='slitt2p'>Track your workouts, get better <br/> results, and be the best <br/> version of you.</p>
                </div>
                <div className="splitcont1">
                    <p className='ncolor2'>3</p> 
                    <p className='split2p'>The most popular workouts</p>
                    <p  className='slitt2p'>Track your workouts, get better <br/> results, and be the best <br/> version of you.</p>
                </div>
                
        </div>
        <img src="./assets/scene0.png" alt="" className='splitimg' />
    </div>
    </div>
  )
}

export default Tracker