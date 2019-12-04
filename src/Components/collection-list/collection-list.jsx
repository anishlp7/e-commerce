import React from 'react';

import { connect } from 'react-redux';

import {addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button'

import './collection-list.scss';

const CollectionList = ({items,addItem}) => {
    const {name,price,imageUrl } = items;
    return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
           <span className='name'>{name}</span>
           <span className='price'>{price}</span> 
        </div>
        <CustomButton onClick={()=> addItem(items)} inverted>Add to Cart</CustomButton>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionList);