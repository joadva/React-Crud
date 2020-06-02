import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./component/Navbar";

import { Users } from "./component/Users";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
