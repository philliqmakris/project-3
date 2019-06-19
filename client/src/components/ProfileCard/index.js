import React from 'react';
import './style.css';

function ProfileCard(props) {
    return (
        <>
        
         <div className="d-flex flex-column p-1">
            <div className="card ml-1 mr-1 text-center bg-light">
                <div className="card-body">
                    <img className="mb-2" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card Img" />
                    <div className="card-header">firstName lastName</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Profile</li>
                        <li className="list-group-item">Github</li>
                        <li className="list-group-item">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
            );
        }
        
export default ProfileCard;