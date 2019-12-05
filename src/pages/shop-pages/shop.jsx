import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../Components/collection-overview/collection-overview';
import Collection from '../collection/collection';


const ShopPage = ({match}) => (
            <div className='shop'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={ Collection } />
            </div>
        );


  
export default ShopPage;