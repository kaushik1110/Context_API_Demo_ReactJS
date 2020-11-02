import React, { useContext, useState } from "react";
import { FirstName } from "./App";
import ComB from "./ComB";

const ComC = () => {
  const fname = useContext(FirstName);
  const [Value, setValue] = useState();

  const changeNameHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <ComB />
      <div className="setdata">
      <input onChange={changeNameHandler}/>
      <button onClick={()=>fname.changeHandler(Value)}>Change Data</button>
      </div>
      <div>
      </div>
    </>
  );
};

export default ComC;
