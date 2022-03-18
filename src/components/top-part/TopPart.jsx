import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import './TopPart.css'

function TopPart() {
  return <div className="top-container">
    <Navbar />
    <Header />
    <div className="waves">
      <img src="./assets/new-hero-bg.svg" alt="" className="hero-bg"/>
      <img src="./assets/Slice 1.svg" alt="" className="useHero"/>
    </div>
    </div>
}

export default TopPart;
