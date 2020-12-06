import React from "react";

function App(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.appStoreURL} target="blank">
          <p className="card-header-title">{props.name}</p>
        </a>
        <a
          href={props.privacyPolicy}
          target="blank"
          className="card-header-icon"
          aria-label="Privacy Policy"
        >
          <span className="icon">
            <i className="fas fa-2x fa-user-secret"></i>
          </span>
        </a>
        <a
          href={props.termsAndConditions}
          target="blank"
          className="card-header-icon"
          aria-label="Terms and Conditions"
        >
          <span className="icon">
            <i className="fas fa-2x fa-file-contract"></i>
          </span>
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
        <a href={props.appStoreURL} target="blank">
          App Store Link
        </a>
      </div>
    </div>
  );
}

export default App;
