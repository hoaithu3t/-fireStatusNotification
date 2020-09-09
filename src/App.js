import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Container/Home";
import SeeDetails from "./Container/SeeDetails";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <p>ĐẠI HỌC QUỐC GIA HÀ NỘI</p>
        <p>TRƯỜNG ĐẠI HỌC CÔNG NGHỆ</p>
        <br />
        <h1>HỆ THỐNG BÁO CHÁY TỪ XA</h1>
      </div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/seeDetails">
        <SeeDetails />
      </Route>
    </div>
  );
}

export default App;
