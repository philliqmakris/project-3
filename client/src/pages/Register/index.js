import React, { Component } from "react";
import "./style.css";


function Form() {
    return (
        
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Class ID</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Class ID" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
}

function Collapse() {
    return (
        <div className = "text-center">
            <p>
              <button className="btn btn-primary" id="howToButton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                How to Register
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-left">
                  <ul>
                      <li>You must be a current or previous University of Oregon fullstack web-development bootcamp student to register for Campsite.</li>
                      <li>To register, you must have your class ID, and register with the same name you used to register for the Bootcamp</li>
                  </ul>
              </div>
            </div>
        </div>
    );
}

class Register extends Component {

    componentDidMount() {
        /* Hook for initializing stuff */
    }

    render() {
        return (
            //Register page components go here
            <div className="reg">
                <h1 className="regTitle">Campsite Registration</h1>
                <Collapse />
                <Form />
            </div>
        );
    }
}

export default Register;