import { CartActionTypes } from "././CartTypes";

export const togglecartDropdown = () => ({
    type : CartActionTypes.Toggle_Cart_Hidden
});

export const addItem = item => ({
    type : CartActionTypes.Add_Item,
    payload : item
});

export const removeItemFromCart = item => ({
    type : CartActionTypes.REMOVE_ITEM,
    payload : item
});