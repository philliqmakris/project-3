import React from 'react';
import './style.css';

function ProfileCard(props) {
    return (
        <>
            {props.results.map(result => (
                <div className="d-flex flex-column p-1">
                    <div className="card ml-1 mr-1 text-center bg-light">
                        <div className="card-body" >
                            <img className="mb-2" src={result.urlImage} alt={result.name} />
                            <div className="card-header">{result.name}</div>
                            <ul className="list-group list-group-flush">
                                {/* <li className="list-group-item">{result.description}</li> */}
                                <li className="list-group-item">
                                    <a className="icons mb-2" href={result.urlGithub} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a className="icons mb-2" href={result.urlLinkedIn} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a className="icons mb-2" href="https://myvcs.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-video"></i>
                                    </a>
                                    <a className="icons mb-2" href="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-rocketchat"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default ProfileCard;

