import React, { Component } from 'react';
import './App.css';
import Books from './components/books/books';
import Genres from './components/genres/genres';
import ProductManager from './components/productManager';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <ProductManager />
        {/* <Genres /> */}
        {/* <Books /> */}
      </div>
    );
  }
}

export default App;
