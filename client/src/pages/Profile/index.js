import React, { Component } from "react";
import Sidenav from '../../components/sideNav';
import ProfileCard from '../../components/ProfileCard';
import './style.css';

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