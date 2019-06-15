import React from "react";
import "./style.css";

function Banner() {
  return (
    <div className="row" id="banner">
    <div className="col-md-4">
        <img className="duck"
            src="https://commencement.uoregon.edu/sites/commencement2.uoregon.edu/files/guidebook-beaduck.png" alt="banner" />
        <h1 className="logo">Campsite</h1>
    </div>
      
    <div className="col-md-8">
    
       {(<a className="studentButton btn btn-log-in" 
        href="/auth/logout">
        Log Out
        </a>)&&
        (<a href="/auth/google" 
        class="studentButton btn btn-log-in">Log In</a>)
  }

    </div>
    </div>
  );
}

export default Banner;




/*
 <div class="box-right">
    {{#if user}}
    <a href="/auth/logout" class="btn btn-log-out">Log Out</a>
    {{else}}
    <a href="/auth/google" class="btn btn-log-in">Log In</a>
    {{/if}}
  </div>
  */