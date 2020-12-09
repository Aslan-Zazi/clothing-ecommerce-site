import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HwVDOBYQXDElvKNoaBMG6lJiSrpGUKWHL8u7LdbDLh91rEZMGlp7KeiMTaBqa7ZTmx5A7K4zvu6krguvokbSTIS00dpYhKhYP';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Ecommerce'
            billingAddress
            shippingAddress
            image='/images/Logo-for-Stripe.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;