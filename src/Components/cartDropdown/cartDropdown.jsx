import React from "react";
import "./cartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cartItem";
import CustomButton from "../custom-button/custom-button";
import { cartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropDown = ({ cartItems,history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { 
          cartItems.length ?
          cartItems.map(cartItem => (
        <CartItem key="cartItem.id" items={cartItem} />
      ))
      :
      <span className="empty-message">Your cart is empty </span>
    }
    </div>
    <CustomButton onClick={ () => {
        history.push('/checkout')
        dispatch(toggleCartHidden());
    } }>GO TO CHECK OUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
