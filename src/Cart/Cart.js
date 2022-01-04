import React from "react";
import { connect } from "react-redux";
import { togglecartDropdown } from "../redux/Cart/CartActions";
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="cart-icon" onClick={props.togglecartDropdown}>
                <img src={window.location.origin + '/static/images/cart.svg'} alt="cart not found"/>
                <span>{props.itemCount} items</span>
        </div>
    )
}

const mapStateToProps = ({cart : { cartItems }}) => ({
    itemCount: cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
})

const mapDispatchToprops = dispatch => ({
    togglecartDropdown: () => dispatch(togglecartDropdown())
})

export default connect(mapStateToProps, mapDispatchToprops)(Cart);