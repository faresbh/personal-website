import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.appStoreURL} target="blank">
          <p className="card-header-title">{props.name}</p>
        </a>
      </div>
      <div className="card-image">
        <figure className="image">
          <img width="1000" height="420" src={props.icon} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="heading">Description</h1>
        <div className="content">
          <p>{props.description}</p>
        </div>
        <div>
        <a href={props.appStoreURL} target="blank">
          App Store Link
        </a>
        </div>
        <li><Link to={'/privacypolicy'} className="nav-link">Privacy Policy</Link></li>
        <li><Link to={'/termsandconditions'} className="nav-link">Terms And Conditions</Link></li>
      </div>
    </div>
  );
}

export default App;
