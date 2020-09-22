import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/dashboard/plans" component={Plans} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
