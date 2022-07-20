import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productListReducers, productDetailsReducers } from './reducers/productReducers'

const reducer = {
    productList: productListReducers,
    productDetails: productDetailsReducers
}

const preloadedState = {
    
}

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    preloadedState,
})

export default store;