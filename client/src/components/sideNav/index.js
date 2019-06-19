import React, { Component } from "react";
import ProfileCard from '../ProfileCard';
import './style.css';

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("hamburger").style.display = 'block';
  }

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger").style.display = "none";
  }

class Sidenav extends Component{

    render(){
        return (
            <div>
            
                <div id="mySidebar" className="sidebar align-content-center mr-5">
                    <a href={'javascript:void(0)'} className="closebtn" onClick={closeNav}>&times;</a>
                    <ProfileCard />
                </div>

                <div id="main">
                    <button className="openbtn" id="hamburger" onClick={openNav}><i className="fas fa-bars"></i></button> 
                </div>


            </div>
        
        );
    }
}

export default Sidenav;
