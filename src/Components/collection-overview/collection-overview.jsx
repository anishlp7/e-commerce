import React from 'react';

import { connect } from 'react-redux';


import {createStructuredSelector} from 'reselect';

import { shopSelector } from '../../redux/shop/shopSelector';
import CollectionPreview from '../../Components/collection-preview/collection-preview'

import './collection-overview.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id,...OtherCollectionsPreview}) => (
            <CollectionPreview key={id} {...OtherCollectionsPreview} />
        ))
}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: shopSelector
})

export default connect(mapStateToProps)(CollectionOverview);