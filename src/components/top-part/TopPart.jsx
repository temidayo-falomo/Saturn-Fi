import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import './TopPart.css'

function TopPart() {
  return <div className="top-container">
    <Navbar />
    <Header />
    <div className="waves">
      <img src="./assets/hero-bg.svg" alt="" />
    </div>
    </div>
}

export default TopPart;
