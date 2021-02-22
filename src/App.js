import React from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homescreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
