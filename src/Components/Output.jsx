import React from "react";

function Output({ finalOutput, input, avg }) {
  return (
    <div className={`output ${input > 0 ? "out" : ""}`}>
      <p>
        {input > 0 && typeof input == "number"
          ? `You pay  INR ${finalOutput} (INR ${input} + INR ${avg} Tip)`
          : `You pay Nothing`}
      </p>
    </div>
  );
}

export default Output;
