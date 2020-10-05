import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import { Provider } from "react-redux";
import store from "./store";
import History from "./pages/History";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create" component={CreateAccount} />
          <PrivateRoute exact path="/dashboard/plans" component={Plans} />
          <PrivateRoute exact path="/dashboard/history" component={History} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
