import { configureStore } from "@reduxjs/toolkit";
import productReducer from '@/app/Redux/Product/ProductSlice';

import thunk from 'redux-thunk';

export const store=configureStore({
    reducer:{
        product:productReducer
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})