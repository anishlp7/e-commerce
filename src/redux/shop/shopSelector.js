import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const shopSelector = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [shopSelector],
    collections=> Object.keys(collections).map(key => collections[key])
)

export const shopCollection = collectionURLParam => 
    createSelector(
        [shopSelector],
        collections => collections[collectionURLParam]
    )
