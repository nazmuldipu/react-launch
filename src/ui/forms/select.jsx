import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="col-form-label-sm p-0 mb-1" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control form-control-sm"
      >
        <option value="">Select </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Select;
