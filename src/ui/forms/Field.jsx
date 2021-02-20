import React from "react";

const Field = ({ field, fieldChanged, type = "text", value }) => {
  return (
    <div className="form-group">
      <label htmlFor={field.name}>{field.label}</label>
      <input
        type={type}
        id={field.name}
        name={field.label}
        value={value}
        className="form-control"
        onChange={(e) => fieldChanged(field.name, e.target.value)}
      />
    </div>
  );
};

export default Field;
