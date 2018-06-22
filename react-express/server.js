const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Genre = require('./server/models/genres');
const Book = require('./server/models/book');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://username:password@ds127139.mlab.com:27139/bookstore')
  .then(res => console.log("connected to database"))
  .catch(err => console.log(err.message));

const port = process.env.PORT || 4000;

app.get('/api/books', (req, res)=>{
    Book.find({}, (err, books)=>{
        if(err) res.json({success: false, msg: "Books not found"});
        res.json({success: true, msg: "All books", books: books});
    });
});

app.get('/api/genres', (req, res)=>{
    Genre.find({}, (err, genres)=>{
        if(err) res.json({success: false, msg: "Genres not found"});
        res.json({success: true, msg: "All genres", genres: genres});
    });
});

app.listen(port, ()=>{
	console.log(`App running on port ${port}`);
});