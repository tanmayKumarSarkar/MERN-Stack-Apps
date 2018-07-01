import React, { Component } from 'react';
import ProductItem from './productItem';
import AddProduct from './addProduct';

const products = [
    {name:'ipad', price:200},
    {name:'iphone', price:600}
  ];
  
  localStorage.setItem('products', JSON.stringify(products));

class ProductManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        };
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount(){
        const products = this.getProducts();
        this.setState({products});
    }

    getProducts(){
        return this.state.products;
    }

    onAdd(name, price){
        const products = this.getProducts();
        products.push({name, price});
        this.setState({products});
    }

    onEdit(name, price, prevName){
        let products = this.getProducts();
        products = products.map(product =>{
            if(product.name === prevName){
                product.name = name;
                product.price = price;
            }
            return product;
        });      
        this.setState({products});
    }

    onDelete(name){
        const products = this.getProducts();
        const filtredProducts = products.filter(product =>{
            return product.name !== name;
        });       
        this.setState({products: filtredProducts});      
    }

    render() {
        return (
        <div className="ProductManager">
            <h1>Product Manager</h1>
            <AddProduct onAdd={this.onAdd} />
            {
                this.state.products.map(product => {
                    return(
                        <ProductItem 
                            key={product.name} 
                            {...product} 
                            onDelete = {this.onDelete}
                            onEdit = {this.onEdit}
                        />
                    ); 
                })
            }
            <hr/>
        </div>
        );
    }
}

export default ProductManager;
