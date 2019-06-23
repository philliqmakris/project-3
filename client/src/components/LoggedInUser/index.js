import React from 'react';
import './style.css';

function LoggedInUser(props) {
    return (
        <>
            {props.loggedUserDetails.map(result => (
                <div className="d-flex flex-column p-1">
                    <div className="card ml-1 mr-1 text-center bg-light">
                        <div className="card-body" >
                            <img className="mb-2" src={result.photo} alt={result.name} />
                            <div className="card-header">{result.firstName.toUpperCase()} {result.lastName.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default LoggedInUser;