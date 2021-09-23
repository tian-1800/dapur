import React from "react";
import ToggleButton from "./ToggleButton";

const Term = ({ updateData }) => {
  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    updateData(name, checked);
  };

  return (
    <section className="terms">
      <header>
        <h3>Standard Privacy Notice</h3>
      </header>
      <main>
        <p className="terms__paragraph">
          I warrant that the above information are true and correct
        </p>
        <p className="terms__paragraph">
          I want to receive information from L&apos;OCCITAINE
        </p>
        <div className="terms__btn-container">
          <ToggleButton
            name="subscriptionSms"
            label="SMS & Mobile Call"
            handleCheckBox={handleCheckBox}
          />
          <ToggleButton
            name="subscriptionEmail"
            label="Email"
            handleCheckBox={handleCheckBox}
          />
          <ToggleButton
            name="subscriptionMailing"
            label="Mailing"
            handleCheckBox={handleCheckBox}
          />
        </div>
        <p className="terms__tooltip">Subscribe to SMS & mobile call.</p>
      </main>
    </section>
  );
};

export default Term;
