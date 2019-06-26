import React, { Component } from "react";
 HEAD
import './style.css';

import "./style.css"
 master

class Main extends Component{
    render(){
        return (
            <>
                {/* Main page components go here */}
                <div className="black">

        <div className="container" id="welcomeTable">
            <p className="welcome">Welcome to Campsite! Campsite is a student designed meeting space for bootcampers to
                interact and collaborate</p>
                
            <hr />>
            <p className="welcome">Campsite offers mutiple ways for students to keep in touch, utilizing the chat feature as
                well as audio and video conferencing.</p>
        </div>
    </div>

{/*STAFF INFO BELOW */}

    {/* <div className="container" id="staffTable">
        <br />
        <h1 className="staffTitle"><u>Educational Staff</u></h1>
        <br />
        <div className="row">
            <div className="col-md-8">
                <h2><u>Intructor</u>: <a className="todd" href="https://www.linkedin.com/in/tbehunin/" 
                rel="noopener noreferrer" target="_blank"><span class="staffTodd">Todd
                        Behunin</span></a></h2>
            </div>

            <div className="col-md-4">
                <h2><u>Admin</u>: <a className="todd" href="https://www.linkedin.com/in/deana-dace-msm/"
                    rel="noopener noreferrer" target="_blank"><span class="staffTodd">Deana Dace</span></a></h2>
            </div>

        </div>
        <br />
        <hr className="staffHr" />
        <br />
        <h2 className="edSupport"><u>Educational Support Team</u></h2>
        <br/>
        <div className="row">
            <div className="col-md-4">
                <h2><u>TA</u>: <a className="ta" href="https://www.linkedin.com/in/bocarlsonpdx/" rel="noopener noreferrer" target="_blank"><span class="staffTodd">Bo
                        Carlson</span></a></h2>
            </div>

            <div className="col-md-4">
                <h2><u>TA</u>: <a className="ta" href="https://www.linkedin.com/in/chatfieldcreate/" rel="noopener noreferrer" target="_blank"><span class="staffTodd">Josh
                        Chatfield</span></a></h2>
            </div>

            <div className="col-md-4">
                <h2><u>TA</u>: <a className="ta" href="https://www.linkedin.com/in/greg-kerstine/"  rel="noopener noreferrer" target="_blank"><span class="staffTodd">Greg
                        Kerstine</span></a></h2>
            </div>
        </div>
    </div> */}
            </>
        )
    }
}

export default Main;