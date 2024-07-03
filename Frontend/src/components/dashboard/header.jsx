import React from "react";
import "./header.css"; // You can use this file for styling

const Header = () => {
  return (
    <>
      <div className="header mt-4">
        <h1 className="font-Montserrat">Hello Parth!</h1>
        <label className="input flex items-center gp-2 border-transparent bg-[#908c9366] rounded-3xl">
          <input type="text" className="grow " placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <p className="welcome">Welcome Back!</p>
    </>
  );
};

export default Header;
