import React from "react";
import "./searchresults.css";

const searchresults = ({
  lastName,
  firstName,
}) => {
  return (
    <div className="button-container">
      <button className="btn btn-bluegreen" onClick={firstName}>
       first name
      </button>

      <button className="btn btn-bluegreen" onClick={lastName}>
      last name
      </button>
    </div>
  );
};

export default searchresults;