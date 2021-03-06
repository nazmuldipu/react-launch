import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";

import useForm from "./../ui/forms/useForm";

const LoginForm = ({ onSubmit, error }) => {
  const schema = {
    username: Joi.string()
      .required()
      .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
      .label("Phone number"),
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
        <Link className="btn btn-primary flex-fill" to="/login">
          Sign in
        </Link>
        <Link className="btn btn-secondary flex-fill" to="/register">
          Register
        </Link>
      </div>

      {/* <h3 className="text-center">Sign in</h3> */}
      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("username", "Phone Number")}
          {renderInput("password", "Password", "password")}
          {renderButton("Register")}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
