import React, { useState, useEffect } from "react";
import "./App.css";

import PersonalInfo from "./components/PersonalInfo";
import Address from "./components/Address";
// import Contacts from "./components/Contacts";
import Terms from "./components/Terms";
import SubmitButton from "./components/SubmitButton";
import Modal from "./components/Modal";
import API_KEY from "./credential/apiKey";

function App() {
  const [data, setData] = useState({});
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [countryList, setCountryList] = useState([{ name: "loading country" }]);

  const fetchCountry = async () => {
    const url = `http://api.countrylayer.comi/v2/all?access_key=${API_KEY}`;
    const answer = await fetch(url, { mode: "cors" });
    const list = await answer.json();
    const result = list.map((el) => {
      const newObj = {};
      newObj.name = el.name;
      newObj.callingCodes = el.callingCodes;
      newObj.flag = el.flag;
      newObj.alpha2Code = el.alpha2Code;
      return newObj;
    });
    return result;
  };

  useEffect(async () => {
    const list = await fetchCountry();
    setCountryList(list);
  }, []);

  const updateData = (name, value) => {
    setData({ ...data, ...{ [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setModalDisplayed(false);
    setModalDisplayed(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <PersonalInfo countryList={countryList} updateData={updateData} />
        <Address countryList={countryList} updateData={updateData} />
        {/* <Contacts data={data} setData={setData} /> */}
        <Terms updateData={updateData} />
        <SubmitButton />
        <Modal
          modalDisplayed={modalDisplayed}
          setModalDisplayed={setModalDisplayed}
          data={data}
        />
      </form>
    </div>
  );
}

export default App;
