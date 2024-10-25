import React from 'react'
import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'

function App () {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
