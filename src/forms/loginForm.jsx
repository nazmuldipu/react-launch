import React from "react";
import { Link } from "react-router-dom";
import Form from "../ui/forms/form";
import Joi from "joi-browser";
import auth from "../services/authServices";

// import { renderInput } from "../ui/forms/form";

const LoginForm = ({ path }) => {
  const formData = {
    fields: [
      {
        label: "Phone number",
        name: "phonenumber",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
      },
    ],
  };

  const shema = {
    phonenumber: Joi.string()
      .required()
      .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
      .label("Phone number"),
    password: Joi.string().required().label("Password"),
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = this.validate();
  //   this.setState({ errors: errors || {} });
  //   if (errors) return;

  //   this.doSubmit();
  // };
  

  async function handleSubmit(event) {
    console.log(event);
    await auth.login(event.phonenumber, event.password);
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
        <Form formData={formData} shema={shema} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginForm;
