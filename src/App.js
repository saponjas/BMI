import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Informacije from "./Informacije";
import Kalkulator from "./Kalkulator";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/informacije">
          <Informacije />
        </Route>
        <Route path="/">
          <Kalkulator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
