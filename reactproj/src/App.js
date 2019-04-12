import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoutingComponent from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <RoutingComponent/>
        </Router>
      </div>
    );
  }
}

export default App;
