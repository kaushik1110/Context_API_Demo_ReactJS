import { createContext, useState } from "react";
import "./App.css";
import ComC from "./ComC";

const FirstName = createContext();
const App = () => {
  const [state1, setstate] = useState({
    name: "kaushik",
  });
  

  const changeHandler = (Value) => {
    setstate({
      name: Value,
      // name: Value,
    });
  };
  // const changeNameHandler = (e) => {
  //   setValue(e.target.value);
  // };

  const changed = {
    ...state1,
    changeHandler: (Value) => changeHandler(Value), 
    // changeHandler: changeHandler,
    // changeNameHandler: changeNameHandler,
  };

  return (
    <>
      <FirstName.Provider value={changed}>
        <ComC />
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName };
