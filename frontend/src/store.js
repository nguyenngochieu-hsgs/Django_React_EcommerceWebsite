import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateDetailsReducer } from './reducers/userReducers'


const reducer = {
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducers,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateDetailsReducer,
}

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const preloadedState = {
    cart: {
        cartItems: cartItemsFromStorage
    },

    userLogin: {
        userInfo: userInfoFromStorage
    }
}

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    preloadedState,
})

export default store;