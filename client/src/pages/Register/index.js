import React, { Component } from "react";

function Form() {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Class ID</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Class ID" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

function Collapse() {
    return (
        <div class = "text-center">
            <p>
              <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                How to Register
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body text-left">
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
            <div className="jumbotron">
                <h1 class="display-6 text-center">Campsite Registration</h1>
                <Collapse />
                <Form />
            </div>
        );
    }
}

export default Register;