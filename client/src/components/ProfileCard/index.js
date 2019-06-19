import React from 'react';
import './style.css';

function ProfileCard() {
    return (
         <div className="d-flex flex-column p-1" id="profCards">
            <div className="card ml-1 mr-1 text-center bg-light">
                <div className="card-body">
                    <img className="mb-2" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card Img" />
                    <div className="card-header">Firstname <br /> Lastname</div>
                    <br />
                    <ul className="list-group list-group-flush">
                        <button className="profileButton"><li className="list-group-item">Profile</li></button>
                        <button className="githubButton"><li className="list-group-item">Github</li></button>
                        <button className="linkdeinButton"><li className="list-group-item">LinkedIn</li></button>
                    </ul>
                </div>
            </div>
            <br />
        </div>
            );
        }
        
export default ProfileCard;