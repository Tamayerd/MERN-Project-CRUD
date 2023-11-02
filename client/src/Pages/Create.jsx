import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [companyLegalNumber, setCompanyLegalNumber] = useState();
  const [companyName, setCompanyName] = useState();
  const [incorporationCountry, setIncorporationCountry] = useState();
  const [website, setWebsite] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createComp", {
        companyLegalNumber,
        companyName,
        incorporationCountry,
        website,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Company Legal Number:
          <input
            type="number"
            name="companyLegalNumber"
            onChange={(e) => setCompanyLegalNumber(e.target.value)}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Incorporation Country:
          <input
            type="text"
            name="incorporationCountry"
            onChange={(e) => setIncorporationCountry(e.target.value)}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Add New Firm
        </button>
      </form>
    </>
  );
}
