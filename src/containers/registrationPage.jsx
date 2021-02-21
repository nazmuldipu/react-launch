import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import userService from "../services/userService";
import LoginContent from "./../components/loginContent";
import RegistrationForm from "./../forms/registrationForm";
import Loading from "./../ui/loading";

const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    try {
      setErrorMessage("");
      setLoading(true);
      const resp = await userService.register(event);
      setLoading(false);
      console.log(resp);
      useHistory.push("/login");
    } catch (ex) {
      setLoading(false);
      if (!ex.response) {
        setErrorMessage("Network connection error");
      } else if (ex.response && ex.response.status === 400) {
        setErrorMessage(ex.response.data.error_description);
      } else {
        setErrorMessage(
          ex.response.status + ": " + ex.response.data.error_description
        );
      }
    }
  }

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
              {loading ? (
                <Loading />
              ) : (
                <RegistrationForm
                  onSubmit={handleSubmit}
                  error={errorMessage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
