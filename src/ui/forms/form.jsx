import React, { useState } from "react";
import Options from "./Option";
import Input from "./input";
import Joi from "joi-browser";

const Form = ({ formData, shema, onSubmit }) => {
  const [values, setValues] = useState({});
  const [errors, setError] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    const faults = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) faults[input.name] = errorMessage;
    else delete faults[input.name];
    setError(faults);

    const fdata = { ...values };
    fdata[input.name] = input.value;
    setValues(fdata);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaP = { [name]: shema[name] };
    const { error } = Joi.validate(obj, schemaP);
    if (!error) return null;
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(values, shema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      console.log("Errors", errors);
    }
    onSubmit(values);
    // todo - send data somewhere
  };

  return (
    <form onSubmit={onFormSubmit} autoComplete="off">
      {formData.fields.map((field) => {
        switch (field.component) {
          case "options":
            return (
              <Options
                key={field.name}
                field={field}
                fieldChanged={handleChange}
                value={values[field.name]}
              />
            );

          default:
            return (
              <Input
                key={field.name}
                type={field.type}
                name={field.name}
                value={values[field.name] || ""}
                label={field.label}
                onChange={handleChange}
                error={errors[field.name]}
              />
            );
        }
      })}
      <button disabled={validate()} className="btn btn-sm btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
{
  /* <Field
                key={field.name}
                field={field}
                type={field.type}
                fieldChanged={fieldChanged}
                value={data[field.name]}
              /> */
}
