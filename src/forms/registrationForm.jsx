import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";

import useForm from "./../ui/forms/useForm";

const RegistrationForm = ({ onSubmit, error }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().label("Email"),
    username: Joi.string().required().label("Phone Number"),
    password: Joi.string().required().label("Password"),
  };

  const { data, renderInput, renderButton, validateSubmit } = useForm({
    schema,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-light pb-3">
      <div className="d-flex btn-group">
        <Link className="btn btn-secondary flex-fill" to="/login">
          Sign in
        </Link>
        <Link className="btn btn-primary flex-fill" to="/register">
          Register
        </Link>
      </div>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("name", "Name")}
          {renderInput("username", "Phone Number")}
          {renderInput("password", "Password", "password")}
          {renderButton("Register")}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
