import React from 'react'
import "./howto.css"

const Howto = () => {
  return (
    <div className='howto'>
        <div>
            <p className='how1'>How it works</p>
            <p className='how2'>Stacks is a production-ready library of stackable <br />content blocks built in React Native.</p>
        </div>
        <div className='clients1'>
            <img src="./assets/icon.svg" alt="" />
            <img src="./assets/connect line.svg" alt="" />
            <img src="./assets/icon-1.svg" alt="" />
            <img src="./assets/connect line.svg" alt="" />
            <img src="./assets/icon-2.svg" alt="" />
            <img src="./assets/connect line.svg" alt="" />
            <img src="./assets/icon-3.svg" alt="" />
        </div>
        <div className='stepp'>
          <div>
            <p className='stepping'>Step 1</p>
            <p className='downloads'>Download</p>
            <p className='description1'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
          </div>
          <div>
            <p className='stepping'>Step 2</p>
            <p className='downloads'>Choose your trainner</p>
            <p className='description1'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
          </div>
          <div>
            <p className='stepping'>Step 3</p>
            <p className='downloads'>Set the goals</p>
            <p className='description1'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
          </div>
          <div>
            <p className='stepping'>Step 4</p>
            <p className='downloads'>Workout time</p>
            <p className='description1'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
          </div>
        </div>
    </div>
  )
}

export default Howto