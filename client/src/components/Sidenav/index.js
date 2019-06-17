import React from 'react';
import './style.css';

function Sidenav(...props){
    return (
        <div className="sidenav">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile img" />
            <a href="/profile">About</a>
            <a href="/profile">Services</a>
            <a href="/profile">Clients</a>
            <a href="/profile">Contact</a>
        </div>
    );
}

export default Sidenav;