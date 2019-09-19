import React, { Component } from 'react';
import './App.css';

import NewtonMath from './NewtonMath.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewtonMath ></NewtonMath>
      </div>
    );
  }
}

export default App;