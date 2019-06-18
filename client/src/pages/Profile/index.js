import React, { Component } from "react";
import Sidenav from '../../components/Sidenav';
import ProfileCard from '../../components/ProfileCard';

class Profile extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                {/* Profile page components go here */}
                <div className = "row">
                    <div className="col-sm-2">
                        <div className="container mt-6">
                            <Sidenav />   
                        </div>  
                    </div>
                    <div className="col-sm-10 mt-5">
                        <div className="container">
                            <div className="row mt-4">
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
            </div>
        )
    }
}

export default Profile;