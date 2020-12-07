import React from "react";
import "./searchform.css";

const searchform = ({ placeholder, handleChange }) => {
  return (
    <input
      className="searchform"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default searchform;