import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  { Provider } from 'react-redux';

import store from './store';
import Posts from '../src/components/Posts';
import PostForm from '../src/components/PostForm';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <PostForm />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
