import { Fragment } from "react";
import waiting from "./waiting.gif";

const Waiting = () => {
  return (
    <Fragment>
      <img
        src={waiting}
        alt="waiting to load..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Waiting;