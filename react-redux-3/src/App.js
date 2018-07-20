import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from '../src/components/Posts';
import PostForm from '../src/components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <hr/>
        <Posts />
      </div>
    );
  }
}

export default App;
