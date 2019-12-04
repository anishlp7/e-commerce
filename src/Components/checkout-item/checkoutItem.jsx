import React from 'react';


import './checkoutItem.scss';
import { clearItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CheckoutItem = ({cartItem,clearItem}) => {
    const {name,price,quantity,imageUrl} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="CartItems" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem) }>
                &#10005;
            </div>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);