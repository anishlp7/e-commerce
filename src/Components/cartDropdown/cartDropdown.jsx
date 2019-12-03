import React from 'react';
import './cartDropdown.scss';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
);

export default CartDropDown;