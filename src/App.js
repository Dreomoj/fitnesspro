import React from 'react'
import "./App.css"
import Navbar from './navbar/Navbar'
import Steps from './navbar/Steps'
import Hero from './navbar/Hero'
import Howto from './navbar/Howto'
import Book from './navbar/Book'
import Tracker from './navbar/Tracker'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Howto/>
      <Steps/>
      <Book/>
      <Tracker/>
    </div>
  )
}

export default App