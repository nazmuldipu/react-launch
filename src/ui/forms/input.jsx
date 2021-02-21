import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="col-form-label-sm p-0 mb-1" htmlFor={name} >{label}</label>
      <input {...rest} name={name} id={name} className="form-control form-control-sm" />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;
