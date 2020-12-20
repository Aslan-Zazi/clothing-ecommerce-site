import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCounterContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCart, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCounterContainer>{itemCount}</ItemCounterContainer>
        </CartIconContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);