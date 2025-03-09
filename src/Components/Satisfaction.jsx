import React, { useState } from "react";

function Satisfaction({ message,selectedValue,setselectedValue }) {
 

  return (
    <div className="satis">
      <span>{message}</span>
      <select
        value={selectedValue}
        onChange={(e) => setselectedValue(e.target.value)}
      >
        <option value={0}>It was good (0%)</option>
        <option value={5}>It was Okay (5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>Absolutely amazing!! (20%)</option>
      </select>
    </div>
  );
}

export default Satisfaction;
