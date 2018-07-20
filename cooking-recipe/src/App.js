import React, { Component } from 'react';
import './App.css';

import Recipes from './components/Recipes';
import Header from './components/Header';
import Form from './components/Form';

const API_KEY = process.env.REACT_APP_API_KEY;
const cors_url = process.env.REACT_APP_CORS_ANYWHERE_URL;
const env_mode =  process.env.REACT_APP_STAGE;

class App extends Component {

  state = {
    recipes: [],
    text: 'Loading...'
  }

  componentWillMount = async () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    if (recipes == null){
      const api_call = await fetch(`${cors_url}http://food2fork.com/api/search?key=${API_KEY}&sort=t`);
      const data = await api_call.json();
      if(data.count <= 0){
        this.setState({recipes: data.recipes, text: "No data found..."});
      }else
      this.setState({recipes: data.recipes});
    }
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  getRecipe = async e => {
     e.preventDefault();
     const recipeName = e.target.elements.recipeName.value;
     const api_call = await fetch(`${cors_url}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
     const data = await api_call.json();
     //console.log(data);
     if(data.count <= 0) this.setState({recipes: data.recipes, text: 'No matches found, Search again...'});
     else this.setState({recipes: data.recipes});
     //console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header  />
        <Form getRecipe = {this.getRecipe} />
        {this.state.recipes != null?
          <Recipes recipes={this.state.recipes} /> : 
          <div className="text__output"> {this.state.text} </div>  
        }
      </div>
    );
  }
}

export default App;
