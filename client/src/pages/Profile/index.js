import React, { Component } from "react";
import Sidenav from '../../components/Sidenav';
import ProfileCard from '../../components/ProfileCard';
import './style.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');
 
class Profile extends Component{

    componentDidMount() {
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                {/* Profile page components go here */}
                
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column align-self-center mr-5">
                        <Sidenav />   
                    </div>
                    <div className="d-flex flex-column mt-5">
                        
                        <div className="row text-center mt-5" id="cardDiv">
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                        </div>
                        
                    </div>
                </div>        
                    
                
            </div>
        )
    }
}

export default Profile;