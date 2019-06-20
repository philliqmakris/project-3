import React from "react";
import "./style.css";

// import config from "../../config/config"


function Banner() {
  return (
    <div className="row" id="banner">
      <div className="col-md-4">
        <img className="duck"
          src="https://commencement.uoregon.edu/sites/commencement2.uoregon.edu/files/guidebook-beaduck.png" alt="banner" />
        <h1 className="logo">Campsite</h1>
      </div>

      <div className="col-md-8">

      </div>
    </div>
  );
}

export default Banner;