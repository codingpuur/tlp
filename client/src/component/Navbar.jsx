import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="   shadow-md     shadow-white bg-white     md:flex  md:justify-between justify-center     items-center  overflow-hidden w-full  md:py-0 py-5 space-y-2  ">
      <div className=" shadow-2xl shadow-white   md:mb-0 justify-center items-center bg-gradient-to-r from-[#000080] to-white  w-1/2 px-10  ">
        <Link to="/">
          <img
            className="h-14 w-44 md:h-16  md:w-52 px-2   border-white   object-cover object-center"
            src={logo}
            alt="LOGO"
          />  
        </Link>
      </div>
      <div className=" flex justify-center items-center  w-1/2">
        <ul className="  list-none flex gap-2 text-xs md:text-lg md:gap-7 cursor-pointer justify-center text-black     ">
          <li>
            <Link to="/wedding">wedding</Link>
          </li>
          <li>
            <Link to="/wedding">Real wedding</Link>
          </li>
          <li>
            <Link to="/prewedding">Pre-wedding</Link>
          </li>
          <li>
            <Link to="/maternity">Maternity</Link>
          </li>

          <li>
            <Link to="/kids">Kids</Link>
          </li>
          {/* <li>
            <Link to="/ring">Ring Ceremony</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
