export const addItemToCart = (cartItems,cartItemsToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id 
            ? 
            {...cartItem,quantity: cartItem.quantity + 1}
            :
            cartItem
            )
    }

    return [...cartItems,{...cartItemsToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems,removeItemFromCart) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === removeItemFromCart.id);

    if(existingItem === 1){
        return cartItems.filter(cartItem => cartItem.id !== removeItemFromCart.id);
    }

    return cartItems.map( cartItem => cartItem.id === removeItemFromCart.id
         ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
          :
           cartItem  
        )
}