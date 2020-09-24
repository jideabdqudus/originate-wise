import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import { Provider } from "react-redux";
import store from "./store";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create" component={CreateAccount} />
            <Route exact path="/dashboard/plans" component={Plans} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};
export default App;
