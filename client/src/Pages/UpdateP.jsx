import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Update() {
  const { id } = useParams();
  const [productAmount, setProductAmount] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productName, setProductName] = useState();
  const [amountUnit, setAmountUnit] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/getComp/" + id, {
        productAmount,
        productCategory,
        productName,
        amountUnit,
      })
      .then((result) => {
        console.log(result);
        setProductAmount(result.data.productAmount);
        setProductCategory(result.data.productCategory);
        setProductName(result.data.productName);
        setAmountUnit(result.data.amountUnit);
      })
      .catch((err) => console.log(err));
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/updateComp/" + id, {
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
      <form onSubmit={Update}>
        <label>
          Product Amount:
          <input
            type="text"
            name="productAmount"
            value={productAmount}
            onChange={(e) => setProductAmount(e.target.value)}
          />
        </label>
        <label>
          Product Category:
          <input
            type="text"
            name="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Amount Unit:
          <input
            type="text"
            name="amountUnit"
            value={amountUnit}
            onChange={(e) => setAmountUnit(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Update
        </button>
      </form>
    </>
  );
}
