import React, { Component } from 'react';
import './App.css';
import EnhancedCounter from './containers/EnhancedCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<h1 className="App-title">REACT | REDUX counter<span class="marker">+</span></h1>
        </header>
			<EnhancedCounter />
      </div>
    );
  }
}

export default App;
