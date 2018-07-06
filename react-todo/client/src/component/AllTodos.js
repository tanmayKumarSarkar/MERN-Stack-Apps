import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
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

class AllTodos extends Component {

  constructor(props){
    super(props);
  }

  
  updateTodo = todo => () => {
 
  };

  removeTodo = todo => () => {
 
  };


  render() {
    
    let {data: {error, loading, todos}} = this.props;
    if(loading) return (<div disabled>Loading Todos....</div>);
    if (error) return (<div disabled>Error :(</div>);
    return (
      <div className="AllTodos" style={{display:"flex"}}>
        <div style={{margin:"auto", width:400}} >
          <Paper elevation={1}>
            
            <List>
              {todos.map(todo=> (
                <ListItem
                  key={todo.id}
                  role={undefined}
                  dense
                  button
                  onClick={()=>this.updateTodo(todo)}
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
  graphql(UpdateMutation),
  graphql(TodosQuery)
)(AllTodos);
