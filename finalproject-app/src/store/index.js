import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoadingSlice';
import productSlice from './slices/productSlice';

export default configureStore({
    reducer: {
        isLoading,
        productSlice
    }
})
