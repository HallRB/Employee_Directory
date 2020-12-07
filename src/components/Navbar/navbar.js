import React from "react";
import "./navbar.css"

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i className={icon} /> {" "}{title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Employee Directory",
};

export default Navbar;