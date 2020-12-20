import React from 'react';
import { connect } from 'react-redux';

import { decItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    CheckoutImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ item, decItem, addItem, removeItem }) => {
    const { name, quantity, price, imageUrl } = item;

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt='item' />
            </CheckoutImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => decItem(item)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(item)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => removeItem(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decItem: item => dispatch(decItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);