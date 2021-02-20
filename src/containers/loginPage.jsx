import React from "react";
import LoginForm from "../forms/loginForm";
import LoginContent from "./../components/loginContent";

const LoginPage = ({ location }) => {
  const pathName = location.pathname;
  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="offset-md-1"></div>
        <div className="col-md-10 mt-md-5">
          <div className="row">
            <div className="col-md-7">
              <LoginContent />
            </div>
            <div className="col-md-5">
              <LoginForm path={pathName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
