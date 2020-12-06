import CartTypes from './cart.types';
import { addItemToCart, removeItemFromCart, decItemFromCart } from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    itemCount: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART:
            return ({
                ...state,
                hidden: !state.hidden
            });
        case CartTypes.ADD_ITEM:
            return ({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            })
        case CartTypes.DEC_ITEM:
            return ({
                ...state,
                cartItems: decItemFromCart(state.cartItems, action.payload)
            })
        case CartTypes.REMOVE_ITEM:
            return ({
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            })
        default:
            return state;
    }
}

export default cartReducer;