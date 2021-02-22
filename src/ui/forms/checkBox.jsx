import React from "react";

const CheckBox = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group form-check">
      <input type="checkbox" {...rest} name={name} id={name} className="form-check-input" />
      <label className="col-form-label-sm p-0 mb-1" htmlFor={name} >{label}</label>
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default CheckBox;

