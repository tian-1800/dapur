/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

const Modal = ({ data, modalDisplayed, setModalDisplayed }) => {
  const toggleDisplayed = () => setModalDisplayed(!modalDisplayed);
  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    country,
    province,
    subscriptionSms,
    subscriptionEmail,
    subscriptionMailing,
  } = data;
  if (modalDisplayed)
    return (
      <div className="modal">
        <div className="modal__inner-container">
          <p>
            Full name: {firstName} {lastName}
          </p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Address: {address}</p>
          <p>Province: {province}</p>
          <p>Country: {country}</p>
          <p>
            Subscription: {subscriptionSms && "SMS & Mobile Call, "}
            {subscriptionEmail && "Email, "} {subscriptionMailing && "Mailing"}
          </p>
          <p>{subscriptionEmail}</p>
          <button
            type="button"
            onClick={toggleDisplayed}
            className="modal__close-btn"
          >
            Close
          </button>
        </div>
      </div>
    );
  return false;
};

export default Modal;
