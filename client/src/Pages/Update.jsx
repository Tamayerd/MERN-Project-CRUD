import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
export default function Update() {
const {id} = useParams()
  const [companyLegalNumber, setCompanyLegalNumber] = useState();
  const [companyName, setCompanyName] = useState();
  const [incorporationCountry, setIncorporationCountry] = useState();
  const [website, setWebsite] = useState();
  const navigate = useNavigate();

useEffect (() => {
      
      axios
        .get("http://localhost:4000/getComp/"+id, {
          companyLegalNumber,
          companyName,
          incorporationCountry,
          website,
        })
        .then((result) => {
          console.log(result);
          setCompanyLegalNumber(result.data.companyLegalNumber);
          setCompanyName(result.data.companyName);
          setIncorporationCountry(result.data.incorporationCountry);
          setWebsite(result.data.website);
        })
        .catch((err) => console.log(err));
    },[])
    const Update = (e) => {
      e.preventDefault();
      axios
        .put("http://localhost:4000/updateComp/"+id, {
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
    }

  return (
    <>
      <form onSubmit={Update}>
        <label>
          Company Legal Number:
          <input
            type="text"
            name="companyLegalNumber"
            value={companyLegalNumber}
            onChange={(e) => setCompanyLegalNumber(e.target.value)}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Incorporation Country:
          <input
            type="text"
            name="incorporationCountry"
            value={incorporationCountry}
            onChange={(e) => setIncorporationCountry(e.target.value)}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Update
        </button>
      </form>
    </>
  );
}
