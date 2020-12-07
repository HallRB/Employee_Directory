import React from "react";
import Cards from "./Cards";
import "./cardsall.css";

const Cardsall = (props) => {
  return (
    <div className="cardsall">
      {props.users.map((user) => (
        <Cards key={user.id.value} user={user} />
      ))}
    </div>
  );
};

export default cardsall;