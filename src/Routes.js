import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Favorite from "./Pages/Favorite/Favorite";
import Modal from "./Components/Modal/Modal";

function Routes(props) {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/favorite' component={Favorite} />
      </Switch>
      <Modal />
    </Router>
  );
}

export default Routes;
