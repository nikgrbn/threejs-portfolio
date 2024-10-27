
import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Education from './sections/Education.jsx'

function App () {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
