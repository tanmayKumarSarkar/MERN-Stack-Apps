const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://username:password@ds123619.mlab.com:23619/tan-todo')
  .then(res => console.log("connected to database"))
  .catch(err => console.log(err.message));

const Todo = mongoose.model("Todo", {
    item: String,
    complete: Boolean
});

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
    type Todo {
        id: ID!
        item: String!
        complete: Boolean!
    }
    type Mutation {
        createTodo(item: String!): Todo
    }
`

const resolvers = {
    Query: {
        hello: (_, {name}) => `hello ${name || 'World'}`,
    },
    Mutation: {
        createTodo: async (_, {item}) => {
            const todo = new Todo ({item, complete: false});
            await todo.save();
            return todo;
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers});
server.start(()=> console.log('Server is running on port: 4000'))

