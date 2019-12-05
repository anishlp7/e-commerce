import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = {price} * 1000;
    const publishableKey = 'pk_test_xLPDP5lBbzNUt2HB0IrOOdjL00llsX7lyg';

 const onToken = token => {
    console.log(token);
    alert('payment Successfull')
};

    return(
        <StripeCheckout 
          label="Pay Now"
          name="E-Commerce Colthing Ltd."
          billingAddress
          shippingAddres
          image='https://svgshare.com/i/CUz.svg'
          description={` Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeButton;