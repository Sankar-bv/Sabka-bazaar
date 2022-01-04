import { addItemToCart, removeItemFromCart } from './CartItemQuantity'
import { CartActionTypes } from './CartTypes'

const intialstate = {
    hidden: true,
    cartItems: []
} 

export const CartReducer = (state=intialstate, action) => {
    switch (action.type) {
        case CartActionTypes.Toggle_Cart_Hidden:
            console.log(state)
            return {...state, hidden: !state.hidden}
        case CartActionTypes.Add_Item:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
              };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
             };         
        default:
            return state;
    }
}