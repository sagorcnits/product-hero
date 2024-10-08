import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
