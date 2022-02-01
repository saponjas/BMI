import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Informacije from "./Informacije";
import Kalkulator from "./Kalkulator";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Kalkulator />
        </Route>
        <Route path="/informacije">
          <Informacije />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
