import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./style.css";
import HomePage from '../HomePage';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route path = "/" exact component ={HomePage} />
        </div>
          </Router>
    );
  }
}

export default App;


