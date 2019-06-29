import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
    state = {
    }
    render() {
        
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark" id="nav-banner">
                    <a className="navbar-brand" href="/">
                        
                        <img className="logo-img" src="https://commencement.uoregon.edu/sites/commencement2.uoregon.edu/files/guidebook-beaduck.png" alt="banner" />
                    </a>
          
                    <div className="col-md-10">
                    <a className="navbar-brand" href="/">Campsite</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="col">
                        <ul className="navbar-nav">
                            {(this.props.isAuthenticate)?
                            <li className="nav-item ">

                                    <a className= {window.location.pathname === "/auth/logout" ? "nav-link active" : "nav-link" }
                                        href={process.env.REACT_APP_API_URL + "/auth/logout"}>
                                        Log Out
                                    </a> 
                                    </li>
:
                                    <li className="nav-item">
                                    <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                                    Login
                               </Link>
                                
                            </li>
                            
                            }
                        </ul>
                        </div>
                        </div>
                                                
              
                </nav>
            </>
        );
    }
}

export default Navbar;