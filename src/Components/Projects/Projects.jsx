import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export default function Projects() {
  return (
    <div className="card m-5" style={{width: '20rem'}}> 
      <div className="card-body">
        <h5 className="card-title">Student Affairs</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Web Page to manage student Affaris</h6>
        <p className="card-text">Static Website for Student Affairs in Cairo University. this Web page is only front end. it was developed using HTML,CSS and JavaScript. </p>
        <a href="http://beeko.me/Student-Affairs/" className="card-link" target="_blank" rel="noopener noreferrer">Web link</a>
      </div>
  </div> 
  )
}
