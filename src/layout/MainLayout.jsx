import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
