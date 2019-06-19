import React, { Component } from 'react';
import "./style.css";

function SavedResults (props){
  console.log('from DB', props.results)
  
  return (
    <div className="box container">
   
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result._id} 
        className="list-group-item collection">
        
         <a href={result.urlGithub}  target="_blank" >
         <button type="submit" className="btn btn-info mr-2 float-right">
         view
        </button>
        </a>

          <a href={result.urlGithub}>
          <img alt={result.name}
          src={result.urlImage}
          className="img-fluid rounded float-left mr-2" />
          </a>

         <p > <strong><i>
        {result.name}</i>
          {result.description}
         {result.batchId}
           </strong></p>
        </li>
      ))}
    </ul>
    </div>
  );
}
// }
export default SavedResults;
