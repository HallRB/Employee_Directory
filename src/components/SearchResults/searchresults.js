import React from "react";
import "./searchresults.css";

const searchresults = ({
  lastName,
  firstName,
}) => {
  return (
    <div className="button-container">
      <button className="btn btn-bluegreen" onClick={lastName}>
        Sort by last name
      </button>

      <button className="btn btn-bluegreen" onClick={firstName}>
        Sort by first name
      </button>
    </div>
  );
};

export default searchresults;