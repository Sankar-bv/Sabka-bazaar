import React from "react";
import { connect } from "react-redux";
import { addItem } from "./redux/Cart/CartActions";
import Categories from "./Categories";
import Items from './server/products/index.get.json';
import './Collection.css';

const Allproducts = (props) => {
    return (
        <div className="container">
        <Categories />
        <div className="items">{
        Items.map(item => {
            
                return <div key={item.key} className="category-item">
                    <div className="title">{item.name}</div>
                    <img src={window.location.origin + item.imageURL} alt='noimage'></img>
                    <div className="description">{item.description}</div>
                    <button onClick={()=>props.addItem(item)}>Buy Now @ Rs{item.price}</button>
                </div>
            
        })}</div></div>
    )
}

const mapDispatchToprops = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToprops)(Allproducts);