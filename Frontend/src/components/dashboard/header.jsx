import React from "react";
import "./header.css"; // You can use this file for styling

const Header = () => {
  const name = localStorage.getItem("Name");
  return (
    <>
      <div className="header mt-4">
        <h1 className="font-Montserrat">Hello {name}!</h1>
        <p className="welcome me-10">Welcome Back!</p>
      </div>
      
    </>
  );
};

export default Header;
