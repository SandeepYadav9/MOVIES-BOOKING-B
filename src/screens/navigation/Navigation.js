import React, { Component } from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from '../screens/home/Home'
import BookShow from '../screens/BookShow'


class Navigation extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="book" element={<BookShow  />} />
        </Routes>
      </div>
    );
  }
}

export default Navigation;