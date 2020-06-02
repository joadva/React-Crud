import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//component
import { Abaut } from "./component/Abaut";
import { Users } from "./component/Users";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/abaut" component={Abaut} />
          <Route path="/Users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
