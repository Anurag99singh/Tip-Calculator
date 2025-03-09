import React from "react";

function BillInput({ input, setInput }) {
  return (
    <div className="billinput">
      <span>How much was your Bill? </span>
      <input
        type="text"
        value={input}
        placeholder="Enter the Bill Amt.."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default BillInput;
