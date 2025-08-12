import React,{Component} from "react";
import Detail from "./Detail";


import './App.css'
import products from "./productDetails";
class Products extends Component{
    constructor(){
        super();
        this.state={
           product:products
        }
    }
    mapping(x){
        const items=x.map(item => <Detail 
            title={item.title}
            image={item.image}
            describtion={item.describtion}
            price={item.price}
            ref={item.ref}
        />)
        return items
    }
    render(){
        return(
            <div className="product">
{this.mapping(this.state.product)}</div>
        )
    }}
    export default Products;