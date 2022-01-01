import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import New from "./New";
// import Signup from '../pages/Signup';
import Feed from "./Pages/Feed";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
const Main = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="feed" element={<Feed />} />
      <Route path="bottles/new" element={<New />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Main;
