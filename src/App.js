import React from "react";

import NavBar from "./components/NavBar";

import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dropdown from "./pages/dropdown/Dropdown";
import List from "./pages/list/List";
import Lifecycle from "./pages/lifecycle/Lifecycle";
import Login from "./pages/route/Login";
import DashBoard from "./pages/route/DashBoard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  // Simular Autenticacion
  const auth = true;

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/dropdown" component={Dropdown} />
        <Route exact path="/list" component={List} />
        <Route exact path="/lifecycle" component={Lifecycle} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={DashBoard} auth={auth} />
      </Switch>
    </Router>
  );
};

export default App;
