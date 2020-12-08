import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Global,Indonesia,Provinsi} from "./pages";



const App = () => {
    return (
        <Router>
          <h1>⇲ Covid-19 Tracker ⇱</h1>
          <h4>by : Maestro Pythagoras | S11910046</h4>
          <h5>Nb • ✔️: Program Sudah Berjalan • ❌: Program Belum Berjalan</h5>
            <div>
            <nav>
          <ul>
            <li>
              <Link to="/global">[ 1 ] GLOBAL ❌</Link>
            </li>
            <li>
              <Link to="/indonesia">[ 2 ] INDONESIA ❌</Link>
            </li>
            <li>
              <Link to="/">[ 3 ] PROVINSI ✔️</Link>
            </li>
          </ul>
        </nav>
            <Switch>
                <Route path="/indonesia">
                    <Indonesia />
                </Route>
                <Route path="/">
                    <Provinsi />
                </Route>
                <Route path="/global">
                    <Global />
                </Route>
            </Switch>
            </div>
        </Router>
    );
};


export default App;