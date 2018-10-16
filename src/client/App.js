import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import Landing from "./components/Landing/Landing";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
