import React, { Component } from "react";
import LoggedInUser from '../LoggedInUser';
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
        console.log(this.props.loggedUserDetails);
        return (
            <>
                <div id="mySidebar" className="sidebar align-content-center mr-5">
                    <button className="closebtn" onClick={closeNav}>&times;</button>
                    { <LoggedInUser loggedUserDetails={this.props.loggedUserDetails}/>}
                </div>

                <div id="main">
                    <button className="openbtn" id="hamburger" onClick={openNav}><i className="fas fa-bars"></i></button> 
                </div>
            </>
        );
    }
}

export default Sidenav;
