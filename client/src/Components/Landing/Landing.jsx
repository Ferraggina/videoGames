import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";
function Landing() {
  return (
    <div className="divImage">
      <img
        src="https://images3.alphacoders.com/895/thumb-1920-895455.jpg"
        alt="pressStart"
      />
      <div className="landingDiv">
        <div className="landingDivHijo">
          <NavLink to="/home">
            <button className="landingButton">START</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Landing;
