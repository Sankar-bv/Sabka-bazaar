import React from 'react';
import { connect } from "react-redux";
import { addItem, removeItemFromCart } from "../redux/Cart/CartActions";
import './CartItem.css';

const CartItem = ({ item, additem, removeitem }) => (
  <div className='cart-item'>
    <img src={item.imageURL} alt='item' />
    <div className='item-details'>
      <span className='name'>{item.name}</span>
      <div className='item-quantity'>
      <div className='price'>
          <button className='quantity' onClick={()=>removeitem(item)}>-</button>
        {' '+item.quantity+' '} <button className='quantity' onClick={()=>additem(item)}>+</button> x <div className='price'>Rs{item.price}</div>
      </div>
      <div className='totalprice'>
        {'Rs'+totalprice(item)}
      </div>
      </div>
    </div>
  </div>
);

const totalprice = (item) => {
  return item.quantity * item.price;
}

const mapStateToProps = ({cart : { cartItems }}) => ({
    itemCount: cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.price, 0)
})

const mapDispatchToprops = dispatch => ({
    additem: item => dispatch(addItem(item)),
    removeitem: item => dispatch(removeItemFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToprops)(CartItem);