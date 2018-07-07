import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import AddTodo from './AddTodo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const TodosQuery = gql`
{
  todos{
    id
    item
    complete
  }
}`;

const UpdateMutation = gql`
mutation($id: ID!, $complete: Boolean!){
  updateTodo(id:$id, complete:$complete)
}
`

const RemoveMutation = gql`
mutation($id: ID!){
  removeTodo(id:$id)
}
`

const AddMutation = gql`
mutation($item: String!){
    createTodo(item: $item){
      id
      item
      complete
    }
  }
`

class AllTodos extends Component {
  
  updateTodo = async todo => {
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        complete: !todo.complete
      },   
      update: store => {
        const data = store.readQuery({query: TodosQuery});
        data.todos = data.todos.map(item=>
          item.id === todo.id ?{
            ...todo,
            complete: !todo.complete
          }: item
        );
        store.writeQuery({query: TodosQuery , data});
      }   
     // refetchQueries: [{query: TodosQuery}]
    });
  };

  removeTodo = async todo  => {
    await this.props.removeTodo({
      variables: {
        id: todo.id
      },   
      update: store => {
        const data = store.readQuery({query: TodosQuery});
        data.todos = data.todos.filter(item => item.id !== todo.id);
        store.writeQuery({query: TodosQuery , data});
      }
    });
  };

  addItem = async item => {
    await this.props.addTodo({
      variables: {
        item
      },   
      update: (store, { data: { createTodo } }) => {
        const data = store.readQuery({query: TodosQuery});
        data.todos.unshift(createTodo);
        store.writeQuery({query: TodosQuery , data});
      }
    });
  };


  render() {
    let {data: {error, loading, todos}} = this.props;
    if(loading) return (<div disabled>Loading Todos....</div>);
    if (error) return (<div disabled>Error :(</div>);
    return (
      <div className="AllTodos" style={{display:"flex"}}>
        <div style={{margin:"auto", width:400}} >
          <Paper elevation={1}>
            <AddTodo addItem = {this.addItem} />
            
            <List>
              {todos.map(todo=> (
                <ListItem
                  key={todo.id}
                  role={undefined}
                  dense
                  button
                  onClick={()=>this.updateTodo.bind(this)(todo)}
                >
                  <Checkbox
                    checked={todo.complete}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={todo.item} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Closes" 
                      onClick={()=>this.removeTodo(todo)}>
                        <CloseIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>

          </Paper>
        </div>
      </div>
    );
  }
}


export default compose( 
  graphql(UpdateMutation, {name: "updateTodo"}),
  graphql(RemoveMutation, {name: "removeTodo"}),
  graphql(AddMutation, {name: "addTodo"}),
  graphql(TodosQuery)
)(AllTodos);
