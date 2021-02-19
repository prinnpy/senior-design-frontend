import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import codeBg from "../static/codeBg.jpg";
import "./Auth.css";

const Auth = ({ uiConfig, firebaseAuth }) => {
  return (
    <div className="background" align="center">
      <div className="box" align="center">
        <h1 className="brand">🚀 API Builder</h1>
        <p className="text">
          Login using social media to get quick access or signin with email
        </p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>
    </div>
  );
};

export default Auth;
