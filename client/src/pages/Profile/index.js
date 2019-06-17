import React, { Component } from "react";
import Sidenav from '../../components/Sidenav';

class Profile extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                {/* Profile page components go here */}
                <Sidenav />
            </div>
        )
    }
}

export default Profile;