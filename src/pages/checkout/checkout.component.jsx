import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item={cartItem} />))
                }
                <div className='total'>TOTAL: ${total}</div>
                <div className='test-warning'>
                    Please use the following fake credit card for your payment
                <br />
                Card number: 4242424242424242 	Exp: Any 3 digits CVV: Any future date
                </div>
                <StripeCheckoutButton price={total} />
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);