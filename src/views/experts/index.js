import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import HomePage from "./homepage";

import JobInfoPage from "./jobinfo";
import QuestionsComponent from "./questions";
import ResultsComponent from "./results";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
          <div className="navbar-brand">Career Advisor</div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobinfo">
                  Job Infos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/check">
                  Check
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path={`/`} component={HomePage} />
          <Route path={`/check`} component={QuestionsComponent} />
          <Route path={`/jobinfo`} component={JobInfoPage} />
          <Route path={`/results`} component={ResultsComponent}/>
        </Switch>
      </Router>
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);