import React from 'react';

import CollectionList from '../collection-list/collection-list';
import './collection-preview.scss'

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx)=> idx < 4 ).map((items) => (
                    <CollectionList key={items.id} items={items} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;