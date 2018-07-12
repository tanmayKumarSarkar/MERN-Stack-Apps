import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './productItem';
import AddProduct from './addProduct';

const products = [];
  
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
        this.getAPIProducts();
        const products = this.getProducts();
        this.setState({products});
    }

    getProducts(){
        return this.state.products;
    }

    getAPIProducts(){
        axios.get(`http://localhost:3600/products`)
            .then(res => this.setState({products: res.data}))
            .catch(err => console.log(err));
    }

    onAdd(name, price){
        // const products = this.getProducts();
        // products.push({name, price});
        // this.setState({products});
        axios.post(`http://localhost:3600/products`, {name:name, price:price})
            .then(res => {
                this.getAPIProducts();
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    onEdit(name, price, id){
        axios.put(`http://localhost:3600/products/${id}`, {name:name, price:price})
            .then(res => {
                this.getAPIProducts();
                console.log(res);
            })
            .catch(err => console.log(err));
        // let products = this.getProducts();
        // products = products.map(product =>{
        //     if(product.name === prevName){
        //         product.name = name;
        //         product.price = price;
        //     }
        //     return product;
        // });      
        // this.setState({products});
    }

    onDelete(id){
        axios.delete(`http://localhost:3600/products/${id}`)
            .then(res => {
                this.getAPIProducts();
                console.log(res);
            })
            .catch(err => console.log(err));
        // console.log("name: ", name);
        // const products = this.getProducts();
        // const filtredProducts = products.filter(product =>{
        //     return product.name !== name;
        // });       
        // this.setState({products: filtredProducts});      
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
                            key={product.id} 
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
