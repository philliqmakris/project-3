import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Campsite</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Profiles" className={window.location.pathname === "/Profiles" ? "nav-link active" : "nav-link"}>
                                Profiles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Register" className={window.location.pathname === "/Register" ? "nav-link active" : "nav-link"}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;