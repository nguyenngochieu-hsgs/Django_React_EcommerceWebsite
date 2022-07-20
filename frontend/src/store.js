import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'

const reducer = {
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducers
}

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
 
const preloadedState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    preloadedState,
})

export default store;