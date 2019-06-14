import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/Profiles" component={Main} />
        <Route exact path="/Login" component={Main} />
        <Route exact path="/Register" component={Main} />
      </div>
    </Router>
  );
}

export default App;
