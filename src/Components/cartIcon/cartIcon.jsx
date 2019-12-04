import React from 'react';

import { connect } from 'react-redux'


import { cartItemsCount} from '../../redux/cart/cart.selector';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {createStructuredSelector} from 'reselect'

import './cartIcon.scss';

const CartIcon = ({toggleCartHidden,itemsCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemsCount: cartItemsCount
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);