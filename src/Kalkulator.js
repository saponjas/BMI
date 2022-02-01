import React, { useState } from "react";
import { useHistory } from "react-router";
import InputPolje from "./InputPolje";
import "./Kalkulator.css";

function Kalkulator() {
  const [tezina, setTezina] = useState("");
  const [visina, setVisina] = useState("");
  const [bmi, setBmi] = useState("");

  const history = useHistory()

  const izracunajBMI = (tezina, visina) => {
    setBmi((Number.parseInt(tezina) * 1000) / (Number.parseInt(visina) * Number.parseInt(visina)));
  };

  return (
    <div className="kalkulator">
      <div className="naslov">BMI Kalkulator</div>
      <img className="slika" src="https://www.health-total.com/wp-content/uploads/2019/10/bmi-chart-img.jpg" />
      <InputPolje placeholder="Tezina" value={visina} setValue={setVisina} label="Telesna tezina" />
      <InputPolje placeholder="Visina" value={tezina} setValue={setTezina} label="Visina" />

      <div className="kontrole">
        {!bmi && <button onClick={() => izracunajBMI(tezina, visina)}>Izracunaj BMI</button>}
        {bmi && <button onClick={() => setBmi("")}>Pocisti</button>}
        <div className="bmi">Vas BMI je: {bmi}</div>
        <div onClick={() => history.push("/informacije")} className="informacijeDugme">Detaljnije infromacije</div>
      </div>
    </div>
  );
}

export default Kalkulator;
