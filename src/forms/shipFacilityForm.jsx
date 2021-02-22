import React from "react";
import Joi from "joi-browser";
import useForm from "./../ui/forms/useForm";

const ShipFacilityForm = ({ onSubmit }) => {
  const facilitySchema = {
    casino: Joi.boolean().label("Casino"),
    shops: Joi.boolean().label("Shops"),
    spa: Joi.boolean().label("spa"),
    fitnessCenter: Joi.boolean().label("Fintness center"),
    library: Joi.boolean().label("Library"),
    theatre: Joi.boolean().label("Theatre"),
    cinema: Joi.boolean().label("Cinema"),
    swimmingPool: Joi.boolean().label("Swimming Pool"),
    hotTub: Joi.boolean().label("Hot Tub"),
    restaurant: Joi.boolean().label("Restaurant"),
    lounges: Joi.boolean().label("Lounges"),
    gym: Joi.boolean().label("Gym"),
    bar: Joi.boolean().label("Bar"),
    wifi: Joi.boolean().label("WiFi"),
    kidsPlayRoom: Joi.boolean().label("Kids Play Room"),
  };

  const { data, renderCheckBox, renderButton, validateSubmit } = useForm({
    schema: facilitySchema,
  });

  const handleSubmit = (e) => {
    const res = {};
    Object.keys(facilitySchema).map((f) => {
      res[f] = false;
    });
    e.preventDefault();
    if (validateSubmit(e)) {
      const value = { ...res, ...data };
      onSubmit(e, value);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="border px-2 mb-2">
          <h5 className="text-center">Ship Facilities</h5>
          <div className="row">
            {Object.keys(facilitySchema).map((f) => {
              return (
                <div className="col-6 col-md-2" key={f}>
                  {renderCheckBox(f, facilitySchema[f].describe().label)}
                </div>
              );
            })}
          </div>
        </div>
        {renderButton("Create Ship")}
      </form>
    </React.Fragment>
  );
};

export default ShipFacilityForm;
