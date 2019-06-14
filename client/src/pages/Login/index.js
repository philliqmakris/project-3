import React, { Component } from "react";
import Modal from '../../components/Modal/Modal';

class Main extends Component{

    componentDidMount(){
        /* Hook for initializing stuff */
    }
    
    render(){
        return (
            <div>
                    <Modal />
                {/* Login page components go here */}
            </div>
        )
    }
}

export default Main;