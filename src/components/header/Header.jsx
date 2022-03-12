import React from "react";
import './Header.css'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-header">
          <img src="./assets/Group 9.svg" alt="" />
        </div>

        <div className="middle-header">
          <h1> Saturn Fi is the world’s leading financial automation service
            provider.</h1>
          <p>Automate financial transactions, Trade P2P, and do lots more.</p>
          <button className="blue-btn">Contact Us</button>
        </div>

        <div className="right-header">
            <img src="./assets/Group 8.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
