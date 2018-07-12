import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props){
        super(props);
        this.state = { isEdit: false};
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete(){
        const {id, name, onDelete} = this.props;
        onDelete(id);
        // onDelete(name);
    }

    onEdit(){
        this.setState({isEdit:true});
    }

    onEditSubmit(e){
        e.preventDefault();
        //this.props.onEdit(this.name.value, this.price.value, this.props.name);
        this.props.onEdit(this.name.value, this.price.value, this.props.id);
        this.setState({isEdit:false});
    }

    render() {

        const {id, name, price} = this.props;

        return (
        <div className="ProductItem"> 
            {
                this.state.isEdit ?
                (   <form onSubmit={this.onEditSubmit}>
                        <input type="text" defaultValue={name} ref={name => this.name = name} />
                        <input type="text" defaultValue={price} ref={price => this.price = price} />
                        <button>Save</button>
                    </form>
                ) :
                (
                    <div>
                        <span>{name}</span>{` | `}
                        <span>{price}</span>{` | `}
                        <button onClick={this.onEdit}>Edit</button>{` | `}
                        <button onClick={this.onDelete}>Delete</button>
                    </div>
                )
            }
        </div>  
          
        );
    }
}

export default ProductItem;
