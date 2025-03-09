import React from "react";

function Button({ setclickHandler }) {
  return (
    <div>
      <button className="btn" onClick={setclickHandler}>
        Reset
      </button>
    </div>
  );
}

export default Button;
