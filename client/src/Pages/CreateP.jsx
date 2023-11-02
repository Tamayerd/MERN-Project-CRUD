
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateP() {
  const [productAmount, setProductAmount] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productName, setProductName] = useState();
  const [amountUnit, setAmountUnit] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createProd", {
        productAmount,
        productCategory,
        productName,
        amountUnit,
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
          Product Amount:
          <input
            type="number"
            name="productAmount"
            onChange={(e) => setProductAmount(e.target.value)}
          />
        </label>
        <label>
          Product Category:
          <input
            type="text"
            name="productCategory"
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Amount Unit:
          <input
            type="text"
            name="amountUnit"
            onChange={(e) => setAmountUnit(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Add New Product
        </button>
      </form>
    </>
  );
}
