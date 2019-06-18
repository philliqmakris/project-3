import React from 'react';
import './style.css';

function Sidenav(...props) {
    return (
        /*         <div className="sidenav text-center width collapse">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile img" />
                    <a href="/profile">About</a>
                    <a href="/profile">Services</a>
                    <a href="/profile">Clients</a>
                    <a href="/profile">Contact</a>
                </div> */

        <div>

            <div className="row"> 
                <div className="col">       
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <div className="card card-body sidenav text-center">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile img" />
                                <a href="/profile">About</a>
                                <a href="/profile">Services</a>
                                <a href="/profile">Clients</a>
                                <a href="/profile">Contact</a>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col"> 
                    <i className="fas fa-bars" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" ></i>
                </div>
            </div>  

        </div>
    );
}

export default Sidenav;