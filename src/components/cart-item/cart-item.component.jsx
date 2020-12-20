import React from 'react';

import {
    CartItemContainer,
    CartItemImage,
    CarItemDetailsContainer,
    CartItemName
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <CarItemDetailsContainer>
                <CartItemName>{name}</CartItemName>
                <span className='price'>{quantity} x ${price}</span>
            </CarItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;