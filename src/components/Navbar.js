/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import AsvLogo from '../logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <a className="navbar-brand" href="#"><img className='logo' src={AsvLogo} alt='ASV Navbar' style={{height:100,width:100}} /></a>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
  
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>

    </ul>
   
  </div>

</nav>
  )
}

export default Navbar
