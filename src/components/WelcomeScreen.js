import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>
          Welcome to our <br />
          <span className="form-text">form</span>
        </h1>
        <br /> 
        <p>
          This is a description of the <br />
          form
        </p>
        <div className="button-row">
          <button className="start-button" onClick={onStart}>
            Start
          </button>
          <span className="press-enter">press Enter ⏎</span>
        </div>
      </div>
      <div className="color-bars">
        <div className="color-bar bar-1"></div>
        <div className="color-bar bar-2"></div>
        <div className="color-bar bar-3"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
