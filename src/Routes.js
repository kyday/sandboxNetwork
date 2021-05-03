import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function Routes(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
