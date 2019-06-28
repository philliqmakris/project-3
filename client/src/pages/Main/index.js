import React, { Component } from "react";
import "./style.css"

console.log(process.env.REACT_APP_API_URL);

class Main extends Component {
    render() {
        return (
            <>
                {/* Main page components go here */}
                <div className="black">

                    <div className="container" id="welcomeTable">
                        <p className="welcome">Welcome to Campsite! Campsite is a student designed meeting space for bootcampers to
                interact and collaborate</p>
                        <hr />
                        <p className="welcome">Campsite offers mutiple ways for students to keep in touch, utilizing the chat feature as
                well as audio and video conferencing.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;