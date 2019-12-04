import { createSelector} from 'reselect';
    
const selectCart = state => state.cart;

export const cartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const cartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const cartItemsCount = createSelector(
    [cartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)
);

export const cartItemsTotal = createSelector(
    [cartItems],
    cartItems => cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,0)
)