import React from "react";
import { connect } from "react-redux";
import Categories from "../Categories/Categories";
import { addItem } from "../redux/Cart/CartActions";
import Items from '../server/products/index.get.json';
import './Collection.css';

const Collection = (props) => {
    return (
        <div className="container">
        <Categories />
        <div className="items">{
        Items.map(item => { 
            // console.log(props.id , item.category)
            if (item.category === props.id) {
                return <div key={item.key} className="category-item">
                    <div className="title">{item.name}</div>
                    <img src={window.location.origin + item.imageURL} alt='noimage'></img>
                    <div className="description">{item.description}</div>
                    <button onClick={()=>props.addItem(item)}>Buy Now @ Rs{item.price}</button>
                </div>
            }
        })}</div> </div> 
    )
}

const mapStateToprops = state => ({
    id : state.user.id
})

const mapDispatchToprops = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToprops, mapDispatchToprops)(Collection);