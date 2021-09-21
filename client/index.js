import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

import App from "./componnets/App";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin",
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return;
  <ApolloProvider client={client}>
    <Router history={hashHistory}></Router>
    <Route path="/" component={App}>
      <Route path="login" component={LoginForm} />
      <Route path="signup" component={SignupForm} />
      <Route path="dashboard" component={Dashboard} />
    </Route>
  </ApolloProvider>;
};

ReactDOM.render(<Root />, document.querySelector("#root"));
