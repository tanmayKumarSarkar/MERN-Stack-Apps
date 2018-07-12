import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/books/books';
import Genres from './components/genres/genres';
import ProductManager from './components/productManager';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products" component= {ProductManager} />
            <Route path="/genre" component= {Genres} />
            <Route path="/book" component= {Books} />
            <Route component={ErrorComp} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

const ErrorComp = ()=> (
  <div> Error:( Path Does Not Exists!! </div>
);

export default App;
