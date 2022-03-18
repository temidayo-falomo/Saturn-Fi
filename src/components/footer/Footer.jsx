import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src="./assets/Logo.svg" alt="" />

        <div className="list-footer">
          <ul className="initial-list-footer">
            <li>
              <a href="/">Saturn Earn</a>
            </li>
            <li>
              <a href="/">
                Saturn Escrow<span> (Coming Soon)</span>
              </a>
            </li>
            <li>
              <a href="/">Saturn Ramp</a>
            </li>
            <li>
              <a href="/">
                SDK/API Docs<span> (Coming Soon)</span>
              </a>
            </li>
          </ul>
          <ul className="second-list-footer">
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="cyr">
          <p>@2022 SaturnFi.co All rights Reserved.</p>
          <p>Info@ SaturnFi.co</p>
    </div>
    </footer>
  );
};

export default Footer;
