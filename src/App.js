import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./pages/Login";




const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
