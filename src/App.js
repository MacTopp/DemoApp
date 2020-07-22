
import './App.css';
import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Profile from "./components/Profile";
import Home from "./components/Character";
import history from './history';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router history={history}>
	      <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Profile/:id" component={Profile} />
                </Switch>
		</BrowserRouter>
            </Router>
      </header>
    </div>
  );
}

export default App;
