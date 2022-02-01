import React from "react";
import "./InputPolje.css";

function InputPolje({ setValue, value, placeholder, label }) {
  return (
    <div className="inputPolje">
      <label htmlFor="polje">{label}</label>
      <input
        name="polje"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
    </div>
  );
}

export default InputPolje;
