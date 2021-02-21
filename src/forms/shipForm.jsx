import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

const ShipForm = ({ onSubmit, error }) => {
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

  return <p>Ship Form</p>;
};

export default ShipForm;
