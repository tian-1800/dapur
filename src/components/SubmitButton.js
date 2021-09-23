import React, { useState } from "react";

const SubmitButton = () => {
  const [buttonEnable, setButtonEnable] = useState(false);

  const handleChange = (e) => {
    setButtonEnable(e.target.checked);
  };
  return (
    <section className="submit">
      <label htmlFor="user-agreement" className="submit__check-box">
        <input
          type="checkbox"
          id="user-agreement"
          name="user-agreement"
          onChange={handleChange}
        />
        <span>I have read and understood the above terms and conditions</span>
      </label>
      <button type="submit" className="submit__btn" disabled={!buttonEnable}>
        Create Customer
      </button>
    </section>
  );
};

export default SubmitButton;
