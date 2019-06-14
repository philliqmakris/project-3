import React, { Component } from "react";
import Navbar from '../../components/Navbar';

class Main extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                {/* Main page components go here */}
                <Navbar />
            </div>
        )
    }
}

export default Main;