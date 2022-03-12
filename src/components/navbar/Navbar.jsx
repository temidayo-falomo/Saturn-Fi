import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { RiCloseLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <nav>
        
      <div className="nav-container">
        <div className="mobile-container">
          <img src='./assets/logo.svg' alt='' className='logo'/>
          <div className='menu-item' onClick={handleClick}>
              {click ? <RiCloseLine className='hamburger' /> : <GiHamburgerMenu  className='hamburger'/>}
          </div>
        </div>

        <div className={click ? 'sidebar active' : 'sidebar'}>
        <ul className="nav-links">
          <li><a href='/'>Saturn Earn</a></li>
          <li><a href='/'>Saturn Ramp</a></li>
          <li><a href='/'>SDK/API Docs</a><button className='coming-soon'>Coming soon</button></li>
          <li><a href='/'>Saturn Escrow</a><button className='coming-soon'>Coming soon</button></li>
          <li><a href='/'>Contact Us</a></li>
        </ul>
      </div>

      </div>
    </nav>
  )
}

export default Navbar