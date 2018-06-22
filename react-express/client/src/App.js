import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/books/books';
import Genres from './components/genres/genres';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Genres />
        {/* <Books /> */}
      </div>
    );
  }
}

export default App;
