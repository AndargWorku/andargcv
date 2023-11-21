import React from 'react'
import './header.css'
import CTA from "./CTA"
import A from "../../assets/A .jpg"

import HeaderSocials from "./HeaderSocials"
const Header = () => {
  return (
    <header>
     <div className='container header_container'>
      <h3>Hello I'm</h3>
      <h1>Andarg Worku</h1>
      <h2 className='text-light'> Fullstack Web Developer</h2>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={A} alt='A'/>
          </div>
          <a href="#contact" className="scroll_down">Scroll down </a>
          </div>
     
    </header>
  )
}

export default Header
