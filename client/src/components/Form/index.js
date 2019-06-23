import React, { Component } from 'react';
import config from "../../config/config"
import "./style.css"

class Form extends Component {

render(){
    return (
        <div className="container">
            <form>
                <div className="form-group">
                <div className="row">
                <div className="col-2 ">
                    <label htmlFor="classId">Class ID</label>
                    </div>
                    <div className="col-4 ml-0 ">
                    <input 
                      disabled={this.props.isAuth}
                     value={this.props.search}
                     onChange={this.props.handleInputChange}
                    type="input" 
                    className="form-control" 
                    id="classId"
                     placeholder="Class ID"
                      />
                </div>
                <div className="col-2">
                <button type="submit" 
                
                onClick={this.props.handleFormSubmit} 
                className="btn btn-success">
                Authenticate</button>
                </div>
               
                <div className="col-2">
                <button type="submit" 
                disabled={!this.props.isAuth}
                className="btn btn-success">
                <a href={config.serverHost + "/auth/google"}>Login</a> </button>
                </div>
                </div>
                </div>
            </form>
        </div>
    );
}
}
//<a href={(this.props.isAuth)? "/auth/google":""}>
export default Form;