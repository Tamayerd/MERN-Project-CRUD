import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import PrivateRoute from "./Layout/PrivateRoute";
import AllComp from "./Pages/AllComp";
import Products from "./Pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import CreateP from "./Pages/CreateP";
import UpdateP from "./Pages/Update"

function App() {
const [token] = useToken();
console.log(token.token, "token")
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                !token.token ? (
                  <Link to={"/register"}></Link>
                ) : (
                  <HomePage></HomePage>
                )
              }
            ></Route>
            <Route path="/updateP/:id" element={<UpdateP></UpdateP>}></Route>
            <Route path="/update/:id" element={<Update></Update>}></Route>
            <Route path="/createP" element={<CreateP></CreateP>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/allcomp" element={<AllComp></AllComp>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
