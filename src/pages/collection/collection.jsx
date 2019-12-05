import React from 'react';

import { connect } from 'react-redux';
import { shopCollection } from '../../redux/shop/shopSelector'

import './collection.scss';

const Collection = ({collection}) => {
    console.log(collection)
    return(
    <div className="collection">
        <h2>COLLECTION PAGE</h2>
    </div>
)
    }

const mapStateToProps = (state,ownProps) => ({
    collection: shopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);