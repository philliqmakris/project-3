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
                <div className = "row">
                    <div className="col">
                        <Sidenav />  
                    </div>
                    <div className="col">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;