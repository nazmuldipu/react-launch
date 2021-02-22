import Joi from "joi-browser";
import React, { useState } from "react";

import useForm from "./../ui/forms/useForm";
import ShipFacilityForm from "./shipFacilityForm";

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
    discount: Joi.number().required().label("Discount"),
    hotelswaveCommission: Joi.number()
      .required()
      .label("Hotelswave Commission"),
    priority: Joi.number().required().label("Priority"),
    ac: Joi.boolean(),
    containCabin: Joi.boolean(),
    online: Joi.boolean(),
  };

  const {
    data,
    renderInput,
    renderSelect,
    renderCheckBox,
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

  const handleSubmit = (e, facilities) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      const value = { ...data, shipFacilities: { ...facilities } };
      onSubmit(value);
    }
  };

  const onSubmitFacility = (e, facilities) => {
    handleSubmit(e, facilities);
  };

  return (
    <div className="bg-light pb-2 mb-4">
      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form>
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
            <div className="col-md-4">
              {renderInput("floor", "No of floon in Ship", "number")}
            </div>
            <div className="col-md-4">
              {renderInput("size", "Ship size in sqm", "number")}
            </div>
            <div className="col-md-4">
              {renderInput("phoneNumber", "Ship contact person phone number")}
            </div>
            <div className="col-md-4">
              {renderInput("discount", "Discount", "number")}
            </div>
            <div className="col-md-4">
              {renderInput(
                "hotelswaveCommission",
                "Hotelswave Commission",
                "number"
              )}
            </div>
            <div className="col-md-4">
              {renderInput("priority", "Priority", "number")}
            </div>
            <div className="col-12">
              {renderInput("kidsPolicy", "Ship kids policy")}
            </div>
            <div className="col-12">
              {renderInput("description", "Ship description")}
            </div>

            <div className="col-4 col-md-2">{renderCheckBox("ac", "Ac")}</div>
            <div className="col-4 col-md-2">
              {renderCheckBox("containCabin", "Contain Cabin")}
            </div>
            <div className="col-4 col-md-2">
              {renderCheckBox("online", "Online")}
            </div>
          </div>
        </form>
        <ShipFacilityForm onSubmit={onSubmitFacility} error={error} />
      </div>
    </div>
  );
};

export default ShipForm;
