import React from "react";

const ToggleButton = ({ name, label, handleCheckBox }) => (
  <div>
    <p>{label}</p>
    <label htmlFor={name} className="switch">
      <input
        type="checkbox"
        className="switch__input"
        id={name}
        name={name}
        onBlur={handleCheckBox}
      />
      <span className="switch__slider" />
    </label>
  </div>
);

export default ToggleButton;
