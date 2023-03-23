import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ArmeryLogo from "../Header/ArmeryLogo.png";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle ml-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/">
              <img className="w-[80px] btn btn-ghost" src={ArmeryLogo} alt="Company logo."></img>
            </Link>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle mr-10">
              <Link to="/Basket">View Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
