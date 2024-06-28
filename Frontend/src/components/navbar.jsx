import React, { useEffect } from "react";
import { useState } from "react";

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
        <a> About Us! </a>
      </li>

      <li className=" rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Profile </a>
      </li>

      <li className="rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Join us </a>
      </li>

      <li className="rounded-md hover:bg-slate-100 duration-300 cursor-pointer dark:hover:bg-slate-800">
        <a> Tasks </a>
      </li>
    </>
  );
  return (
    <>
   <div className="navbar bg-slate-900 text-[#FFFFFF]">
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
    </div>
    <a className=" text-2xl font-bold cursor-pointer text-[#FFE344]">ChainCred</a>
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





// {/* <div
//         className={` max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
//           sticky
//             ? "sticky-navbar shadow-md  dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out bg-cyan-100"
//             : ""
//         }`}
//       >
//         {/* <h1> {user.username}</h1> */}
//         <div className="navbar ">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost lg:hidden"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//               >
//                 {navItem}
//               </ul>
//             </div>
            
//             <a className=" text-2xl font-bold cursor-pointer text-[#FFE344]">ChainCred</a>
//           </div>
//           <div className="navbar-end space-x-3">
//             <div className="navbar-center hidden lg:flex">
//               <ul className="menu menu-horizontal px-1 ">{navItem}</ul>
//             </div>

            
            
//             <div className="navbar-end">
//               <a className="bg-[#FFE344] text-black px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-[#FFE344] ">
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </div> */}