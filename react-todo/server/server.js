const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');
//const graphqlHTTP = require('express-graphql');
//const cors =  require('cors');

//app.use(cors());
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://username:password@ds123619.mlab.com:23619/tan-todo')
  .then(res => console.log("connected to database"))
  .catch(err => console.log(err.message));

const Todo = mongoose.model("Gtodo", {
    item: String,
    complete: Boolean
});

const typeDefs = `
    type Query {
        hello(name: String): String!
        todos: [Todo]
    }
    type Todo {
        id: ID!
        item: String!
        complete: Boolean!
    }
    type Mutation {
        createTodo(item: String!): Todo
        updateTodo (id: ID!, complete: Boolean!): Boolean
        removeTodo (id: ID!): Boolean
    }
`

const resolvers = {
    Query: {
        hello: (_, {name}) => `hello ${name || 'World'}`,
        todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async (_, {item}) => {
            const todo = new Todo ({item, complete: false});
            await todo.save();
            return todo;
        },
        updateTodo: async (_, {id, complete}) => {
            var x = await Todo.findByIdAndUpdate(id, {complete});
            console.log(x);
            return true;
        },
        removeTodo: async (_, {id, complete}) => {
            var x = await Todo.findByIdAndRemove(id);
            console.log(x);
            return true;
        }
    }
}

const port = process.env.PORT || 9000;
const options = {
    port: port,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground'
  }

const server = new GraphQLServer({typeDefs, resolvers});
server.start(options, ({ port })=> console.log('Server is running on port: '+port))

