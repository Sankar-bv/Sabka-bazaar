import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";
import './Header.css';

const Header = ({hidden}) => {
    return(
        <div className="header-container">
            <img src={window.location.origin + '/static/images/logo.png'} alt="Sabkabazaar not found"/>
            <div className="product-urls">
            <Link to = '/'>Home</Link>
            <Link to = '/products'>Products</Link>
            </div>
            <div className="login-urls">
            <Link to = '/signin'>Signin</Link>
            <Link to = '/register'>Register</Link>
            <Cart />
            </div>
            {hidden ? null : <CartDropdown />}
            
        </div>
    )
}

const mapStateToprops = state => ({
    hidden: state.cart.hidden
})

export default connect(mapStateToprops)(Header);