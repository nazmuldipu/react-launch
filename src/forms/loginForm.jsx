import React from "react";
import { Link } from "react-router-dom";
import Form from "../ui/forms/form";
import Joi from "joi-browser";

const LoginForm = ({ onSubmit, error }) => {
  const formData = {
    fields: [
      {
        label: "Phone number",
        name: "username",
        schema: Joi.string()
          .required()
          .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
          .label("Phone number"),
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        schema: Joi.string().required().label("Password"),
      },
    ],
  };

  function handleSubmit(event) {
    onSubmit(event);
  }

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
        <Form formData={formData} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginForm;
