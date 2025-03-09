import React from "react";
import { useState } from "react";

import BillInput from "./Components/BillInput";
import Satisfaction from "./Components/Satisfaction";
import Output from "./Components/Output";
import Button from "./Components/Button";

function App() {
  let [input, setInput] = useState("");
  let [selectedValue, setselectedValue] = useState(0);
  let [selectedValuee, setselectedValuee] = useState(0);
  const avg = (Number(selectedValue) + Number(selectedValuee)) / 2;
  let finalOutput = Number(input) + avg;

  function clickHandle() {
    setInput(0);
    setselectedValue(0);
    setselectedValuee(0);
  }

  return (
    <div className="app">
      <BillInput input={input} setInput={setInput} />
      <Satisfaction
        message={"How did you like the Service?"}
        selectedValue={selectedValue}
        setselectedValue={setselectedValue}
      />
      <Satisfaction
        message={"How did you friend  like the Service?"}
        selectedValue={selectedValuee}
        setselectedValue={setselectedValuee}
      />
      <Output finalOutput={finalOutput} input={Number(input)} avg={avg} />
      <Button setclickHandler={clickHandle} />
    </div>
  );
}

export default App;
