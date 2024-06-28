import React, { useEffect } from "react";
import { useState } from "react";
import '../index.css';
import logo from '../../public/logo.png'

// import home from '../../public/home.svg';

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = (
    <>
      <li className="rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Home </a>
      </li>
      <li className=" rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800 ">
        <a> Features </a>
      </li>

      <li className=" rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Pricing </a>
      </li>

      <li className="rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> About Us </a>
      </li>

      <li className="rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Contact </a>
      </li>
    </>
  );
  return (
    <>
   <div className={`navbar nav  text-[#FFFFFF] fixed top-0 left-0 right-0 z-50 ${
         sticky
        ? "sticky-navbar shadow-md  dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out bg-cyan-100"
            : ""
        }`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItem}
      </ul>
      <div className="flex flex-shrink-0 items-center ms-8 me-4">
          <img className="h-12 w-auto" src={logo} alt="Your Company" />
        </div>
    </div>
    <a className=" text-2xl font-bold cursor-pointer text-[#FFE344]">CredChain</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end mx-5">
  <a className="bg-[#FFE344] text-black px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-[#FFE344] ">
                Get Started
              </a>
  </div>
</div>
    </>
  );
}

export default Navbar;





