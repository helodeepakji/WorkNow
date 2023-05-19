import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [ShowMenu,setShowMenu] = useState(false);
  return (
      <nav>
        <div className="navlef">
          <div className="logo">
            <span className="material-symbols-outlined menu-btn" onClick={()=> setShowMenu(true)}>menu</span>
            <img src="http://s3.amazonaws.com/wp.shaadi.com/blog.shaadi.com/prod/uploads/2015/09/New-Shaadi-Logo2.jpg" width="120px" alt="" />
          </div>
          <div className={ShowMenu ? "opt show" : "opt" }>
            <span className={ShowMenu ? "material-symbols-outlined cancel-btn close" : "material-symbols-outlined cancel-btn" } onClick={()=> setShowMenu(false)}>close</span>
            <span id="home"> <NavLink to="/">Home</NavLink> </span>
            <span id="busbooking"> <NavLink to="/about">about</NavLink> </span>
            <span id="roundtrip"> <NavLink to="/service">services</NavLink> </span>
            <span id="contact"> <NavLink to="/contact">contact</NavLink> </span>
            <span id="holiday"> <a href="https://nxttour.in"> Honeymoon Packages </a> </span>
          </div>
        </div>
        <div className="navrig">
          <NavLink to="/login">
            <div className="profile"><span>Log In</span></div>
          </NavLink>
        </div>
      </nav>
      );
};

      export default Navbar;