import Joi from "joi-browser";
import React from "react";

import useForm from "./../ui/forms/useForm";

const ShipForm = ({ onSubmit, error }) => {
  const schema = {
    shipNumber: Joi.number().required().label("Ship Number"),
    name: Joi.string().required().label("Ship Name"),
    quality: Joi.string().required().label("Ship Quality"),
    shipName: Joi.string().required().label("Ship"),
    route: Joi.string().required().label("Route"),
    startingPoint: Joi.string().required().label("Starting Point"),
    droppingPoint: Joi.string().required().label("Starting Point"),
    startTime: Joi.string().required().label("Ship Start Time"),
    floor: Joi.number().required().label("Numbe of floor in ship"),
    size: Joi.number().required().label("Ship size in sqm"),
    kidsPolicy: Joi.string().required().label("Ship kids poilicy"),
    phoneNumber: Joi.string()
      .required()
      .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
      .label("Ship contact person phone number"),
    description: Joi.string().required().label("Ship kids poilicy"),
  };

  const {
    data,
    renderInput,
    renderSelect,
    renderButton,
    validateSubmit,
  } = useForm({
    schema,
  });

  const shipQuality = [
    { id: "PREMIUM", name: "Premium" },
    { id: "DELUX", name: "Delux" },
    { id: "ECONOMY", name: "Economy" },
  ];

  const shipName = [
    { id: "SUKANTO_BABU", name: "Sukanto Babu" },
    { id: "BAY_CRUISE", name: "Bay Cruise" },
    { id: "OTHER", name: "Other" },
  ];

  const shipJetty = [
    { id: "CHITTAGONG", name: "Chittagong" },
    { id: "COXS_BAZAR", name: "Cox's Bazar" },
    { id: "SAINT_MARTIN", name: "Saint Martin" },
    { id: "TEKNAF", name: "Teknaf" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-light pb-3">
      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {renderInput("shipNumber", "Ship Number", "number")}
            </div>
            <div className="col-md-6">{renderInput("name", "Ship Name")}</div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {renderSelect("quality", "Ship Quality", shipQuality)}
            </div>
            <div className="col-md-4">
              {renderSelect("shipName", "Ship", shipName)}
            </div>
            <div className="col-md-4">{renderInput("route", "Ship Route")}</div>
            <div className="col-md-4">
              {renderSelect("startingPoint", "Ship Starting Point", shipJetty)}
            </div>
            <div className="col-md-4">
              {renderSelect("droppingPoint", "Ship Dropping Point", shipJetty)}
            </div>
            <div className="col-md-4">
              {renderInput("startTime", "Ship Start Time")}
            </div>
          </div>
          {renderButton("Save")}
        </form>
      </div>
    </div>
  );
};

export default ShipForm;
