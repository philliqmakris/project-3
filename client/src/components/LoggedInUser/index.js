import React from 'react';
import './style.css';

function LoggedInUser(props) {
    return (
        <>
            {props.loggedUserDetails.map(result => (
                <div className="d-flex flex-column p-1" key={result._id}>
                    <div className="card ml-1 mr-1 text-center bg-light">
                        <div className="card-body" >
                            <img className="mb-2" style={{"height":"80px","width":"80px"}} src={result.photo} alt={result.name} />
                            <div className="card-header text-center" style={{"fontSize":"15px","padding":"5px"}}>{result.firstName.toUpperCase()} {result.lastName.toUpperCase()}
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