import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
    
constructor(props){
    super(props);
    this.state = {
        item: ""
    }
}
  
   valChange = e => {
        const newVal = e.target.value;
        this.setState({
            item : newVal
        });
   }

   valSubmit = e => {
        if(e.key === 'Enter') {
            this.props.addItem(e.target.value);
            e.target.value = null;
        }
}

    render() {
    // const { item } = this.state;
    return (
        <TextField
        label="Add Item"
        placeholder="todo..."
        // onChange = {this.valChange}
        onKeyDown = {this.valSubmit}
        style={{margin: '20px', width: '90%'}}       
      />
    );
  }
}

export default AddTodo;
