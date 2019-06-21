import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar, SmurfForm, Smurfs } from "./";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
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
