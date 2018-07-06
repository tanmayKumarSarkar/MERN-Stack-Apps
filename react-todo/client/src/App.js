import React, { Component } from 'react';
import './App.css';
import AllTodos from './component/AllTodos';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AllTodos />
      </div>
    );
  }
}

export default App;
