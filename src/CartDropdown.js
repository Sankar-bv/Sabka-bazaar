import React from "react";
import { connect } from 'react-redux';
import { togglecartDropdown } from "./redux/Cart/CartActions";
import './CartDropdown.css';
import CartItem from "./CartItem";

const CartDropdown = ({cartItems, togglecartDropdown, itemCount}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
            <div>
                <div className="heading">    <div>My Cart</div>
                    <div onClick={()=>togglecartDropdown()}>&#10005;</div>    </div>
            {
            cartItems.length ? (cartItems.map(cartItem => { console.log(cartItem)
                return <CartItem key={cartItem.id} item={cartItem} />
            })) : <div className="emptymessage">
                <div className="empty-message">No Items in your cart</div>
                <div className="empty-message">Your favourite items are just a click away</div>
                </div>} </div>
            </div>
            <button className="total"><div>Go To Checkout</div><div>Rs{itemCount}</div></button>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    itemCount: state.cart.cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.price, 0)
})

const mapDispatchToprops = dispatch => ({
    togglecartDropdown: () => dispatch(togglecartDropdown())
})

export default connect(mapStateToProps, mapDispatchToprops)(CartDropdown);