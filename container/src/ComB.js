import React, { useContext } from "react";
import { FirstName } from "./App";

function ComB() {
    const fname = useContext(FirstName);
  return (
    <div>
      <h1 className="setdata"> My name is {fname.name} </h1>
    </div>
  );
}

export default ComB;
