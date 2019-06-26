import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar, SmurfForm, Smurfs } from "./";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={Smurfs} />
                    <Route exact path="/smurf-form" component={SmurfForm} />
                </div>
            </Router>
        );
    }
}

export default App;
