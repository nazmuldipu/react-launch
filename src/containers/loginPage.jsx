import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../forms/loginForm";
import LoginContent from "./../components/loginContent";
import auth from "../services/authServices";
import Loading from "./../ui/loading";

const LoginPage = ({ location }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    const path = location.state ? location.state.from.pathname : "/dashboard";
    try {
      setErrorMessage("");
      setLoading(true);
      await auth.login(event.username, event.password);
      setLoading(false);
      history.push(path);
    } catch (ex) {
      setLoading(false);
      const { data } = ex.response;

      if (ex.response && ex.response.status === 400) {
        setErrorMessage(data.error_description);
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
                <LoginForm onSubmit={handleSubmit} error={errorMessage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
