import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../../Styles/style.css'

function Navbar() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <header>
      <h3>PaperBoy</h3>
      <nav ref={navRef}>
        {/* <a href="#">Headlines</a>
        <a href="#">Search</a>
        <a href="#">Messages</a>
        <a href="#">Profile</a> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
