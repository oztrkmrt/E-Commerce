import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import clientReducer from './slices/clientSlice';
import productReducer from './slices/productSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        shoppingCart: shoppingCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;