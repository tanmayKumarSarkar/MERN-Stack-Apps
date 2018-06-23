import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.name.value, this.price.value);
        event.target.reset();
    }

    render() {

        return (
        <form className="AddProduct" onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
            <input type="text" placeholder="Name" ref={name => this.name = name} />
            <input type="text" placeholder="Price" ref={price => this.price = price} />
            <button>Add</button>
            <hr/>
        </form>    
        );
    }
}

export default AddProduct;
