import React, { Component } from "react";
import Modal from '../../components/Modal';

class Main extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                <Modal />
                {/* Main page components go here */}
            </div>
        )
    }
}

export default Main;