import React from "react";
import "./style.css";

function Banner() {
  return (
    <div className="row" id="banner">
    <div className="col-md-4">
        <img className="duck"
            src="https://commencement.uoregon.edu/sites/commencement2.uoregon.edu/files/guidebook-beaduck.png" alt="banner" />
        <h1 className="logo">UO OurSite</h1>
    </div>
      
    <div className="col-md-8">
        <a className="studentButton" href="/login">
            Go To Student Area
        </a>
    </div>
    </div>
  );
}

export default Banner;

