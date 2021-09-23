import React, { useState } from "react";

const PersonalInfo = ({ countryList, updateData }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    callingCodes: "000",
  });

  const handleName = (e) => {
    updateData(e.target.name, e.target.value);
  };

  const handleSelect = (e) => {
    const countryName = e.target.value;
    const country = countryList.find((el) => el.name === countryName);
    setSelectedCountry(country);
  };

  const handlePhone = (e) => {
    const phoneNumber = `${selectedCountry.callingCodes}${e.target.value}`;
    updateData("phoneNumber", phoneNumber);
  };

  return (
    <section className="personal">
      <header>
        <h3 className="personal__header">Create new account</h3>
      </header>
      <main className="grid6">
        <label htmlFor="last-name" className="personal__last-name">
          Last name
          <br />
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Last Name"
            required
            onBlur={handleName}
          />
        </label>
        <label htmlFor="first-name" className="personal__first-name">
          First Name
          <br />
          <input
            type="text"
            id="first-name"
            name="firstName"
            placeholder="First Name"
            required
            onBlur={handleName}
          />
        </label>
        {/* </div> */}
        <label htmlFor="phone" className="personal__phone">
          Mobile Phone Number
          <div className="mobile-phone">
            <select
              name="phone-country"
              onChange={handleSelect}
              className="mobile-phone__country"
              required
            >
              {countryList.map((country) => (
                <option value={country.name}>
                  {/* <img
                src={`../country-flags-main/png100px/${country.alpha2Code}.png`}
                alt="flag"
              /> */}
                  {country.name}
                </option>
              ))}
            </select>
            <span className="mobile-phone__code">
              +{selectedCountry.callingCodes}
            </span>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Mobile phone number"
              required
              className="mobile-phone__input"
              onBlur={handlePhone}
            />
          </div>
        </label>
      </main>
    </section>
  );
};

export default PersonalInfo;
