import React, { Component } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Home';
import New from './New';
// import Signup from '../pages/Signup';
import Feed from './Feed'
const Main = () => {
  return (
    <Routes> 
      <Route path= '' element={<Home/>}/>
      <Route path= 'feed' element={<Feed/>}/>
      <Route path = 'bottles/new' element={<New/>}/>
    </Routes>
  );
}

export default Main;