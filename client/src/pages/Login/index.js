import React, { Component } from "react";
import Form from "../../components/Form";
import config from "../../config/config";
import "./style.css";

class Login extends Component {

    state={
        search:"",
        classId:"",
        isAuth:false,
        classIdNotSucess:false
    }

    handleInputChange = event => {
        console.log('handleInputChange', event.target.value)
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
await this.setState({ classId:this.state.search });
        if(config.batchId.includes(this.state.classId.trim())){ 
            await this.setState({ isAuth:true,
                classIdNotSucess:false });
                    {window.location=config.serverHost + "/auth/google"}
        } else{
            await this.setState({ isAuth:false,
                classIdNotSucess:true });
        }
    }

    render() {
        return (
            //Login page components go here
            <div className="jumbotron">
              <div className="headerLogin" >
                <h1 className="display-6  text-center"> Enter Class ID</h1>
                </div> 
                <Form handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      isAuth={this.state.isAuth}
                      classIdNotSucess={this.state.classIdNotSucess}
                      />
            </div>
        );
    }
}

export default Login;