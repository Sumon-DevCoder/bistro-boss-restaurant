import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink to="/">
        <li>HOME</li>
      </NavLink>
      <NavLink to="/contact-us">
        <li>CONTACT US</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>DASHBOARD</li>
      </NavLink>
      <NavLink to="/our-menu">
        <li>OUR MENU</li>
      </NavLink>
      <NavLink to="/our-shop">
        <li>OUR SHOP</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-content text-[#FFF] h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <div className="text-2xl font-bold text-start font-cinzel">
            <p> BISTRO BOSS </p>
            <p className="text-lg tracking-[0.3em]">Restaurant</p>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 font-semibold ">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="uppercase cursor-pointer hover:btn-primary text-white font-semibold">
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
