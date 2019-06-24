import React, { Component } from "react";
import Form from "../../components/Form/index";
import config from "../../config/config"
import "./style.css"


class Login extends Component {

    state={
        search:"",
        classId:"",
        isAuth:false
    }

    handleInputChange = event => {
        console.log('handleInputChange',event.target.value)
        this.setState({ search: event.target.value });
      };
    
    handleFormSubmit=async (event)=>{
        event.preventDefault();
await this.setState({ classId:this.state.search });
        if(config.batchId.includes(this.state.classId.trim())){ 
            await this.setState({ isAuth:true });
        } else{
            await this.setState({ isAuth:false });
        }
    }

    render() {
        return (
            //Login page components go here
            <div className="jumbotron">
              <div className="headerLogin" >
                <h1 className="display-6  text-center">Campsite Authentication</h1>
                </div> 
                <Form handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      isAuth={this.state.isAuth}
                      />
            </div>
        );
    }
}

export default Login;