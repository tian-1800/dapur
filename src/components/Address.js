import React from "react";

const Address = ({ countryList, updateData }) => {
  const handleChange = (e) => {
    updateData(e.target.name, e.target.value);
  };

  return (
    <section className="address">
      <header>
        <h3>Address</h3>
      </header>
      <main className="grid6">
        <label htmlFor="address" className="address__address">
          Address
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onBlur={handleChange}
          />
        </label>
        <label htmlFor="country" className="address__country">
          Country
          <select name="country" onChange={handleChange} required>
            {countryList.map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="province" className="address__province">
          Province/District
          <input
            type="text"
            name="province"
            id="province"
            placeholder="Province/District"
          />
        </label>
      </main>
    </section>
  );
};

export default Address;
