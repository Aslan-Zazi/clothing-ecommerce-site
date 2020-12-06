import CartTypes from './cart.types';

export const toggleCart = () => ({
    type: CartTypes.TOGGLE_CART
});

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
});

export const decItem = item => ({
    type: CartTypes.DEC_ITEM,
    payload: item
});