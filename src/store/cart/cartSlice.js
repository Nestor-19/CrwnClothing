import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => (cartItem.id === productToAdd.id)
    );
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => (cartItem.id === cartItemToRemove.id)
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }

    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id 
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
        )
    } 
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

const clearCartItems = (cartItems) => {
    return cartItems.filter(() => false);
}

const initialState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
        clearAllItemsFromCart(state) {
            state.cartItems = clearCartItems(state.cartItems)
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        }

    }
})

export const {addItemToCart, removeItemFromCart, clearItemFromCart, clearAllItemsFromCart ,setIsCartOpen} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;