import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./containers/Books";
import CreateBook from "./containers/CreateBook";
import Nav from "./components/Nav";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Book from "./components/Book";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: "",
    };

    this.notifyPathname = this.notifyPathname.bind(this);
  }

  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav
            notifyPathname={this.notifyPathname}
            pathname={this.state.pathname}
          />
          <Switch>
            <Route path="/" exact component={() => <Books />} />
          </Switch>
          <Switch>
            <Route path="/create" exact component={() => <CreateBook />} />
          </Switch>
          <Switch>
            <Route
              path="/edit/:id"
              exact
              component={(props) => <CreateBook {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
