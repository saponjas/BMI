import React from "react";
import "./Informacije.css";
import lista from "./bmiLista";

function Informacije() {
  return (
    <div className="informacije">
      <h1>Nesto vise o BMI indeksu</h1>
      <div className="pasus">
        BMI prikazuje odnos mase i visine tela, međutim ne uzima u obzir telesnu građu, pa je njegova upotreba
        ograničena. On ne može ilustrovati procenat masnog tkiva u odnosu na mišićnu ili koštanu masu – što su osnovni
        kriterijumi za procenu uhranjenosti. Pojedinci sa velikom telesnom masom i visokim BMI indeksom ne mogu se
        automatski kategorizovati kao gojazni. Na primer, kod bodibildera i krupno građenih ljudi, udeo mišićne i
        koštane mase u odnosu na visinu je velik, ali to ne znači da su oni debeli.
      </div>

      <table>
        <tr>
          <td>BMI</td>
          <td>Opis</td>
          <td>Rizik</td>
        </tr>
        {lista.map((item) => (
          <tr>
            <td>{item.bmi}</td>
            <td>{item.opis}</td>
            <td>{item.rizik}</td>
          </tr>
        ))}
      </table>

      <img className="slikaInfo" src="https://cdn.ketodiet.eu/assets/ketodiet.cz/img/bmi/bmi-graf-en.png" />
    </div>
  );
}

export default Informacije;
