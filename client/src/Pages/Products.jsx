import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/dashboard.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/prod/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("/deleteProd/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Layout>
        <SideBar />

        <div id="container">
          <table>
            <thead>
              <a href="/createP">
                <button className="button">Add New Product</button>
              </a>
              <tr>
                <th> Product Amount:</th>
                <th>Product Category:</th>
                <th>Product Name:</th>
                <th> Amount Unit:</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((record) => (
                <tr key={record.key}>
                  <td>{record.productAmount}</td>
                  <td>{record.productCategory}</td>
                  <td>{record.productName}</td>
                  <td>{record.amountUnit}</td>

                  <td>
                    <Link to={`/updateP/${record._id}`}>
                      <button className="button">Edit</button>
                    </Link>

                    <button
                      className="button"
                      onClick={(e) => handleDelete(record._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
