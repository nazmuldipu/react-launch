import React from "react";

function FormInput({ name, label, type = "text", error, ...rest }) {
  // const [inputType] = useState(props.type);
  function handleChange(event) {
    const value = {};
    value[name] = event.target.value;
    if (rest.onChange) rest.onChange(value);
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        {...rest}
        className="form-control"
        onChange={handleChange}
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
}
export default FormInput;
