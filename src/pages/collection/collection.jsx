import React from 'react';

import { connect } from 'react-redux';
import { shopCollection} from '../../redux/shop/shopSelector'

import CollectionList from '../../Components/collection-list/collection-list';

import './collection.scss';

const Collection = ({collections}) => {
    const { title,items} = collections;
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {
            items.map(item => <CollectionList key={item.id} items={item} />)
        }
        </div>
    </div>
)
    }

const mapStateToProps = (state,ownProps) => ({
    collections: shopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);