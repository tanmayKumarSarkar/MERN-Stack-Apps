const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://username:password@ds127139.mlab.com:27139/bookstore')
  .then(res => console.log("connected to database"))
  .catch(err => console.log(err.message));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(1234, ()=> console.log('Listening to port: 1234'));