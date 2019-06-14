import React, { Component } from "react";


class Main extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>

                {/* Main page components go here */}
                <div class="black">

        <div class="container" id="welcomeTable">
            <p class="welcome">Welcome to UO OurSite! OurSite is a student designed meeting space for bootcampers to
                interact and collaborate</p>
            <hr />>
            <p class="welcome">Oursite offers mutiple ways for students to keep in touch, utilizing the chat feature as
                well as audio and video conferencing.</p>
        </div>
    </div>

    <div class="container" id="staffTable">
        <br />
        <h1 class="staffTitle"><u>Educational Staff</u></h1>
        <br />
        <div class="row">
            <div class="col-md-8">

                <h2><u>Intructor</u>: <a class="todd" href="https://www.linkedin.com/in/tbehunin/" rel="noopener noreferrer" target="_blank">Todd
                        Behunin</a></h2>
            </div>

            <div class="col-md-4">
                <h2><u>Admin</u>: <a class="todd" href="https://www.linkedin.com/in/deana-dace-msm/"
                    rel="noopener noreferrer" target="_blank">Deana Dace</a></h2>
            </div>

        </div>
        <br />
        <hr class="staffHr" />
        <br />
        <h2 class="edSupport"><u>Educational Support Team</u></h2>
        <br/>
        <div class="row">
            <div class="col-md-4">
                <h2><u>TA</u>: <a class="ta" href="https://www.linkedin.com/in/bocarlsonpdx/" rel="noopener noreferrer" target="_blank">Bo
                        Carlson</a></h2>
            </div>

            <div class="col-md-4">
                <h2><u>TA</u>: <a class="ta" href="https://www.linkedin.com/in/chatfieldcreate/" rel="noopener noreferrer" target="_blank">Josh
                        Chatfield</a></h2>
            </div>

            <div class="col-md-4">
                <h2><u>TA</u>: <a class="ta" href="https://www.linkedin.com/in/greg-kerstine/"  rel="noopener noreferrer" target="_blank">Greg
                        Kerstine</a></h2>
            </div>
        </div>

    </div>
            </div>
        )
    }
}

export default Main;