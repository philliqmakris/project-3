import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar/index.js';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Main} />
        <Route exact path="/profiles" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        </Wrapper>
        <Footer />
      </>
    </Router>
  );
}

export default App;