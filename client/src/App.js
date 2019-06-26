import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar/index.js';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import './App.css';

class App extends Component {

  state={
    isAuthenticate:false
  }
  isAuthenticated=async(event)=>{
  console.log('app.js',event)
    this.setState({
      isAuthenticate:event
    })
  }

  render(){
  return (
    <Router>
      <>
        <Navbar  isAuthenticate={this.state.isAuthenticate} />
        <Wrapper>
        <Route exact path="/" component={Main} />
       
        <Route exact path="/login" component={Login} />
        
        
        <Route 
        path="/profiles/*" 
        render={(props) => <Profile {...props}  isAuthenticate={this.state.isAuthenticate}
        isAuthenticated={this.isAuthenticated} />}
        />

        <Route exact path="/register" component={Register} />
        </Wrapper>
        <Footer />
      </>
    </Router>
  );
}
}

export default App;