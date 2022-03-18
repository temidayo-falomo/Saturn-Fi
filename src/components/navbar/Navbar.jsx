import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'nav active' : 'nav'}>
      <div className="nav-container">
        <div className="mobile-container">
          {click ? (
            <img src="./assets/blue-logo.svg" alt="" className="logo" />
          ) : (
            <img src="./assets/logo.svg" alt="" className="logo" />
          )}
          <div className="menu-item" onClick={handleClick}>
            {click ? (
              <RiCloseLine className="hamburger" />
            ) : (
              <img src="./assets/close-line.svg" alt="" className="hamburger" />
            )}
          </div>
        </div>

        <div className={click ? "sidebar active" : "sidebar"}>
          <ul className="nav-links">
            <li>
              <a href="/">Saturn Earn</a>
            </li>
            <li>
              <a href="/">Saturn Ramp</a>
            </li>
            <li>
              <a href="/">
                SDK/API Docs{click ? <span>(Coming Soon)</span> : ""}
              </a>
              <button className="coming-soon">Coming soon</button>
            </li>
            <li>
              <a href="/">
                Saturn Escrow{click ? <span>(Coming Soon)</span> : ""}
              </a>
              <button className="coming-soon">Coming soon</button>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
