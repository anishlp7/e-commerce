import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Components/collection-preview/collection-preview'

class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop'>
                {
                        collections.map(({id,...OtherCollectionsPreview}) => (
                            <CollectionPreview key={id} {...OtherCollectionsPreview} />
                        ))
                }
            </div>
        )
    }
}

export default ShopPage;