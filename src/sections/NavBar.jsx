import { useState } from 'react'
import { navLinks } from '../constants/index.js'

function NavItems () {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

function NavBar () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="https://drive.google.com/file/d/14t3tU_4tzqxfrk8rW4rJJ6rDTKMcgetg/view?usp=sharing"
              target="_blank" rel="noreferrer"
             className="text-neutral-400 text-xl
             hover:text-white transition-colors font-bold">Download CV</a>

          <button onClick={toggleMenu} className="text-neutral-400
          hover:text-white focus:outline-none sm:hidden flex"
                  aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6"/>
          </button>

          <nav className="sm:flex hidden">
            <NavItems></NavItems>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? `max-h-screen` : `max-h-0`}`}>
        <nav className="p-5">
          <NavItems></NavItems>
        </nav>
      </div>

    </header>
  )
}

export default NavBar
