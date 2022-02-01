import React, { useEffect, useState } from "react";
import "./InputPolje.css";

function InputPolje({ setValue, value, placeholder, label }) {
  const [greska, setGreska] = useState(false);

  return (
    <div className="inputPolje">
      <label htmlFor="polje">{ label }</label>
      <input
        name="polje"
        className={greska && "greskaInput"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
    </div>
  );
}

export default InputPolje;
