import React, { Component } from 'react';
import './books.css';

class Books extends Component {

  constructor(){
    super();
    this.state = {
      books : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/api/books')
    .then(res => res.json())
    .then(data => this.setState({books: data.books}, ()=> 
    console.log(data.books)
    ));

    //genres
    fetch('http://localhost:4000/api/genres')
    .then(res => res.json())
    .then(data => {
      let genres = data.genres.map(genre =>{
        return (          
          <li key={genre._id}>{genre.name}</li>
        );
      });
      this.setState({genres});
    });
  }

  render() {
    return (
      <div className="container">

        <div className="Books">
          <h2>List Of Books</h2>
            <ul>
              {this.state.books.map(book=>
                <li key={book._id}>{book.name} : By {book.author}</li>
              )}
            </ul>
        </div>

        <div className="Genres">
          <h2>List Of Genres</h2>
            <ul>
              {this.state.genres}
            </ul>
        </div>

      </div>
    );
  }
}

export default Books;
